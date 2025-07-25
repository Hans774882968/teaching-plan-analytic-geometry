import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/code-block.scss';
import App from './App.jsx';
import { getGeogebraHTML5Codebase } from './lib/getWebsiteBasePath.js';

window.GGB_WEB3D_NO_CACHE_BASE_PATH = getGeogebraHTML5Codebase();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
