import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppWithLoader from './components/Loader/AppWithLoader'
import AuthProvider from './Context/AuthContext/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppWithLoader />
    </AuthProvider>
  </StrictMode>,
)
