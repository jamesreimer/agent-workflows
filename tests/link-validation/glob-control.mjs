// Test-only guard at Linkinator's glob import, before upstream preprocessing.
import { registerHooks } from "node:module";
registerHooks({
  resolve(specifier, context, nextResolve) {
    const resolved = nextResolve(specifier, context);
    if (
      specifier !== "glob" ||
      !context.parentURL?.endsWith("/linkinator/build/src/options.js")
    )
      return resolved;
    const source = `import { glob as native } from ${JSON.stringify(resolved.url)};
      import { appendFileSync } from "node:fs";
      export async function glob(pattern, ...args) {
        appendFileSync(process.env.LINK_GLOB_TRACE, JSON.stringify(pattern) + "\\n");
        if (pattern !== ".") throw new Error("Nonliteral glob input");
        return native(pattern, ...args);
      }`;
    return {
      url: `data:text/javascript,${encodeURIComponent(source)}`,
      shortCircuit: true,
    };
  },
});
