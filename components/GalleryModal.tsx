import { useState, useEffect } from 'react'

interface GalleryModalProps {
  images: string[]
  initialIndex?: number
  artistName: string
  onClose: () => void
}

export default function GalleryModal({ images, initialIndex = 0, artistName, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="max-w-5xl w-full space-y-6" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{artistName}'s Work</h2>
            <p className="text-white/60 text-sm mt-1">Gallery Exhibition</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors text-4xl font-light w-10 h-10 flex items-center justify-center"
            aria-label="Close gallery"
          >
            ✕
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative bg-gradient-to-b from-black via-slate-grey/20 to-black rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`${artistName} work ${currentIndex + 1}`}
            className="w-full h-auto max-h-[65vh] object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-slate-grey/90 to-slate-grey/70 hover:from-slate-grey hover:to-slate-grey text-white p-4 rounded-full transition-all hover:scale-110 shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-slate-grey/70 to-slate-grey/90 hover:from-slate-grey hover:to-slate-grey text-white p-4 rounded-full transition-all hover:scale-110 shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 right-6 bg-gradient-to-r from-honey-bronze to-brown-red text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Loading indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8' 
                    : 'w-2'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#588157' : 'rgba(249, 250, 251, 0.3)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all snap-start opacity-70 hover:opacity-100 ${
                  index === currentIndex
                    ? 'shadow-lg scale-105'
                    : ''
                }`}
                style={{
                  borderColor: index === currentIndex ? '#588157' : 'rgba(249, 250, 251, 0.3)'
                }}
                aria-label={`Go to image ${index + 1}`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="px-4 flex items-center justify-between text-sm" style={{color: 'rgba(249, 250, 251, 0.7)'}}>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded text-xs" style={{backgroundColor: 'rgba(249, 250, 251, 0.1)'}}>←</kbd>
              <kbd className="px-2 py-1 rounded text-xs" style={{backgroundColor: 'rgba(249, 250, 251, 0.1)'}}>→</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded text-xs" style={{backgroundColor: 'rgba(249, 250, 251, 0.1)'}}>ESC</kbd>
              Close
            </span>
          </div>
          <span className="font-semibold text-honey-bronze">ArtistsHub Gallery</span>
        </div>
      </div>
    </div>
  )
}
