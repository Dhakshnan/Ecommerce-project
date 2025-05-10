
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>


   <BrowserRouter basename={basename}>
    <Provider store={store}>
    <App />
    </Provider>
      </BrowserRouter>
    
 
  </React.StrictMode>,
);
