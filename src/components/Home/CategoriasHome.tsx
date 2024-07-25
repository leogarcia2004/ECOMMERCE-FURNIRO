

import dining from '../../assets/home/image_dining.png'
import living from '../../assets/home/image_living.png'
import bedroom from '../../assets/home/image_bedroom.png'

const CategoriasHome = () => {
  return (
    <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
            <img src={dining} className=' h-80 mb-5 cursor-pointer' alt="Imagem móveis" />
            <span className='text-neutral-800 font-bold'>Dining</span>
        </div>

        <div className='flex flex-col items-center'>
            <img src={living} className=' h-80 mb-5 cursor-pointer' alt="Imagem móveis" />
            <span className='text-neutral-800 font-bold'>Living</span>
        </div>

        <div className='flex flex-col items-center'>
            <img src={bedroom} className=' h-80 mb-5 cursor-pointer' alt="Imagem móveis" />
            <span className='text-neutral-800 font-bold'>Bedroom</span>
        </div>
    </div>
  )
}

export default CategoriasHome