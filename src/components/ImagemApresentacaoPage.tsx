

import React from 'react'
import foto from '../assets/imagem_apresentacao.png'

interface TitleApresentacaoPageProps {
  title: string
}


const ImagemApresentacaoPage: React.FC<TitleApresentacaoPageProps> = ({title}) => {
  return (
    <div className='w-full'>
        <div>
            <h1>{title}</h1>
            <p><strong>Home <i className="fas fa-arrow-right"></i></strong> {title}</p>
        </div>
        <img src={foto} alt="Imagem Fundo" />
    </div>
  )
}

export default ImagemApresentacaoPage