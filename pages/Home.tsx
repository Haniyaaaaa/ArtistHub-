import Carousel from '../components/Carousel'

export default function Home() {
  const features = [
    {
      icon: 'palette2',
      title: 'Showcase Your Work',
      description: 'Create a stunning portfolio to display your best artwork and attract clients globally.'
    },
    {
      icon: 'briefcase',
      title: 'Get Hired',
      description: 'Connect with businesses and individuals looking for talented artists for their projects.'
    },
    {
      icon: 'currency-dollar',
      title: 'Earn Money',
      description: 'Build your career by taking commissions and getting paid fairly for your creative work.'
    },
    {
      icon: 'people',
      title: 'Network',
      description: 'Join a vibrant community of creatives and collaborate with other talented artists.'
    }
  ]

  const categories = [
    { name: 'Illustration', count: '240+ Artists', image: '🎨' },
    { name: 'Architecture', count: '180+ Artists', image: '🏛️' },
    { name: 'Fashion Design', count: '320+ Artists', image: '👗' },
    { name: 'UI/UX Design', count: '150+ Artists', image: '🎯' }
  ]

  const stats = [
    { number: '2,500+', label: 'Talented Artists' },
    { number: '5,000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries' }
  ]

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center pt-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Discover and Hire Exceptional Artists</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto" style={{color: '#588157'}}>
          Explore illustration, architecture, and fashion portfolios. Commission your next project or showcase your work.
        </p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <a href="#/signup" className="btn-primary">Get Started</a>
          <a href="#/artists" className="btn-secondary">Browse Artists</a>
        </div>
      </section>

      {/* Featured Artists Carousel */}
      <section>
        <h2 className="text-3xl font-extrabold text-gradient mb-6">Featured Artists</h2>
        <Carousel />
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-3xl font-extrabold text-center text-gradient mb-8">Why Choose ArtistsHub?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl backdrop-blur-sm" style={{backgroundColor: 'rgba(88, 129, 87, 0.08)', borderLeft: '4px solid #2D4A35'}}>
              <div className="mb-4">
                <i className={`bi bi-${feature.icon} text-4xl`} style={{color: '#2D4A35'}}></i>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: '#2D4A35'}}>{feature.title}</h3>
              <p className="text-sm" style={{color: '#636E72'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <h2 className="text-3xl font-extrabold text-center text-gradient mb-8">Explore Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <a key={i} href="#/gallery" className="group p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg cursor-pointer" style={{backgroundColor: 'rgba(88, 129, 87, 0.1)', border: '2px solid #DAD7CD'}}>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent-fern transition-colors" style={{color: '#2D4A35'}}>{cat.name}</h3>
              <p className="text-sm" style={{color: '#636E72'}}>{cat.count}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 -mx-8 px-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{backgroundColor: 'linear-gradient(135deg, #344E41 0%, #2D4A35 100%)', backgroundImage: 'linear-gradient(135deg, #344E41 0%, #2D4A35 100%)'}}>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{color: '#F9FAFB'}}>{stat.number}</div>
              <p style={{color: '#A3B18A'}}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8">
        <h2 className="text-3xl font-extrabold text-center text-gradient mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{backgroundColor: '#2D4A35', color: '#F9FAFB'}}>1</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#2D4A35'}}>Browse Portfolios</h3>
            <p style={{color: '#636E72'}}>Explore diverse portfolios from talented artists across various creative disciplines.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{backgroundColor: '#2D4A35', color: '#F9FAFB'}}>2</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#2D4A35'}}>Connect & Discuss</h3>
            <p style={{color: '#636E72'}}>Reach out to artists, discuss your project requirements, and collaborate seamlessly.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{backgroundColor: '#2D4A35', color: '#F9FAFB'}}>3</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#2D4A35'}}>Bring Ideas to Life</h3>
            <p style={{color: '#636E72'}}>Work together to create stunning artwork that exceeds your expectations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gradient mb-4">Ready to Get Started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{color: '#588157'}}>
          Join thousands of artists and clients building amazing projects together on ArtistsHub.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#/signup" className="btn-primary py-3 px-8 text-lg">Create Your Account</a>
          <a href="#/contact" className="btn-secondary py-3 px-8 text-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}