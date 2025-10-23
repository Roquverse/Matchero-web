import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Initialize Preline UI globally
if (typeof window !== 'undefined') {
  import('preline/preline').then(() => {
    // @ts-ignore - Preline adds HSStaticMethods to window
    window.HSStaticMethods?.autoInit()
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


