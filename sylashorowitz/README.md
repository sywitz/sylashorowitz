# Frontend Development

This React application is now powered by [Vite](https://vite.dev/) and uses [pnpm](https://pnpm.io/) for dependency management.

## Prerequisites

- Node.js 18+
- pnpm 8+

## Scripts

From `sylashorowitz/` you can run:

### `pnpm dev`

Start the local development server on [http://localhost:5173](http://localhost:5173) with hot module reloading.

### `pnpm test`

Run the unit test suite using [Vitest](https://vitest.dev/).

### `pnpm build`

Generate a production build in the `dist/` directory using Vite.

### `pnpm preview`

Serve the production build locally to verify deployment output.

## Additional Notes

- Static assets remain under `public/` and are copied as-is during the build.
- Environment variables now use the Vite `VITE_` prefix (e.g. `VITE_API_URL`).
- Continuous deployment (Amplify) installs dependencies with `pnpm install --frozen-lockfile` and builds with `pnpm run build`.
