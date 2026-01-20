export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-grey/20 bg-vanilla-custard/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo/logo.png" alt="ArtistsHub Logo" className="h-6 w-6 rounded" />
              <span className="font-extrabold text-lg text-gradient">ArtistsHub</span>
            </div>
            <p className="text-sm" style={{ color: '#2D3436' }}>
              Connecting exceptional artists with opportunities to showcase and monetize their creativity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#2D4A35' }}>Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Home</a></li>
              <li><a href="#/artists" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Artists</a></li>
              <li><a href="#/gallery" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Gallery</a></li>
              <li><a href="#/about" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>About</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#2D4A35' }}>Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Services</a></li>
              <li><a href="#/faq" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>FAQ</a></li>
              <li><a href="#/testimonials" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Testimonials</a></li>
              <li><a href="#/contact" className="hover:opacity-70 transition-opacity" style={{ color: '#2D3436' }}>Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#2D4A35' }}>Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ backgroundColor: '#2D4A35', color: '#F9FAFB' }}>
                <i className="bi bi-linkedin text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ backgroundColor: '#2D4A35', color: '#F9FAFB' }}>
                <i className="bi bi-twitter text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ backgroundColor: '#2D4A35', color: '#F9FAFB' }}>
                <i className="bi bi-instagram text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ backgroundColor: '#2D4A35', color: '#F9FAFB' }}>
                <i className="bi bi-facebook text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-grey/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: '#636E72' }}>
            <p>© {currentYear} ArtistsHub. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
