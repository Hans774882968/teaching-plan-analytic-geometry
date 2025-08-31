import { initToolbar } from '@21st-extension/toolbar';

// 2. Define your toolbar configuration
const stagewiseConfig = {
  plugins: [],
};

// 3. Initialize the toolbar when your app starts
// Framework-agnostic approach - call this when your app initializes
export function setupStagewise(wannaShow) {
  // Only initialize once and only in development mode
  if (process.env.NODE_ENV === 'development' && wannaShow) {
    initToolbar(stagewiseConfig);
  }
}
