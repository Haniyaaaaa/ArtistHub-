import { useEffect, useMemo, useState } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Artists from './pages/Artists.tsx'
import ArtistDetail from './pages/ArtistDetail.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Signup from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import Gallery from './pages/Gallery.tsx'
import Services from './pages/Services.tsx'
import FAQ from './pages/FAQ.tsx'
import Testimonials from './pages/Testimonials.tsx'

type RouteState = {
  path: string
  params: Record<string, string>
}

function parseHash(): RouteState {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  const segments = raw.split('/').filter(Boolean)

  // Routes:
  // / -> Home
  // /artists -> Artists list
  // /artists/:slug -> Artist detail
  // /about -> About
  // /contact -> Contact
  // /login -> Login
  // /signup -> Signup
  // /gallery -> Gallery
  // /services -> Services
  // /faq -> FAQ
  // /testimonials -> Testimonials

  if (segments.length === 0) return { path: '/', params: {} }

  if (segments[0] === 'artists' && segments.length === 1) {
    return { path: '/artists', params: {} }
  }

  if (segments[0] === 'artists' && segments[1]) {
    return { path: '/artists/:slug', params: { slug: segments[1] } }
  }

  if (segments[0] === 'about') return { path: '/about', params: {} }
  if (segments[0] === 'contact') return { path: '/contact', params: {} }
  if (segments[0] === 'login') return { path: '/login', params: {} }
  if (segments[0] === 'signup') return { path: '/signup', params: {} }
  if (segments[0] === 'gallery') return { path: '/gallery', params: {} }
  if (segments[0] === 'services') return { path: '/services', params: {} }
  if (segments[0] === 'faq') return { path: '/faq', params: {} }
  if (segments[0] === 'testimonials') return { path: '/testimonials', params: {} }

  return { path: '/', params: {} }
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(parseHash())

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const content = useMemo(() => {
    switch (route.path) {
      case '/':
        return <Home />
      case '/artists':
        return <Artists />
      case '/artists/:slug':
        return <ArtistDetail slug={route.params.slug} />
      case '/about':
        return <About />
      case '/contact':
        return <Contact />
      case '/login':
        return <Login />
      case '/signup':
        return <Signup />
      case '/gallery':
        return <Gallery />
      case '/services':
        return <Services />
      case '/faq':
        return <FAQ />
      case '/testimonials':
        return <Testimonials />
      default:
        return <Home />
    }
  }, [route])

  return (
    <AuthProvider>
      <div className="min-h-screen bg-vanilla-custard text-night-bordeaux flex flex-col">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-grey/5 via-honey-bronze/5 to-brown-red/5" />
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full section-padding">
          {content}
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}


