

import selo_new from '../../assets/shop/selo_new.png'
import selo_desconto from '../../assets/shop/selo_descount.png'

interface IProduct {
  id: number,
  title: string,
  description: string,
  short: string,
  normalPrice: number,
  salePrice: number,
  images: string,
  new: boolean
}

interface productsProps {
  products: IProduct[]
}

const Products:React.FC<productsProps> = ({products}) => {
  
  return (
    <div className='flex md:flex-wrap gap-6 flex-nowrap flex-col max-w-screen-xl h-[800px]'>
      {products.map((product) => (
        
        product.new ?
        <>
          <div key={product.id} className='bg-slate-200 relative flex w-52 h-90 flex-col'>
          <img className='absolute top-4 right-4 h-10' src={selo_new} alt="Selo new" />
          <img className='h-40' src={product.images.mainImage} alt={product.images.mainImage} />
          <div className='flex flex-col px-2 gap-1 '>
            <span className='font-semibold text-lg'>{product.title}</span>
            <span className='text-sm text-zinc-500'>{product.description.short}</span>
            <span className='font-semibold text-base'> Rp {product.normalPrice}</span>
          </div>
        </div>
        </>
        :
        <>
          <div key={product.id} className='bg-slate-200 relative flex w-52 h-90 flex-col'>
          <img className='absolute top-4 right-4 h-10' src={selo_desconto} alt="Selo desconto" />
          <img className='h-40' src={product.images.mainImage} alt={product.images.mainImage} />
          <div className='flex flex-col px-2 gap-1 '>
            <span className='font-semibold text-lg'>{product.title}</span>
            <span className='text-sm text-zinc-500'>{product.description.short}</span>
            <div className='flex gap-6'>
              <span className='font-semibold text-base'> Rp {product.salePrice}</span>
              <span className=' text-sm text-zinc-500 line-through'> Rp {product.normalPrice}</span>
              </div>
          </div>
        </div>
        </>
      ))}
    </div>
  )
}

export default Products