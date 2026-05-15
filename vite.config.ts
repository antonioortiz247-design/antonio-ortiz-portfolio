// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";

const stdin = process.stdin as unknown as {
  off?: (event: string | symbol, listener: (...args: unknown[]) => void) => void;
  removeListener?: (event: string | symbol, listener: (...args: unknown[]) => void) => void;
};

if (typeof stdin.off !== "function" && typeof stdin.removeListener === "function") {
  stdin.off = stdin.removeListener.bind(process.stdin);
}

function ensureTanStackPrerenderServerEntry() {
  return {
    name: "ensure-tanstack-prerender-server-entry",
    enforce: "pre",
    closeBundle() {
      const src = path.join(process.cwd(), "dist", "server", "index.js");
      const dst = path.join(process.cwd(), "dist", "server", "server.js");
      if (existsSync(src) && !existsSync(dst)) {
        copyFileSync(src, dst);
      }
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    plugins: [ensureTanStackPrerenderServerEntry()],
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
