import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
    
  )
}

// <Routes> = tells React all the pages that are in our website
// <Route> = add a page to our website
// index is same as path="/" 

export default App
