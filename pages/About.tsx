export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">About ArtistsHub</h1>
        <p className="text-xl text-night-bordeaux/80 max-w-3xl mx-auto">
          Empowering creative talent and connecting visionaries with exceptional artists worldwide
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gradient">Our Mission</h2>
          <p className="text-night-bordeaux/80 leading-relaxed">
            ArtistsHub is a creative platform that connects clients with exceptional artists across illustration, 
            architecture, fashion design, and digital arts. We believe in championing craftsmanship, celebrating diversity, 
            and ensuring equitable opportunities for artists worldwide.
          </p>
          <p className="text-night-bordeaux/80 leading-relaxed">
            Our goal is to make high-quality creative services accessible while providing artists with a platform to 
            showcase their unique talents and build sustainable careers.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-slate-grey/10 via-honey-bronze/10 to-brown-red/10 p-8 border border-slate-grey/20">
          <div className="text-5xl mb-4">
            <i className="bi bi-palette2" style={{color: '#588157'}}></i>
          </div>
          <p className="text-night-bordeaux font-semibold">Connecting Vision with Talent</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gradient">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: 'bi-star-fill', title: 'Excellence', desc: 'We curate only the finest artists and maintain the highest standards' },
            { icon: 'bi-handshake', title: 'Community', desc: 'Building meaningful connections between artists and clients' },
            { icon: 'bi-lightbulb', title: 'Innovation', desc: 'Leveraging technology to make creative collaboration seamless' },
            { icon: 'bi-globe', title: 'Diversity', desc: 'Celebrating artists from all backgrounds and cultures' },
            { icon: 'bi-lightning-charge', title: 'Efficiency', desc: 'Streamlined processes that save time and reduce barriers' },
            { icon: 'bi-target', title: 'Integrity', desc: 'Fair pricing, transparent communication, and honest partnerships' },
          ].map((value, i) => (
            <div key={i} className="rounded-2xl p-6 glass-effect space-y-3 hover:shadow-lg transition-shadow" style={{background: 'linear-gradient(135deg, #588157 0%, #3A5A40 100%)'}}>
              <div className="text-4xl">
                <i className={`bi ${value.icon}`} style={{color: '#F9FAFB'}}></i>
              </div>
              <h3 className="font-bold text-lg text-white">{value.title}</h3>
              <p className="text-sm text-white/80">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gradient">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-grey">For Clients</h3>
            <ul className="space-y-3">
              {[
                'Access to vetted, talented artists',
                'Transparent pricing and project management',
                'Easy communication and collaboration tools',
                'Quality assurance and satisfaction guarantee',
                'Wide range of creative services',
                'Fast turnaround times'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-night-bordeaux/80">
                  <span className="text-honey-bronze text-xl mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-grey">For Artists</h3>
            <ul className="space-y-3">
              {[
                'Global exposure to potential clients',
                'Fair compensation for your work',
                'Complete creative freedom',
                'Portfolio building opportunities',
                'Community and networking',
                'Growth and development support'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-night-bordeaux/80">
                  <span className="text-honey-bronze text-xl mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="rounded-3xl p-12 bg-gradient-to-r from-slate-grey/10 via-honey-bronze/10 to-brown-red/10 border border-slate-grey/20 space-y-6">
        <h2 className="text-3xl font-bold text-gradient">Why Choose ArtistsHub?</h2>
        <div className="grid md:grid-cols-2 gap-8 text-night-bordeaux/80">
          <div>
            <p className="leading-relaxed mb-4">
              Built with performance and accessibility in mind, our interface is designed to keep the artwork 
              front and center while providing a delightful browsing experience for everyone.
            </p>
            <p className="leading-relaxed">
              We're not just a marketplace—we're a community dedicated to fostering genuine creative partnerships 
              and supporting the artists who bring the world's best ideas to life.
            </p>
          </div>
          <div>
            <p className="leading-relaxed mb-4">
              Whether you're looking to commission your next masterpiece or showcase your artistic talents, 
              ArtistsHub provides the tools, community, and opportunities to make it happen.
            </p>
            <p className="leading-relaxed">
              Join thousands of satisfied clients and talented artists who are creating amazing work together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gradient">Ready to Get Started?</h2>
        <p className="text-lg text-night-bordeaux/80 max-w-2xl mx-auto">
          Whether you're a client seeking creative talent or an artist ready to showcase your work, 
          we're here to help you succeed.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#/signup" className="btn-primary">Join Now</a>
          <a href="#/artists" className="btn-secondary">Browse Artists</a>
          <a href="#/contact" className="btn-secondary">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}