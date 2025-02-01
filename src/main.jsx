import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/main.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App className="w-full"/>
    </ThemeProvider>
  </StrictMode>,
)
