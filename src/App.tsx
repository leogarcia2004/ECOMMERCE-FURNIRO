import { Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import HomePage from '../src/components/Home/HomePage'
import Shop from '../src/components/Shop/Shop'
import Contact from '../src/components/Contact/Contact'
import Footer from './components/Footer'
import ProductSelected from './components/Product/ProductSelected'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsFunc = async ({}) => {

         const response = await fetch('http://localhost:3000/products')

         const data = await response.json()
         setProducts(data)
    }
    productsFunc({})
}, [])

  return (
    <>
      <Header products={products} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop" element={<Shop /> } />
        <Route path="/productselected" element={<ProductSelected />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
