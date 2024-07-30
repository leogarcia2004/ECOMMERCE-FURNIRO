

import React from 'react'
import logo_furniro from '../assets/logo_furniro.png'

interface TitleApresentacaoPageProps {
  title: string
}

const ImagemApresentacaoPage: React.FC<TitleApresentacaoPageProps> = ({title}) => {
  return (
    <div className='w-full h-52 bg-image_demostracao flex justify-center relative'>
        <div className='flex md:flex-col  items-center justify-center'>
          <img className='h-16' src={logo_furniro} alt="Logo Furniro" />
            <h1 className='text-4xl font-bold mb-4 mr-2'>{title}</h1>
            <p><strong>Home <i className="fas fa-arrow-right ml-1 mr-1"></i></strong> {title}</p>
        </div>

    </div>
  )
}

export default ImagemApresentacaoPage