import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
    
  )
}

// <Routes> = tells React all the pages that are in our website
// <Route> = add a page to our website
// index is same as path="/" 

export default App
