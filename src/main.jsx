import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/animate-polyfill.css';
import './styles/code-block.scss';
import './styles/prose-overwrite.scss';
import App from './App.jsx';
import { getGeogebraHTML5Codebase } from './lib/getWebsiteBasePath.js';
import { setupStagewise } from './21st-toolbar';

window.GGB_WEB3D_NO_CACHE_BASE_PATH = getGeogebraHTML5Codebase();

setupStagewise(false);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
