import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from './context/user.context'
import App from './App'
import './index.scss'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>

        {/* now any component wrapped inside UserProvider will have the context */}
        <App />

      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
)
