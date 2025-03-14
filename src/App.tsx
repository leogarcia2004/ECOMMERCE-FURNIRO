import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import HomePage from "../src/components/Home/HomePage";
import Shop from "../src/components/Shop/Shop";
import Contact from "../src/components/Contact/Contact";
import Footer from "./components/Footer";
import ProductSelected from "./components/Product/ProductSelected";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Carrinho from "./components/Cart.tsx";
import CarrinhoContext from "./contexts/CartContext.tsx";
import LoginForm from "./components/login/LoginForm.tsx";
import Register from "./components/register/Register.tsx";
import PageThank from "./components/Thanks/ThanksPage.tsx";
import '@splidejs/react-splide/css';

function App() {
  return (
    <>
      <CarrinhoContext>
        <Carrinho />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productselected/:id" element={<ProductSelected />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thank" element={<PageThank />} />
        </Routes>
        <Footer />
      </CarrinhoContext>
    </>
  );
}

export default App;
