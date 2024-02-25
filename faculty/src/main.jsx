import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextApp } from './context/Context.jsx';

export const server = "http://localhost:4000/api/v1/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextApp>
  </React.StrictMode>,
)
