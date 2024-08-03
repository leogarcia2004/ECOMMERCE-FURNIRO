import React, { useState } from 'react';


const CarrosselProducts = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-control previous" onClick={handlePrevious}>‹</button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image-container ${index === selectedIndex ? 'selected' : ''}`}
          >
            <img
              src={image.src}
              alt={`Image ${index}`}
              className={`carousel-image ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => setSelectedIndex(index)}
            />
            {index === selectedIndex && (
              <div className='overlay-content'>
                <div className='text-content'>
                  <div className='bg-white py-8 px-6'>
                    <span className='mb-1'>01 - Bed Room</span>
                    <h1 className='font-bold text-2xl'>Inner Peace</h1>
                  </div>
                  <button className='px-4 w-fit py-2 bg-amber-600'>
                    <i className="fas fa-arrow-right text-white"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-control next" onClick={handleNext}>›</button>
    </div>
  );
};

export default CarrosselProducts;

