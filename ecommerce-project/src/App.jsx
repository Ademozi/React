import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>test checkout page</div>} />
    </Routes>
    
  )
}

// <Routes> = tells React all the pages that are in our website
// <Route> = add a page to our website
// index is same as path="/" 

export default App
