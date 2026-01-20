import { useState } from 'react'
import { useAuth } from '../src/context/AuthContext'

type Role = 'creator' | 'client'

export default function Signup() {
  const [role, setRole] = useState<Role>('creator')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    portfolioUrl: '',
    projectBrief: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signup } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await signup({
        name: formData.name,
        email: formData.email,
        role,
        password: role === 'creator' ? formData.password : undefined,
        profession: formData.profession,
        portfolioUrl: formData.portfolioUrl,
        projectBrief: formData.projectBrief,
      })
      setSuccess(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        profession: '',
        portfolioUrl: '',
        projectBrief: '',
      })
    } catch (err: any) {
      setError(err.message || 'Failed to create account')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md w-full rounded-3xl p-8 glass-effect border border-slate-grey/20 space-y-6 text-center">
          <div className="text-6xl">🎉</div>
          <h2 className="text-3xl font-bold text-gradient">Welcome!</h2>
          <p className="text-night-bordeaux/80">Your account has been created successfully. You can now explore and connect with incredible artists.</p>
          <div className="flex flex-col gap-3">
            <a href="#/" className="btn-primary">Go to Home</a>
            <a href="#/artists" className="btn-secondary">Browse Artists</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Join ArtistsHub</h1>
        <p className="text-xl text-night-bordeaux/80">
          Whether you're a creator looking to showcase your work or a client searching for talent, we have a place for you.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Role Selection */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => setRole('creator')} 
            className={`rounded-2xl p-6 border-2 transition-all transform hover:scale-105 ${
              role === 'creator' 
                ? 'border-honey-bronze bg-honey-bronze/10' 
                : 'border-slate-grey/20 bg-vanilla-custard/50 hover:border-slate-grey/40'
            }`}
          >
            <div className="text-4xl mb-3">
              <i className="bi bi-palette2" style={{color: '#588157'}}></i>
            </div>
            <div className="font-bold text-lg text-night-bordeaux">I'm a Creator</div>
            <div className="text-sm text-night-bordeaux/70 mt-1">Showcase your work and get hired</div>
          </button>
          
          <button 
            onClick={() => setRole('client')} 
            className={`rounded-2xl p-6 border-2 transition-all transform hover:scale-105 ${
              role === 'client' 
                ? 'border-honey-bronze bg-honey-bronze/10' 
                : 'border-slate-grey/20 bg-vanilla-custard/50 hover:border-slate-grey/40'
            }`}
          >
            <div className="text-4xl mb-3">
              <i className="bi bi-briefcase" style={{color: '#588157'}}></i>
            </div>
            <div className="font-bold text-lg text-night-bordeaux">I want to Hire</div>
            <div className="text-sm text-night-bordeaux/70 mt-1">Find talented artists for your project</div>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-3xl p-8 transition-all duration-300" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}} >
          {error && (
            <div className="p-3 bg-brown-red/20 border border-brown-red/40 rounded-lg text-white flex items-start gap-2 animate-in slide-in-from-top duration-300 text-sm">
              <span className="text-lg mt-0">
                <i className="bi bi-exclamation-circle"></i>
              </span>
              <span>{error}</span>
            </div>
          )}
          
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Basic Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>

          {/* Creator Specific Fields */}
          {role === 'creator' && (
            <div className="space-y-4 pt-4 border-t border-slate-grey/20">
              <h3 className="font-bold text-lg text-white">Creator Profile</h3>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="At least 6 characters"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Profession</label>
                <input
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="e.g., Graphic Designer, Web Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          )}

          {/* Client Specific Fields */}
          {role === 'client' && (
            <div className="space-y-4 pt-4 border-t border-slate-grey/20">
              <h3 className="font-bold text-lg text-white">Project Details</h3>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Project Brief</label>
                <textarea
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  className="w-full rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm resize-none placeholder-white"
                  style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                  placeholder="Tell us about your project and what you're looking for..."
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full font-bold py-3 px-8 rounded-full text-sm text-white transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 mt-6"
            style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}
          >
            {loading ? 'Creating account...' : <>Create Account <i className="bi bi-arrow-right"></i></>}
          </button>

          {/* Login Link */}
          <p className="text-center mt-6" style={{color: '#F9FAFB'}}>
            Already have an account? <a href="#/login" className="font-semibold hover:underline" style={{color: '#A3B18A'}}>Sign in here</a>
          </p>
        </form>
      </div>
    </div>
  )
}


