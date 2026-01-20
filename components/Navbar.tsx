import { useState } from 'react'

const links = [
  { href: '#/', label: 'Home' },
  { href: '#/artists', label: 'Artists' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-vanilla-custard/90 bg-vanilla-custard/85 border-b border-accent-sage/30">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
          <div className="relative">
            <img src="/logo/logo.png" alt="ArtistsHub Logo" className="h-10 w-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200" />
          </div>
          <span 
            className="font-black text-2xl bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundImage: 'linear-gradient(90deg, #588157 0%, #3A5A40 50%, #344E41 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%'
            }}
          >
            ArtistsHub
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-bold transition-all duration-200 hover:opacity-70" style={{color: '#2D4A35'}}>
              {l.label}
            </a>
          ))}
          <a href="#/signup" className="btn-primary text-sm font-semibold py-2.5 px-6 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">Sign up</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2.5 hover:bg-accent-fern/10 rounded-lg transition-all duration-200" onClick={() => setOpen(v => !v)}>
          <i className="bi bi-list text-2xl transition-colors duration-200 text-accent-pine" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-3 bg-vanilla-custard/95 border-t border-accent-sage/20">
          {links.map(l => (
            <a key={l.href} href={l.href} className="py-2.5 px-3 font-bold rounded-md transition-all duration-200 hover:bg-accent-fern/10 text-accent-pine" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#/signup" className="btn-primary text-center font-semibold py-2.5 rounded-lg mt-2 hover:shadow-lg transition-all duration-200" onClick={() => setOpen(false)}>Sign up</a>
        </div>
      )}
    </header>
  )
}


