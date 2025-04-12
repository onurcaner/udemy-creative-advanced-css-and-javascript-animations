import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './tailwind.css';

const rootElement = document.getElementById('react-root');
if (!rootElement) throw new Error('Can not found element: #react-root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
