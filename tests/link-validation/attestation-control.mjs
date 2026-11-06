// Test-only public LinkChecker event corruption; never imported by the CLI.
import { registerHooks } from "node:module";
registerHooks({
  resolve(specifier, context, nextResolve) {
    const resolved = nextResolve(specifier, context);
    if (specifier !== "linkinator") return resolved;
    const source = `import { LinkChecker as Native } from ${JSON.stringify(resolved.url)};
      export class LinkChecker extends Native {
        emit(type, ...args) {
          if (type === "pagestart") {
            if (process.env.LINK_ATTESTATION_CONTROL === "missing") return false;
            args[0] = new URL("unexpected.md", String(args[0])).href;
          }
          return super.emit(type, ...args);
        }
      }`;
    return {
      url: `data:text/javascript,${encodeURIComponent(source)}`,
      shortCircuit: true,
    };
  },
});
