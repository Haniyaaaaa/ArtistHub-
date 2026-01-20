import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How do I commission an artist?',
      answer: 'Browse our artist directory, find someone whose style matches your vision, and use the contact form on their profile page. You can also use our general contact form and we\'ll help match you with the right artist.'
    },
    {
      question: 'What are the typical pricing ranges?',
      answer: 'Pricing varies based on the project scope, artist experience, and complexity. Simple illustrations may start around $200, while complex architectural visualizations can range from $1,000 to $10,000+. We recommend discussing your budget directly with artists.'
    },
    {
      question: 'How long does a project typically take?',
      answer: 'Project timelines depend on complexity and artist availability. Simple illustrations may take 1-2 weeks, while larger projects like architectural designs can take 4-8 weeks. Always discuss timelines with your chosen artist before starting.'
    },
    {
      question: 'Can I request revisions?',
      answer: 'Yes! Most artists include a certain number of revisions in their base price. The exact number varies by artist and project type. This is typically discussed and agreed upon before work begins.'
    },
    {
      question: 'What file formats will I receive?',
      answer: 'You\'ll typically receive high-resolution files in formats like PNG, JPG, PDF, or vector formats (SVG, AI) depending on the project type. Specific deliverables are discussed during the project planning phase.'
    },
    {
      question: 'How do payments work?',
      answer: 'Payment terms vary by artist. Many require a deposit (often 50%) to begin work, with the remainder due upon completion. Some artists offer payment plans for larger projects. All payment details are discussed before work begins.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We encourage open communication throughout the project. If issues arise, contact the artist directly to discuss revisions. If you\'re unable to resolve concerns, reach out to our support team and we\'ll help mediate a solution.'
    },
    {
      question: 'Can artists work on commercial projects?',
      answer: 'Absolutely! Many of our artists specialize in commercial work. Be sure to discuss usage rights and licensing during your initial consultation, as commercial projects may have different pricing than personal projects.'
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-night-bordeaux/80 max-w-2xl mx-auto">
          Find answers to common questions about commissioning artists and working with our platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl glass-effect overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-grey/5 transition-colors"
            >
              <h3 className="text-lg font-bold text-night-bordeaux pr-4">{faq.question}</h3>
              <span className={`text-2xl text-primary transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-night-bordeaux/80 leading-relaxed border-t border-slate-grey/20 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="rounded-2xl p-8 glass-effect inline-block">
          <h3 className="text-xl font-bold text-gradient mb-2">Still have questions?</h3>
          <p className="text-night-bordeaux/80 mb-4">We're here to help! Reach out to our support team.</p>
          <a href="#/contact" className="btn-primary">Contact Support</a>
        </div>
      </div>
    </div>
  )
}

