import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='bg'>
      <App />
    </div>
  </React.StrictMode>
)
