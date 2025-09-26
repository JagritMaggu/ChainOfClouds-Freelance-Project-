import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import all of Bootstrap's CSS


createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
 </BrowserRouter>
 
)
