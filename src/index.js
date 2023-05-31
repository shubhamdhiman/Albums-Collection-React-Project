import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Required CSS files
import './Assets/css/index.css';
import App from './Components/App';

// Using createRoot() method and accessing the element using id root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App Component
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
