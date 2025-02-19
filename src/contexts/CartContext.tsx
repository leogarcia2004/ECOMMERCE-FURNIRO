import { createContext } from 'react';
import { IProduct } from '../components/PropsProduct';
import { useState, useEffect, useContext } from 'react';
import { useAuthContext } from './auth/AuthProvider';
interface PropsCarrinho {
  children: React.ReactNode;
}
interface ModalContextData {
  carrinhoOpen: boolean;
  setCarrinhoOpen: (open: boolean) => void;
  products: IProduct[];
  handleBuy: (id: number) => void;
  cartProducts: IProduct[];
  amount: number;
  quantities: { [key: number]: number };
  addQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeCart: (id: number) => void;
  handleCategory: (tag: string) => void;
  filteredHomeProductsRoom: IProduct[];
}

const ModalContext = createContext( {} as ModalContextData );

const CarrinhoContext:React.FC<PropsCarrinho> = ({children}) => {

  const [carrinhoOpen, setCarrinhoOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([])
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [selectedTag, setSelectedTag] = useState("");
  const {user} = useAuthContext();

  const handleBuy = (id: number) => {
    if(user){
      const product = products.find((product) => product.id === id);
      if (product) {
        setCartProducts((prevCartProducts) => {
          const isProductInCart = prevCartProducts.some((cartProduct) => cartProduct.id === id);
          if (isProductInCart) {
            setQuantities((prevQuantities) => ({
              ...prevQuantities,
              [id]: prevQuantities[id] + 0.5,
            }));
            return prevCartProducts;
          } else {
            setQuantities((prevQuantities) => ({
              ...prevQuantities,
              [id]: 1,
            }));
            return [...prevCartProducts, product];
          }
        });
      }
    } else {
      alert('Você precisa estar logado para efetuar a compra!')
    } 
  };

  const filteredHomeProductsRoom = products.filter(
    (product) => selectedTag === "" || product.tags.includes(selectedTag)
  );

  const handleCategory = (tag: string) => {
    setSelectedTag(tag);
  };

  const amount = cartProducts.reduce((acc, product) => {
    const quantity = quantities[product.id] || 1;
    const price = product.new ? product.normalPrice : product.salePrice ;
    return acc + (price * quantity);
  }, 0)

  const addQuantity = (id: number) => {
    if(user){
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: (prevQuantities[id] || 1) + 1,
      }));
    } else {
      alert('Você precisa estar logado para efetuar a compra!')
    }
  };

  const decreaseQuantity = (id: number) => {
    if(user){
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
      }));
    } else {
      alert('Você precisa estar logado para efetuar a compra!')
    }
  };

  const removeCart = (id: number) => {

    setCartProducts((prevCartProducts) => {
      const index = prevCartProducts.findIndex((product) => product.id === id);
      if (index === -1) {
        return prevCartProducts;
      }
      const newCartProducts = [...prevCartProducts];
      newCartProducts.splice(index, 1);
      return newCartProducts;
    });
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
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
      <ModalContext.Provider value={{products, carrinhoOpen, setCarrinhoOpen, handleBuy, cartProducts, amount, quantities, addQuantity, decreaseQuantity, removeCart, handleCategory, filteredHomeProductsRoom}}>
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

