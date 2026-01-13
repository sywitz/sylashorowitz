import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Preload background image immediately for faster rendering
const preloadBackgroundImage = () => {
  // Create image element to force browser to load it
  const img = new Image();
  // Use public folder path (served directly, not processed by Vite)
  img.src = '/assets/images/backgrounds/paper1.jpg';
  
  // Mark as loaded once image is ready
  img.onload = () => {
    document.body.classList.add('background-loaded');
  };
  
  // Fallback: mark as loaded after short delay (image might be cached or loading)
  // This ensures the background shows even if onload doesn't fire immediately
  setTimeout(() => {
    document.body.classList.add('background-loaded');
  }, 50);
};

// Start preloading immediately (before React renders)
preloadBackgroundImage();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

