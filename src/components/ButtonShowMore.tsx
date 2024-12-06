
import { useNavigate } from 'react-router-dom'

import React from 'react'

const BotaoShowMore = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/shop')
    }
  return (
    <div className='flex mt-4 justify-center'>
        <button onClick={handleNavigate} className="border-yellow-600 px-12 py-2 text-yellow-600 border rounded-sm hover:bg-yellow-600 hover:text-white font-semibold md:mt-2 mt-6">Show More</button>
    </div>
  )
}

export default BotaoShowMore