

import React from 'react'
import foto from '../assets/imagem_apresentacao.png'
import logo_furniro from '../assets/logo_furniro.png'

interface TitleApresentacaoPageProps {
  title: string
}

const ImagemApresentacaoPage: React.FC<TitleApresentacaoPageProps> = ({title}) => {
  return (
    <div className='w-full flex justify-center relative'>
        <div className='flex md:flex-col mt-16 items-center md:bottom-24 bottom-5 absolute'>
          <img className='h-16' src={logo_furniro} alt="Logo Furniro" />
            <h1 className='text-4xl font-bold mb-4 mr-2'>{title}</h1>
            <p><strong>Home <i className="fas fa-arrow-right ml-1 mr-1"></i></strong> {title}</p>
        </div>
        <img src={foto} alt="Imagem Fundo" />
    </div>
  )
}

export default ImagemApresentacaoPage