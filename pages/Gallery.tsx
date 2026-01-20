import { useState } from 'react'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  artistName: string
}

const allGalleryItems: GalleryItem[] = [
  // Textile & Pattern
  { id: 1, title: 'Botanical Patterns', category: 'Textile & Pattern', image: 'https://i.pinimg.com/736x/33/cf/22/33cf2221957af335432a5f361ec4db3b.jpg', artistName: 'Sarah Chen' },
  { id: 2, title: 'Color Harmony Study', category: 'Textile & Pattern', image: 'https://i.pinimg.com/736x/5d/aa/66/5daa6611a208867373981e082ee1fecd.jpg', artistName: 'Sarah Chen' },
  { id: 3, title: 'Geometric Weaves', category: 'Textile & Pattern', image: 'https://i.pinimg.com/1200x/b7/d7/db/b7d7db5c4ee6d06cc0c3193d3f2f0e78.jpg', artistName: 'Sarah Chen' },
  
  // Architecture
  { id: 4, title: 'Urban Visualization', category: 'Architecture', image: 'https://i.pinimg.com/736x/3a/8d/5e/3a8d5eec0be96b5fbfe8ada23bc8bb12.jpg', artistName: 'Marcus Rodriguez' },
  { id: 5, title: 'Sustainable Design', category: 'Architecture', image: 'https://i.pinimg.com/1200x/4d/e1/e0/4de1e0750c3f796659e4018b318dfcde.jpg', artistName: 'Marcus Rodriguez' },
  { id: 6, title: 'Architectural Concept', category: 'Architecture', image: 'https://i.pinimg.com/736x/aa/08/7a/aa087aadb1c5e08266087d3721f2f15c.jpg', artistName: 'Marcus Rodriguez' },
  
  // Fashion
  { id: 7, title: 'Luxury Collection', category: 'Fashion', image: 'https://i.pinimg.com/736x/ff/5e/ee/ff5eee67c117a4eec596bc47fc143db7.jpg', artistName: 'Elena Petrova' },
  { id: 8, title: 'Eco-Friendly Line', category: 'Fashion', image: 'https://i.pinimg.com/1200x/ea/b3/6e/eab36e70277f186430ba0050b7139a29.jpg', artistName: 'Elena Petrova' },
  { id: 9, title: 'Statement Pieces', category: 'Fashion', image: 'https://i.pinimg.com/736x/a8/e9/fa/a8e9fad84043cc005fe11a7c6a44888c.jpg', artistName: 'Elena Petrova' },
  
  // Illustration
  { id: 10, title: 'Character Design', category: 'Illustration', image: 'https://i.pinimg.com/1200x/d6/60/73/d66073fb79fbdf14241c530297f7d129.jpg', artistName: 'James Patterson' },
  { id: 11, title: 'Story Illustrations', category: 'Illustration', image: 'https://i.pinimg.com/1200x/1f/0b/cb/1f0bcb83ec92337efe451eaed1babf1b.jpg', artistName: 'James Patterson' },
  { id: 12, title: 'Digital Paintings', category: 'Illustration', image: 'https://i.pinimg.com/1200x/96/86/da/9686dabe05982ac12260dedf1c65ec45.jpg', artistName: 'James Patterson' },
  
  // UI/UX Design
  { id: 13, title: 'Mobile App Design', category: 'UI/UX Design', image: 'https://i.pinimg.com/1200x/ef/1d/aa/ef1daa2277d8e10eb41c5af8e0b77ea2.jpg', artistName: 'Amira Khalil' },
  { id: 14, title: 'Web Interface', category: 'UI/UX Design', image: 'https://i.pinimg.com/736x/8e/92/05/8e92054e1b3a6efd60a9c224351dddc9.jpg', artistName: 'Amira Khalil' },
  { id: 15, title: 'User Experience Flow', category: 'UI/UX Design', image: 'https://i.pinimg.com/736x/99/60/b0/9960b05a989430ae88394c0e3bfee065.jpg', artistName: 'Amira Khalil' },
]

const categories = ['All', 'Textile & Pattern', 'Architecture', 'Fashion', 'Illustration', 'UI/UX Design']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? allGalleryItems 
    : allGalleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gradient tracking-tight">Gallery</h1>
        <p className="text-lg text-text-brown max-w-2xl mx-auto">
          Explore our curated collection of exceptional artwork across various disciplines and artistic styles from our talented creators.
        </p>
        <p className="text-sm font-semibold" style={{ color: '#8B6F47' }}>Showing {filteredItems.length} artworks</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              selectedCategory === category
                ? 'text-white shadow-lg'
                : 'bg-bg-hover border-2 border-accent-warm/30 text-text-brown hover:border-accent-warm hover:shadow-md'
            }`}
            style={selectedCategory === category ? {
              background: 'linear-gradient(to right, #8B6F47, #C44536)'
            } : {}}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer text-left"
            >
              <div className="aspect-square overflow-hidden bg-slate-grey/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-semibold inline-block mb-2" style={{ color: '#8B6F47' }}>{item.category}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2">by {item.artistName}</p>
              </div>
              <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'rgba(139, 111, 71, 0.9)' }}>
                View
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl text-text-brown/60">No artworks found in this category.</p>
        </div>
      )}

      {/* Selected Item Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="max-w-4xl w-full space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-white/80 hover:text-white transition-colors text-4xl font-light"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="glass-effect rounded-2xl p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-white/70 text-sm font-semibold">CATEGORY</p>
                  <p className="text-white text-lg mt-2">{selectedItem.category}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-semibold">ARTIST</p>
                  <p className="text-white text-lg mt-2">{selectedItem.artistName}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-semibold">ID</p>
                  <p className="text-white text-lg mt-2">#{selectedItem.id.toString().padStart(3, '0')}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a 
                  href={`#/artists/${selectedItem.artistName.toLowerCase().replace(' ', '-')}`}
                  className="btn-primary flex-1 text-center"
                >
                  View Artist Profile
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn-secondary flex-1 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="glass-effect rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-4xl font-bold">Discover Amazing Artists</h2>
        <p className="text-text-brown max-w-2xl mx-auto text-lg">
          Browse through the portfolios of our talented creators and find the perfect artist for your next project.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#/artists" className="btn-primary">Browse All Artists</a>
          <a href="#/contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>
    </div>
  )
}

