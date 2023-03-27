import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Footer/>
  </React.StrictMode>,
)
