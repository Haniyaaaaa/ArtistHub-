import { useState, useEffect } from 'react'
import { contactAPI, artistsAPI } from '../src/utils/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [artistId, setArtistId] = useState<string | null>(null)
  const [artistName, setArtistName] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Check if there's an artist parameter in the URL
    const hash = window.location.hash
    const match = hash.match(/artist=([^&]+)/)
    if (match) {
      const artistSlug = match[1]
      // Fetch artist ID from slug
      artistsAPI.getBySlug(artistSlug).then((response) => {
        if (response.success && response.data) {
          const artist = response.data as any
          setArtistId(artist._id)
          setArtistName(artist.name)
          setFormData(prev => ({ ...prev, subject: `Inquiry about hiring ${artist.name}` }))
        }
      })
    }
  }, [])

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
      const response = await contactAPI.submit({
        ...formData,
        artistId: artistId || undefined,
      })
      
      if (response.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(response.message || 'Failed to send message')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Get in Touch</h1>
        <p className="text-xl text-night-bordeaux/80 max-w-3xl mx-auto">
          {artistName 
            ? `Interested in working with ${artistName}? Send us a message and we'll help make it happen.`
            : 'Have a project or question? We\'d love to hear from you. Reach out and let\'s create something amazing together.'}
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 space-y-2" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
            <div className="text-4xl">
              <i className="bi bi-envelope" style={{color: '#F9FAFB'}}></i>
            </div>
            <h3 className="font-bold text-base" style={{color: '#F9FAFB'}}>Email</h3>
            <p className="text-sm" style={{color: '#F9FAFB'}}>For general inquiries and project requests</p>
            <a href="mailto:hello@artistshub.com" className="text-honey-bronze font-semibold hover:underline transition-colors text-sm">
              hello@artistshub.com
            </a>
          </div>

          <div className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 space-y-2" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
            <div className="text-4xl">
              <i className="bi bi-chat-dots" style={{color: '#F9FAFB'}}></i>
            </div>
            <h3 className="font-bold text-base" style={{color: '#F9FAFB'}}>Community</h3>
            <p className="text-sm" style={{color: '#F9FAFB'}}>Join our community for updates and discussions</p>
            <a href="#" className="text-honey-bronze font-semibold hover:underline transition-colors text-sm">
              Discord Community
            </a>
          </div>

          <div className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 space-y-2" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
            <div className="text-4xl">
              <i className="bi bi-clock" style={{color: '#F9FAFB'}}></i>
            </div>
            <h3 className="font-bold text-base" style={{color: '#F9FAFB'}}>Response Time</h3>
            <p className="text-sm" style={{color: '#F9FAFB'}}>We typically respond within 24 hours</p>
            <p className="font-semibold text-sm" style={{color: '#F9FAFB'}}>Available 24/7</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="rounded-2xl p-6 transition-all duration-300" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
            {error && (
              <div className="p-3 bg-brown-red/20 border border-brown-red/40 rounded-lg text-white flex items-start gap-2 mb-4 animate-in slide-in-from-top duration-300 text-sm">
                <span className="text-lg mt-0">
                  <i className="bi bi-exclamation-circle"></i>
                </span>
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="p-3 bg-honey-bronze/20 border border-honey-bronze/40 rounded-lg text-white flex items-start gap-2 mb-4 animate-in slide-in-from-top duration-300 text-sm">
                <span className="text-lg mt-0">
                  <i className="bi bi-check-circle"></i>
                </span>
                <span>Thank you for your message! We will get back to you soon.</span>
              </div>
            )}

            {artistName && (
              <div className="p-3 bg-white/10 border border-white/20 rounded-lg mb-4 animate-in fade-in duration-300">
                <p className="text-sm" style={{color: '#F9FAFB'}}>
                  <span className="font-semibold">Artist:</span> {artistName}
                </p>
              </div>
            )}

            <div className="transition-all duration-300 mb-4">
              <label className="block text-sm font-bold mb-2" style={{color: '#F9FAFB'}}>Full Name *</label>
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

            <div className="transition-all duration-300 mb-4">
              <label className="block text-sm font-bold mb-2" style={{color: '#F9FAFB'}}>Email Address *</label>
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

            <div className="transition-all duration-300 mb-4">
              <label className="block text-sm font-bold mb-2" style={{color: '#F9FAFB'}}>Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm placeholder-white"
                style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                placeholder="What is this about?"
              />
            </div>

            <div className="transition-all duration-300 mb-6">
              <label className="block text-sm font-bold mb-2" style={{color: '#F9FAFB'}}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-sm resize-none placeholder-white"
                style={{backgroundColor: '#A3B18A', color: '#2D4A35'}}
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full font-bold py-3 px-8 rounded-full text-sm text-white transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}
            >
              {loading ? 'Sending...' : <>Send Message <i className="bi bi-arrow-right"></i></>}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gradient text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: 'How long does it take to receive a response?',
              a: 'We aim to respond to all inquiries within 24 hours. For urgent matters, please mark your message as priority.'
            },
            {
              q: 'Can I hire multiple artists for one project?',
              a: 'Absolutely! We can connect you with multiple artists who specialize in different areas of your project.'
            },
            {
              q: 'What if I\'m not satisfied with the work?',
              a: 'We have a satisfaction guarantee. If you\'re not happy with the initial delivery, we\'ll work with the artist on revisions.'
            },
            {
              q: 'Do you offer payment plans?',
              a: 'Yes, depending on the project scope, we can arrange flexible payment terms. Discuss this during your consultation.'
            }
          ].map((faq, i) => (
            <div key={i} className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
              <h3 className="font-bold text-white flex items-start gap-3 mb-2 text-sm">
                <span className="text-white mt-0.5">
                  <i className="bi bi-question-circle"></i>
                </span>
                {faq.q}
              </h3>
              <p className="text-white/80 text-xs">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


