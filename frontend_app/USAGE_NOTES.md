# Frontend App Notes

- Default route renders the Sign In screen aligned with the provided Figma assets.
- Figma raster icons are available under public/assets and referenced via /assets/* URLs.
- CI should run the build using `npm run ci` (alias to `react-scripts build`) to avoid starting an interactive dev server.
- Environment variables (REACT_APP_API_BASE, REACT_APP_BACKEND_URL, etc.) should be provided in .env by the orchestrator; they are not hardcoded here.
