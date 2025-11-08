import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// smooth scroll behavior for the entire site
document.documentElement.style.scrollBehavior = 'smooth'

createRoot(document.getElementById('root')).render(<App />)
