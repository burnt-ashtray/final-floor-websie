# FINAL FLOOR website

The website source is now extracted into **`app/`**. The runnable project is at `app/package.json`, with app code under `app/src/`, Vite config at `app/vite.config.ts`, and Worker config at `app/wrangler.jsonc`.

- **Cloudflare Workers Builds root directory:** `/app`
- **Build script:** `npm run build` (the project includes `bun.lock`; use Bun if the build environment detects it)
- The original ZIP is retained at the repository root as a backup.

The original Higgsfield production URL returned HTTP 401 to unauthenticated requests. Exporting the source does not itself change that hosting gate; a successful public deployment must be completed in the hosting account.
