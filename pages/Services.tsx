export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Custom Illustrations',
      description: 'Commission unique illustrations tailored to your vision. From book covers to digital art, our artists bring your ideas to life.',
      features: ['Digital & Traditional', 'Multiple Revisions', 'High Resolution Files']
    },
    {
      icon: '🏗️',
      title: 'Architectural Design',
      description: 'Professional architectural visualization and design services for residential and commercial projects.',
      features: ['3D Renderings', 'Floor Plans', 'Concept Development']
    },
    {
      icon: '👗',
      title: 'Fashion Design',
      description: 'Creative fashion design services including clothing design, pattern making, and style consultation.',
      features: ['Custom Designs', 'Pattern Creation', 'Style Consultation']
    },
    {
      icon: '💼',
      title: 'Brand Identity',
      description: 'Complete brand identity packages including logos, color schemes, and visual guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'User interface and experience design for web and mobile applications with modern, intuitive designs.',
      features: ['Wireframing', 'Prototyping', 'User Testing']
    },
    {
      icon: '🎬',
      title: 'Animation & Motion',
      description: 'Dynamic animations and motion graphics for videos, presentations, and digital media.',
      features: ['2D Animation', 'Motion Graphics', 'Video Editing']
    },
  ]

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Our Services</h1>
        <p className="mt-4 text-lg text-night-bordeaux/80 max-w-2xl mx-auto">
          Comprehensive creative services to bring your vision to life. From concept to completion, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl p-8 glass-effect hover:shadow-2xl transition-all transform hover:scale-105 space-y-4"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gradient">{service.title}</h3>
            <p className="text-night-bordeaux/70 leading-relaxed">{service.description}</p>
            <ul className="space-y-2 pt-4 border-t border-slate-grey/20">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-night-bordeaux/80">
                  <span className="text-honey-bronze">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-slate-grey to-honey-bronze text-white font-semibold hover:from-slate-grey/90 hover:to-honey-bronze/90 transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-12 bg-gradient-to-r from-slate-grey/10 via-honey-bronze/10 to-brown-red/10 border-2 border-slate-grey/20 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">Ready to Start Your Project?</h2>
        <p className="text-night-bordeaux/80 mb-6 max-w-2xl mx-auto">
          Get in touch with us today and let's discuss how we can bring your creative vision to life.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#/contact" className="btn-primary">Contact Us</a>
          <a href="#/artists" className="btn-secondary">Browse Artists</a>
        </div>
      </div>
    </div>
  )
}

