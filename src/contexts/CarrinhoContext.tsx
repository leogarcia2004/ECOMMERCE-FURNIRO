import { createContext } from 'react';
import { IProduct } from '../components/PropsProduct';
import { useState, useEffect, useContext } from 'react';

interface PropsCarrinho {
  children: React.ReactNode;
}

interface ModalContextData {
  carrinhoOpen: boolean;
  setCarrinhoOpen: (open: boolean) => void;
  products: IProduct[];
  handleBuy: (id: number) => void;
  cartProducts: IProduct[];
  // getProducts: () => void;
}

  const ModalContext = createContext( {} as ModalContextData );

const CarrinhoContext:React.FC<PropsCarrinho> = ({children}) => {

  const [carrinhoOpen, setCarrinhoOpen] = useState<boolean>(false);
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const handleBuy = (id: number) => {
    
    const product = products.find((product) => product.id === id);
    if (product) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product]); 
    }
  }

  const getProducts = () => {
    const productsFunc = async () => {

         const response = await fetch('http://localhost:3000/products')

         const data = await response.json()
         setProducts(data)
    }
    productsFunc()
  }

  useEffect(() => {
    getProducts()
}, [])
  
  return (

    <div>
      <ModalContext.Provider value={{products, carrinhoOpen, setCarrinhoOpen, handleBuy, cartProducts}}>
        {children}
      </ModalContext.Provider>
    </div>
  )
}

export function useCarrinho() {
  const data = useContext(ModalContext);

  if (!data) {
    throw new Error("Cannot use useAuth outside a ThemeProvider");
  }

  return data;
}

export default CarrinhoContext

