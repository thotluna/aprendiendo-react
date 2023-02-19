import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PlayProvider } from './contexts/play'
import { ScoreProvider } from './contexts/scoreContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScoreProvider>
      <PlayProvider>
        <App />
      </PlayProvider>
    </ScoreProvider>
  </React.StrictMode>
)
