import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stopwatch from './stopwatch'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stopwatch />
  </StrictMode>,
)
