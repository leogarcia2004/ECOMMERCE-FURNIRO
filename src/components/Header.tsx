
import { Link } from 'react-router-dom'
import logo from '../assets/logo_header.png'
import LoginForm from './LoginForm'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carrinho from './Carrinho'
import { IProduct } from './PropsProduct'

const Header = () => {

    // const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const loginOpen = () => {
        setIsOpen(!isOpen)
      }

    const [carrinhoOpen, setCarrinhoOpen] = useState<boolean>(false)

    const CarrinhoClick = () => {
        setCarrinhoOpen(!carrinhoOpen)
    }

    const navigate = useNavigate()

    const navigateClick = () => {

        navigate('/')
    }

  return (
    <header className='bg-white flex flex-col gap-4 items-center justify-center md:justify-between font-semibold md:items-center md:flex-row py-6 w-full md:h-20 h-fit top-0 sticky z-10'>

        <img className='pl-10 cursor-pointer' onClick={navigateClick} src={logo} alt="Logo loja" />

        <nav>
            <ul className='flex gap-16 justify-center font-600'>
                <li className='cursor-pointer'>
                    <Link to={"/"}>Home</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to={"/shop"}>Shop</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to={"/contact"}>About</Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>

            <div className='flex justify-center md:pr-20 gap-8'>
                <button>
                    <i onClick={loginOpen} className="fas fa-user-injured fa-lg cursor-pointer"></i>
                </button>
                <button>
                    <i onClick={CarrinhoClick} className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
                </button>
            </div>
            
        <LoginForm isOpen={isOpen} setFormOpen={() => setIsOpen(!isOpen)} />
        {/* <Carrinho products={cartProducts} isOpen={carrinhoOpen} setCarrinhoOpen={() => setCarrinhoOpen(!carrinhoOpen)}/> */}
    </header>
  )
}

export default Header