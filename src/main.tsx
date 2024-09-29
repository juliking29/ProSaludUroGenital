import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './interfaces/Menu.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
