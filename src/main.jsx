import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
      
  },
  {
    path: "",
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
