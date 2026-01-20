import { useState } from 'react'
import { useAuth } from '../src/context/AuthContext'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      await login(formData.email, formData.password)
      // Redirect will be handled by the auth context
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">Welcome Back</h1>
          <p className="text-night-bordeaux/80">Sign in to your ArtistsHub account</p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="rounded-3xl p-8 transition-all duration-300 space-y-6" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}} >
          {error && (
            <div className="p-3 bg-brown-red/20 border border-brown-red/40 rounded-lg text-white flex items-start gap-2 animate-in slide-in-from-top duration-300 text-sm">
              <span className="text-lg mt-0">
                <i className="bi bi-exclamation-circle"></i>
              </span>
              <span>{error}</span>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
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

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
              style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span style={{color: '#F9FAFB'}}>Remember me</span>
            </label>
            <a href="#" className="hover:underline font-semibold" style={{color: '#A3B18A'}}>Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-bold py-3 px-8 rounded-full text-sm text-white transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}
          >
            {loading ? 'Signing in...' : <>Sign In <i className="bi bi-arrow-right"></i></>}
          </button>

          {/* Sign Up Link */}
          <a
            href="#/signup"
            className="block w-full text-center font-bold py-3 px-8 rounded-full text-sm text-white transition-all duration-200 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 mt-6"
            style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}
          >
            Create Account <i className="bi bi-arrow-right"></i>
          </a>
        </form>

        {/* Footer */}
        <p className="text-center text-night-bordeaux/70 text-sm">
          By signing in, you agree to our{' '}
          <a href="#" className="text-honey-bronze hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-honey-bronze hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
