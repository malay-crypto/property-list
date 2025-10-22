import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextFile from "./context/ContextFile.jsx";
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render(
        <BrowserRouter>

            <ContextFile>
                <App />
            </ContextFile>
        </BrowserRouter>



)
