import { useState } from 'react';
import ArtistCarousel from './ArtistCarousel';
import ArtistModal from './artistmodal';

interface Artist {
  profession: string;
  name: string;
  intro: string;
  fullDescription: string;
  images: string[];
}

interface ArtistSectionProps {
  artist: Artist;
}

const ArtistSection: React.FC<ArtistSectionProps> = ({ artist }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id={artist.profession.toLowerCase().replace(' ', '-')} className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <ArtistCarousel images={artist.images} name={artist.name} />
        
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
              {artist.profession}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">{artist.name}</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">{artist.intro}</p>
          </div>
          
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold w-fit hover:from-indigo-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            See More Work →
          </button>
        </div>
      </div>

      {showModal && (
        <ArtistModal artist={artist} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default ArtistSection;