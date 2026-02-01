import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getIslandById, getPlacesByIsland } from '../data/places';
import PlaceCard from '../components/PlaceCard';
import { PlaceMap } from '../components/Map';

type Category = 'all' | 'beach' | 'volcano' | 'historic' | 'nature' | 'culture' | 'adventure';

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All Places', icon: '🗺️' },
  { id: 'beach', label: 'Beaches', icon: '🏖️' },
  { id: 'volcano', label: 'Volcanoes', icon: '🌋' },
  { id: 'historic', label: 'Historic', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'culture', label: 'Culture', icon: '🎭' },
  { id: 'adventure', label: 'Adventure', icon: '🚗' },
];

export default function Island() {
  const { islandId } = useParams<{ islandId: string }>();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const island = getIslandById(islandId || '');
  const allPlaces = getPlacesByIsland(islandId || '');

  if (!island) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Island not found</h1>
        <Link to="/" className="text-teal-600 hover:text-teal-700">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const filteredPlaces =
    selectedCategory === 'all'
      ? allPlaces
      : allPlaces.filter(p => p.category === selectedCategory);

  const availableCategories = new Set(allPlaces.map(p => p.category));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-teal-500">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${island.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative h-full flex items-center max-w-7xl mx-auto px-4">
          <div>
            <Link
              to="/"
              className="text-blue-200 hover:text-white text-sm mb-2 inline-flex items-center gap-1"
            >
              ← All Islands
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{island.name}</h1>
            <p className="text-blue-100 max-w-2xl">{island.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Map Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📍 Places on {island.name}</h2>
          <PlaceMap center={island.center} places={allPlaces} className="h-72 rounded-xl shadow-md" />
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const isAvailable = cat.id === 'all' || availableCategories.has(cat.id);
              if (!isAvailable) return null;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Places Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Places' : `${categories.find(c => c.id === selectedCategory)?.label}`}
            </h2>
            <span className="text-gray-500 text-sm">{filteredPlaces.length} places</span>
          </div>

          {filteredPlaces.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No places found in this category.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map(place => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
