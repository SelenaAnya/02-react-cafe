import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '.src/index.css'
import App from './components/App/App'App.css


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
