import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// Import ToastContainer component
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Add ToastContainer to your app */}
  </React.StrictMode>,
  document.getElementById('root')
);
