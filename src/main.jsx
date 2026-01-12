import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArticleApp from './ArticleApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticleApp />
  </StrictMode>,
)
