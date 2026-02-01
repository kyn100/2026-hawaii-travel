import { islands } from '../data/places';
import IslandCard from '../components/IslandCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-blue-600 via-teal-500 to-blue-700">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover Hawaii
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Your February 2026 Adventure Awaits
            </p>
            <p className="text-blue-200 max-w-xl mx-auto">
              Explore the most popular destinations across Oahu, the Big Island, and Maui.
              From volcanic craters to pristine beaches, discover what makes each island unique.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Islands Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Choose Your Island</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each Hawaiian island has its own personality. Select an island to explore its most
            popular attractions, beaches, and hidden gems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {islands.map(island => (
            <IslandCard key={island.id} island={island} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600">3</div>
              <div className="text-gray-600 mt-1">Islands to Explore</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">15</div>
              <div className="text-gray-600 mt-1">Popular Places</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">6</div>
              <div className="text-gray-600 mt-1">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">Feb</div>
              <div className="text-gray-600 mt-1">2026 Trip</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Legend */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">What You'll Find</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: '🏖️', label: 'Beaches', color: 'bg-blue-100 text-blue-700' },
            { icon: '🌋', label: 'Volcanoes', color: 'bg-red-100 text-red-700' },
            { icon: '🏛️', label: 'Historic Sites', color: 'bg-amber-100 text-amber-700' },
            { icon: '🌿', label: 'Nature', color: 'bg-green-100 text-green-700' },
            { icon: '🎭', label: 'Culture', color: 'bg-purple-100 text-purple-700' },
            { icon: '🚗', label: 'Adventures', color: 'bg-orange-100 text-orange-700' },
          ].map(cat => (
            <span
              key={cat.label}
              className={`px-4 py-2 rounded-full text-sm font-medium ${cat.color}`}
            >
              {cat.icon} {cat.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
