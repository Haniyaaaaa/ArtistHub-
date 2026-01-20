export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Book Publisher',
      company: 'Literary Press',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      text: 'Working with ArtistsHub transformed our book cover design process. We found an incredible illustrator who perfectly captured the essence of our story. The platform made it so easy to connect with talented artists.'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'Tech Innovations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      text: 'The brand identity package we commissioned exceeded all expectations. The artist understood our vision immediately and delivered a cohesive design system that perfectly represents our company.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fashion Designer',
      company: 'Style Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      text: 'As a designer myself, I appreciate quality work. The architectural visualization services we received were professional, detailed, and helped us secure our biggest client. Highly recommended!'
    },
    {
      name: 'David Thompson',
      role: 'Marketing Director',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 5,
      text: 'We\'ve commissioned multiple projects through ArtistsHub. The quality is consistently excellent, and the communication process is smooth. It\'s become our go-to platform for creative talent.'
    },
    {
      name: 'Lisa Park',
      role: 'Indie Game Developer',
      company: 'Pixel Games',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      rating: 5,
      text: 'The concept art and character designs we received were exactly what we needed. The artist was responsive, incorporated feedback beautifully, and delivered on time. Couldn\'t be happier!'
    },
    {
      name: 'James Wilson',
      role: 'Real Estate Developer',
      company: 'Urban Developments',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      text: 'The 3D architectural renderings helped us visualize and present our project to investors. The attention to detail was impressive, and it made a huge difference in our presentation.'
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Client Testimonials</h1>
        <p className="mt-4 text-lg text-night-bordeaux/80 max-w-2xl mx-auto">
          See what our clients have to say about working with artists through our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 glass-effect hover:shadow-2xl transition-all transform hover:scale-105 space-y-4"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-honey-bronze text-xl">★</span>
              ))}
            </div>
            <p className="text-night-bordeaux/80 leading-relaxed italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-grey/20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-slate-grey/30"
              />
              <div>
                <div className="font-bold text-night-bordeaux">{testimonial.name}</div>
                <div className="text-sm text-night-bordeaux/60">{testimonial.role} at {testimonial.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="rounded-2xl p-12 bg-gradient-to-r from-slate-grey/10 via-honey-bronze/10 to-brown-red/10 border-2 border-slate-grey/20">
          <h2 className="text-3xl font-bold text-gradient mb-4">Join Our Community</h2>
          <p className="text-night-bordeaux/80 mb-6 max-w-2xl mx-auto">
            Become part of a growing network of clients and artists creating amazing work together.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#/signup" className="btn-primary">Get Started</a>
            <a href="#/artists" className="btn-secondary">Explore Artists</a>
          </div>
        </div>
      </div>
    </div>
  )
}

