// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// 1Password mounts `.env` as a FIFO. Vite treats every write as a change and
// restarts in a loop ("connection dropped"). Secrets for local dev live in `.env.local`.
function ignoreOpEnvFifo() {
  return {
    name: "ignore-1password-env-fifo",
    configureServer(server: { config: { root: string }; watcher: { unwatch: (file: string) => void } }) {
      server.watcher.unwatch(path.resolve(server.config.root, ".env"));
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [ignoreOpEnvFifo()],
    server: {
      watch: {
        ignored: ["**/.env"],
      },
    },
  },
});
