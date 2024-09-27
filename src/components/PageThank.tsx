

import Informacoes from './Informacoes'
import { useNavigate } from 'react-router-dom'

const PageThank = () => {

    const navigate = useNavigate()

    const navigateThankToHome = () => {
        navigate('/')
    }
  return (
    <div>
        <section className='flex flex-col pl-10'>
        <i onClick={navigateThankToHome} className='fas absolute top-8 left-10 fa-arrow-left fa-lg cursor-pointer py-5 px-3 shadow-md bg-white shadow-neutral-400 rounded-full'></i>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-center mt-10'>Thank you for your purchase!</h1>
                <p className='text-lg text-center mt-5'>Your order is being processed and will be shipped soon.</p>
            </div>
        </section>
        <Informacoes />
    </div>
  )
}

export default PageThank