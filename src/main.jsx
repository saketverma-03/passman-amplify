import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
// theme.js


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      
      <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
