import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// HashRouter is required for GitHub Pages — BrowserRouter causes blank pages
// because GitHub Pages doesn't support HTML5 history API URL fallback.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
