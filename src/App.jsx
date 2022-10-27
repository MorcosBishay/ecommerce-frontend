import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Products from './pages/Products/Products'

function App() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Products />
      <ToastContainer />
    </div>
  )
}

export default App
