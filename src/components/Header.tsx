
import { Link } from 'react-router-dom'
import logo from '../assets/logo_header.png'
import LoginForm from './LoginForm'
import { useState } from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true)

    const loginOpen = () => {
        setIsOpen(!isOpen)
      }

  return (
    <header className='bg-white flex justify-between font-semibold items-center  w-full h-20 top-0 sticky z-10'>

        <img className='pl-10' src={logo} alt="Logo loja" />

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

            <div className='flex pr-20 gap-8'>
                <button>
                    <i onClick={loginOpen} className="fas fa-user-injured fa-lg cursor-pointer"></i>
                </button>
                <button>
                    <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
                </button>
            </div>
            
        <LoginForm isOpen={isOpen} setFormOpen={() => setIsOpen(!isOpen)} />
    </header>
  )
}

export default Header