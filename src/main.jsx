
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>


   <BrowserRouter basename={basename}>
    
    <App />

      </BrowserRouter>
    
 
  </React.StrictMode>,
);
