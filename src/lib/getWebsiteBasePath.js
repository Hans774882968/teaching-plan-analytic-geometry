const GITHUB_PAGE_BASE = '/teaching-plan-analytic-geometry/';

export function getWebsiteBasePath() {
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const basePath = isGitHubPages ? GITHUB_PAGE_BASE : '/';
  return basePath;
}

export function getGeogebraHTML5Codebase() {
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const codebase = isGitHubPages ? `${GITHUB_PAGE_BASE}geogebra/web3d/` : '/geogebra/web3d/';
  return codebase;
}
