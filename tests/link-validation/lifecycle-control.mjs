// Test-only public API facade: no prototype edits or private upstream imports.
import { registerHooks } from "node:module";
registerHooks({
  resolve(specifier, context, nextResolve) {
    const resolved = nextResolve(specifier, context);
    if (
      specifier !== "linkinator" ||
      !context.parentURL?.endsWith("/tools/check-links.mjs")
    )
      return resolved;
    const source = `import { LinkChecker as Native } from ${JSON.stringify(resolved.url)};
      import { appendFileSync } from "node:fs";
      const mode = process.env.LINK_LIFECYCLE_CONTROL;
      const trace = event => appendFileSync(process.env.LINK_LIFECYCLE_TRACE, JSON.stringify(event) + "\\n");
      let cancelInner;
      export class LinkChecker extends Native {
        async check(options) {
          if (options.path !== ".") {
            trace("inner-check");
            if (mode === "inner-failure") throw new Error("Injected inner check failure");
            if (mode === "not-awaited") return new Promise((resolve, reject) => {
              cancelInner = () => { trace("pending-inner-cancelled"); reject(new Error("Test inner cancelled safely")); };
            });
            return super.check(options);
          }
          trace("native-bootstrap-start");
          let pending;
          const original = options.linksToSkip;
          const callback = mode === "no-result" ? async () => true :
            mode === "repeated" ? async url => { await original(url); return original(url); } :
            mode === "not-awaited" ? url => { pending = original(url); pending.catch(() => {}); return true; } : original;
          let result;
          try { result = await super.check({ ...options, linksToSkip: callback }); }
          catch (error) { cancelInner?.(); await pending?.catch(() => {}); throw error; }
          trace("native-bootstrap-complete");
          // Native bootstrap/server has completed; cancel the held test-only
          // inner promise without starting a URL request or leaking a server.
          if (mode === "not-awaited") setImmediate(() => cancelInner?.());
          if (mode === "wrong-count") return { ...result, links: [...result.links, result.links[0]] };
          if (mode === "non-skipped") return { ...result, links: result.links.map(link => ({ ...link, state: "OK" })) };
          return result;
        }
      }`;
    return {
      url: `data:text/javascript,${encodeURIComponent(source)}`,
      shortCircuit: true,
    };
  },
});
