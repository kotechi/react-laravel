import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BarangDetail from './page/BarangDetail.jsx'
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: `/barang/:id`,
    element: <BarangDetail />
  }
])

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
