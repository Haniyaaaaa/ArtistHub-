interface Artist {
  profession: string;
  name: string;
  fullDescription: string;
  images: string[];
}

interface ArtistModalProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artist, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                {artist.profession}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">{artist.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {artist.fullDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {artist.images.map((image: string, index: number) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt={`${artist.name}'s work ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistModal;