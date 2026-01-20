import { useEffect, useState } from 'react'
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

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true)
        const response = await artistsAPI.getAll({ featured: true })
        if (response.success && response.data && Array.isArray(response.data) && response.data.length > 0) {
          setArtists(response.data as Artist[])
        } else {
          // Fallback to local data
          console.log('API returned no data, using local artists')
          setArtists(topArtists)
        }
      } catch (err: any) {
        console.error('Failed to load artists from API, using local data:', err)
        // Fallback to local data
        setArtists(topArtists)
        setError(null) // Don't show error if we have local data
      } finally {
        setLoading(false)
      }
    }

    fetchArtists()
  }, [])

  if (loading) {
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold text-gradient">Featured Artists</h2>
        <div className="text-center py-12">
          <p className="text-night-bordeaux/60">Loading artists...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold text-gradient">Featured Artists</h2>
        <div className="text-center py-12">
          <p className="text-brown-red">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-gradient">Featured Artists</h2>
      {artists.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-night-bordeaux/60">No artists found.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map(a => (
            <a key={a.slug} href={`#/artists/${a.slug}`} className="group block rounded-2xl overflow-hidden border border-slate-grey/20 bg-vanilla-custard/70 hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={a.heroImage} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <div className="font-bold">{a.name}</div>
                <div className="text-sm text-primary">{a.role}</div>
                <p className="mt-2 text-sm text-night-bordeaux/80 line-clamp-2">{a.bio}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}


