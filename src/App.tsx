import { Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import HomePage from '../src/components/Home/HomePage'
import Shop from '../src/components/Shop/Shop'
import Contact from '../src/components/Contact/Contact'
import Footer from './components/Footer'
import ProductSelected from './components/Product/ProductSelected'
import Cart from './components/Cart/Cart'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop /> } />
        <Route path="/productselected" element={<ProductSelected />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
