import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './index.css'
import ThemeContextWrapper from './lib/context/ThemeContextWrapper.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeContextWrapper>
  </React.StrictMode>
)
