import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import DataContext from './context/DataContext.jsx';

createRoot(document.getElementById('root')).render(
    <DataContext>
        <BrowserRouter>
             <App />
        </BrowserRouter>    
    </DataContext>
);
