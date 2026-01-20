import { useEffect, useRef, useState } from 'react'
import { artistsAPI } from '../src/utils/api'
import { topArtists } from '../data/artists'

interface Artist {
  _id?: string
  slug: string
  name: string
  role: string
  bio: string
  heroImage: string
  gallery: string[]
}

export default function Carousel() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await artistsAPI.getAll({ featured: true })
        if (response.success && response.data && Array.isArray(response.data) && response.data.length > 0) {
          const featuredArtists = (response.data as Artist[]).slice(0, 5) // Limit to 5 for carousel
          setArtists(featuredArtists)
        } else {
          // Fallback to local data
          setArtists(topArtists.slice(0, 5))
        }
      } catch (error) {
        console.error('Failed to load artists from API, using local data:', error)
        // Fallback to local data
        setArtists(topArtists.slice(0, 5))
      } finally {
        setLoading(false)
      }
    }

    fetchArtists()
  }, [])

  useEffect(() => {
    if (artists.length > 0) {
      timerRef.current = window.setInterval(() => {
        setIndex(i => (i + 1) % artists.length)
      }, 4000)
      return () => { if (timerRef.current) window.clearInterval(timerRef.current) }
    }
  }, [artists.length])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-3xl shadow-2xl h-[320px] md:h-[480px] bg-slate-grey/20 animate-pulse" />
        <div className="glass-effect rounded-3xl p-8">
          <div className="h-8 bg-slate-grey/20 rounded animate-pulse mb-4" />
          <div className="h-4 bg-slate-grey/20 rounded animate-pulse mb-2" />
          <div className="h-4 bg-slate-grey/20 rounded animate-pulse" />
        </div>
      </div>
    )
  }

  if (artists.length === 0) {
    return null
  }

  const current = artists[index]

  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative w-full h-[320px] md:h-[480px]">
          {artists.map((artist, i) => (
            <img
              key={artist.slug}
              src={artist.heroImage}
              alt={artist.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
              loading={i === index ? 'eager' : 'lazy'}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {artists.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-6' : 'w-2'}`} style={{backgroundColor: i === index ? '#F9FAFB' : 'rgba(249, 250, 251, 0.6)'}} />
            ))}
          </div>
        </div>
      </div>
      <div className="glass-effect rounded-3xl p-8 flex flex-col justify-between">
        <div className="transition-all duration-1000 ease-in-out">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 transition-all duration-1000 ease-in-out" style={{color: '#F9FAFB'}}>{current.name}</h2>
          <p className="font-semibold mb-4 transition-all duration-1000 ease-in-out" style={{color: '#F9FAFB'}}>{current.role}</p>
          <p className="leading-relaxed transition-all duration-1000 ease-in-out" style={{color: '#F9FAFB'}}>{current.bio}</p>
        </div>
        <div className="pt-6 transition-all duration-1000 ease-in-out">
          <a href={`#/artists/${current.slug}`} className="inline-flex items-center gap-3 font-semibold hover:gap-4 transition-all duration-300" style={{color: '#F9FAFB', fontSize: '1.125rem'}}>
            <span className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{backgroundColor: '#F9FAFB'}}>
              <i className="bi bi-arrow-right transition-transform duration-300" style={{color: '#588157', fontSize: '1.25rem'}} />
            </span>
            See more
          </a>
        </div>
      </div>
    </div>
  )
}