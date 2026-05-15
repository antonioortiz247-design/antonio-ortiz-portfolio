// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const deployTarget = process.env.DEPLOY_TARGET;
const isVercel = deployTarget === "vercel" || process.env.VERCEL === "1";
const isCloudflare =
  deployTarget === "cloudflare" || process.env.CF_PAGES === "1" || process.env.CLOUDFLARE === "1";

export default defineConfig({
  cloudflare: isCloudflare ? undefined : false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
  },
});
