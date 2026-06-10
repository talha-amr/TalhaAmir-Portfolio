import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Links from './components/Links.jsx'

const isLinksRoute = window.location.pathname === '/links';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLinksRoute ? <Links /> : <App />}
  </StrictMode>,
)
