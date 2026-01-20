import { useEffect, useState } from 'react'
import { artistsAPI } from '../src/utils/api'
import { topArtists } from '../data/artists'
import GalleryModal from '../components/GalleryModal'

interface Artist {
  _id?: string
  slug: string
  name: string
  role: string
  bio: string
  heroImage: string
  gallery: string[]
}

interface ArtistStats {
  projects: number
  clients: number
  experience: string
  satisfaction: number
}

const artistStats: Record<string, ArtistStats> = {
  'sarah-chen': { projects: 120, clients: 45, experience: '8+ years', satisfaction: 98 },
  'marcus-rodriguez': { projects: 85, clients: 32, experience: '10+ years', satisfaction: 99 },
  'elena-petrova': { projects: 95, clients: 38, experience: '9+ years', satisfaction: 97 },
  'james-patterson': { projects: 150, clients: 62, experience: '7+ years', satisfaction: 99 },
  'amira-khalil': { projects: 110, clients: 55, experience: '6+ years', satisfaction: 98 },
}

export default function ArtistDetail({ slug }: { slug: string }) {
  const [artist, setArtist] = useState<Artist | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const stats = artistStats[slug] || { projects: 100, clients: 40, experience: '5+ years', satisfaction: 96 }

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        setLoading(true)
        const response = await artistsAPI.getBySlug(slug)
        if (response.success && response.data) {
          setArtist(response.data as Artist)
        } else {
          // Fallback to local data
          const localArtist = topArtists.find(a => a.slug === slug)
          if (localArtist) {
            setArtist(localArtist)
          } else {
            setError('Artist not found')
          }
        }
      } catch (err: any) {
        console.error('Failed to load artist from API, trying local data:', err)
        // Fallback to local data
        const localArtist = topArtists.find(a => a.slug === slug)
        if (localArtist) {
          setArtist(localArtist)
          setError(null)
        } else {
          setError(err.message || 'Failed to load artist')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchArtist()
  }, [slug])

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center py-12">
          <p className="text-night-bordeaux/60">Loading artist...</p>
        </div>
      </div>
    )
  }

  if (error || !artist) {
    return (
      <div className="space-y-8">
        <p className="text-night-bordeaux">{error || 'Artist not found.'}</p>
        <a href="#/artists" className="text-slate-grey underline">Back to artists</a>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-night-bordeaux/70">
        <a href="#/" className="hover:text-honey-bronze transition">Home</a>
        <span>/</span>
        <a href="#/artists" className="hover:text-honey-bronze transition">Artists</a>
        <span>/</span>
        <span className="text-honey-bronze font-semibold">{artist.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
          <img src={artist.heroImage} alt={artist.name} className="w-full h-[320px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-semibold text-honey-bronze">Featured Artist</p>
              <p className="text-xl font-bold mt-1">{artist.role}</p>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="space-y-6">
          <div className="glass-effect rounded-3xl p-8">
            <h1 className="text-5xl font-extrabold mb-2" style={{color: '#F9FAFB'}}>
              {artist.name}
            </h1>
            <p className="font-semibold text-lg" style={{color: '#DAD7CD'}}>
              {artist.role}
            </p>
            <div className="w-16 h-1 mt-4" style={{background: 'linear-gradient(to right, #A3B18A, #DAD7CD)'}}></div>
            <p className="mt-6 leading-relaxed text-lg" style={{color: '#F9FAFB'}}>
              {artist.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-effect rounded-2xl p-5 text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold" style={{color: '#F9FAFB'}}>{stats.projects}</p>
              <p className="text-sm mt-2" style={{color: '#DAD7CD'}}>Projects Completed</p>
            </div>
            <div className="glass-effect rounded-2xl p-5 text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold" style={{color: '#F9FAFB'}}>{stats.clients}</p>
              <p className="text-sm mt-2" style={{color: '#DAD7CD'}}>Happy Clients</p>
            </div>
            <div className="glass-effect rounded-2xl p-5 text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold" style={{color: '#F9FAFB'}}>{stats.experience}</p>
              <p className="text-sm mt-2" style={{color: '#DAD7CD'}}>Experience</p>
            </div>
            <div className="glass-effect rounded-2xl p-5 text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold" style={{color: '#A3B18A'}}>{stats.satisfaction}%</p>
              <p className="text-sm mt-2" style={{color: '#DAD7CD'}}>Satisfaction</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4 flex-col sm:flex-row">
            <a href={`#/contact?artist=${artist.slug}`} className="btn-primary text-center font-semibold py-3 px-6 hover:shadow-lg transition-all duration-200">💼 Hire {artist.name}</a>
            <a href="#/artists" className="btn-secondary text-center font-semibold py-3 px-6 hover:shadow-lg transition-all duration-200">Browse More Artists</a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {artist.gallery && artist.gallery.length > 0 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">Portfolio Gallery</h2>
            <p className="text-night-bordeaux/70">Click on any image to view in full screen</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artist.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedImageIndex(i)
                  setGalleryOpen(true)
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-grey/20 hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <img
                  src={src}
                  alt={`${artist.name} work ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <span className="text-white text-5xl block">🔍</span>
                    <p className="text-white text-sm mt-2 font-semibold">View Full Size</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-honey-bronze/90 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {i + 1}/{artist.gallery.length}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="w-screen -ml-[calc((100vw-100%)/2)] -mr-[calc((100vw-100%)/2)] p-8 md:p-12" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8" style={{color: '#F9FAFB'}}>About {artist.name.split(' ')[0]}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-5xl">
                <i className="bi bi-palette2" style={{color: '#DAD7CD'}}></i>
              </div>
              <h3 className="text-lg font-bold" style={{color: '#F9FAFB'}}>Creative Vision</h3>
              <p style={{color: '#DAD7CD'}}>Transforming ideas into visual masterpieces with innovation and meticulous attention to detail in every project.</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">
                <i className="bi bi-award" style={{color: '#DAD7CD'}}></i>
              </div>
              <h3 className="text-lg font-bold" style={{color: '#F9FAFB'}}>Award-Winning</h3>
              <p style={{color: '#DAD7CD'}}>Recognized internationally for excellence and breakthrough work in {artist.role.toLowerCase()}</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">
                <i className="bi bi-handshake" style={{color: '#DAD7CD'}}></i>
              </div>
              <h3 className="text-lg font-bold" style={{color: '#F9FAFB'}}>Client Focused</h3>
              <p style={{color: '#DAD7CD'}}>Dedicated to understanding and exceeding client expectations in every collaboration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Services & Specializations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {artist.role.toLowerCase().includes('illustration') && (
            <>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Character Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Creating memorable characters for games, animation, and branding projects</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Editorial Illustration</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Custom illustrations for publications, books, and digital media</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Digital Painting</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Professional digital artwork with modern techniques and styles</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Concept Art</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Pre-production artwork for games, films, and creative projects</p>
              </div>
            </>
          )}
          {artist.role.toLowerCase().includes('architecture') && (
            <>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>3D Visualization</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Photorealistic renderings of architectural designs</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Urban Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Strategic planning and master planning for urban spaces</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Sustainable Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Eco-friendly architectural solutions and green building design</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Project Management</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Full-scale project coordination from concept to completion</p>
              </div>
            </>
          )}
          {artist.role.toLowerCase().includes('fashion') && (
            <>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Collection Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Creating cohesive fashion collections with unique aesthetics</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Garment Construction</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Technical design and pattern making for quality garments</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Textile Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Custom fabric patterns and material selection</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Brand Consultation</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Strategic fashion branding and styling guidance</p>
              </div>
            </>
          )}
          {!artist.role.toLowerCase().includes('illustration') && !artist.role.toLowerCase().includes('architecture') && !artist.role.toLowerCase().includes('fashion') && (
            <>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Professional Design</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>High-quality, customized solutions tailored to your needs</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Consultation & Strategy</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Expert guidance and strategic planning for your projects</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-fern">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Full Project Management</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>End-to-end support from concept to final delivery</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-l-4 border-accent-sage">
                <p className="text-lg font-semibold" style={{color: '#F9FAFB'}}>Revisions & Support</p>
                <p className="mt-2" style={{color: '#F9FAFB'}}>Unlimited revisions and ongoing support after delivery</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Related Artists */}
      {topArtists.length > 1 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Discover Other Talented Artists</h2>
            <a href="#/artists" className="inline-flex items-center gap-3 font-semibold hover:gap-4 transition-all" style={{color: '#588157', fontSize: '1.125rem'}}>
              <span>See All Artists</span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#588157', color: '#F9FAFB'}}>
                <i className="bi bi-arrow-right" style={{fontSize: '1.125rem'}} />
              </span>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topArtists
              .filter(a => a.slug !== slug)
              .slice(0, 4)
              .map(relatedArtist => (
                <a
                  key={relatedArtist.slug}
                  href={`#/artists/${relatedArtist.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={relatedArtist.heroImage}
                    alt={relatedArtist.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-start justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{relatedArtist.name}</h3>
                    <p className="text-honey-bronze text-sm">{relatedArtist.role}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="w-screen -ml-[calc((100vw-100%)/2)] -mr-[calc((100vw-100%)/2)] -mb-8 p-12 md:p-16 text-center space-y-8" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{color: '#F9FAFB'}}>Ready to Work Together?</h2>
          <p className="max-w-2xl mx-auto text-lg" style={{color: '#DAD7CD'}}>
            Get in touch with {artist.name} to discuss your project and explore how they can bring your vision to life.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap pt-6">
          <a href={`#/contact?artist=${artist.slug}`} className="font-bold py-3 px-8 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2" style={{backgroundColor: '#F9FAFB', color: '#2D4A35'}}>Start a Project <i className="bi bi-arrow-right"></i></a>
          <a href="#/artists" className="font-bold py-3 px-8 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2" style={{color: '#F9FAFB', border: '2.5px solid #F9FAFB', backgroundColor: 'transparent'}}>Explore More <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>

      {galleryOpen && artist.gallery && (
        <GalleryModal
          images={artist.gallery}
          initialIndex={selectedImageIndex}
          artistName={artist.name}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  )
}