import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://unsplash.it/800/400?image=10',
    'https://unsplash.it/800/400?image=20',
    'https://unsplash.it/800/400?image=30',
  ];

  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>

        {/* Prev and Next Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
          onClick={prevSlide}
        >
          ←
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
          onClick={nextSlide}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
