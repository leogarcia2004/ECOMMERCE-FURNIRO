import { useCarrinho } from "../../contexts/CartContext";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const CarrosselProducts = () => {
  const { handleCategory } = useCarrinho();

  const imagensCarousel = [
    {
      title: "Bedroom",
      tag: "Quarto",
      imageURL: "https://static.mobly.com.br/p/Mobly-Guarda-Roupa-Casal-com-Espelho-ValC3AAncia-2-PT-6-GV-Branco-4758-1029401-1.jpg"
    },
    {
      title: "Living",
      tag: "Sala",
      imageURL: "https://static.mobly.com.br/p/Estilare-Rack-Ciro-Branco-125-cm-4975-201767-5.jpg"
    },
    {
      title: "Dining",
      tag: "Mesa",
      imageURL: "https://static.mobly.com.br/p/Kappesberg-Conjunto-com-2-Cadeiras-Tiva-Linho-Cinza-e-Nogueira-9086-6509821-2.jpg"
    },
  ];

  return (
    <div className="ml-12 w-5/12">
      <Splide
        options={{
          type: 'loop',
          gap: '1rem', 
          perPage: 2, 
          perMove: 1,
        }}
      >
        {imagensCarousel.map((image, index) => (
          <SplideSlide key={index}>
            <div>
              <div className="text-content flex items-end absolute bottom-3 left-6 z-10">
                <div className='bg-white py-6 px-4'>
                  <span className='mb-1 text-xs text-gray-500'>
                    {index < 10 ? `0${index + 1}` : index + 1} -- {image.title}
                  </span>
                  <h1 className='font-bold text-2xl'>Inner Peace</h1>
                </div>
                <button
                  className="px-4 py-2 bg-amber-600"
                  onClick={() => handleCategory(image.tag)}
                >
                  <i className="fas fa-arrow-right text-white"></i>
                </button>
              </div>
              <img src={image.imageURL} alt={image.title} className="w-72 object-cover rounded-md" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CarrosselProducts;