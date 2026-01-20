import React, { useState } from 'react';

interface ArtistCarouselProps {
  images: string[];
  name: string;
}

const ArtistCarousel: React.FC<ArtistCarouselProps> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`${name}'s work ${currentIndex + 1}`}
          className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
      >
        ›
      </button>
    </div>
  );
};

export default ArtistCarousel;