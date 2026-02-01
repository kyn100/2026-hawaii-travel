import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getPlaceById, getIslandById } from '../data/places';
import { PhotoGallery } from '../components/Gallery';
import { PlaceMap } from '../components/Map';
import { useWikipedia } from '../hooks';
import type { Restaurant } from '../types';

type Tab = 'overview' | 'history' | 'facts';

const categoryColors: Record<string, string> = {
  beach: 'bg-blue-100 text-blue-700',
  volcano: 'bg-red-100 text-red-700',
  historic: 'bg-amber-100 text-amber-700',
  nature: 'bg-green-100 text-green-700',
  culture: 'bg-purple-100 text-purple-700',
  adventure: 'bg-orange-100 text-orange-700',
};

const categoryIcons: Record<string, string> = {
  beach: '🏖️',
  volcano: '🌋',
  historic: '🏛️',
  nature: '🌿',
  culture: '🎭',
  adventure: '🚗',
};

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900">{restaurant.name}</h4>
        <span className="text-sm font-medium text-teal-600">{restaurant.priceRange}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{restaurant.cuisine}</span>
        <span className="text-xs text-amber-500">★ {restaurant.rating}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{restaurant.description}</p>
      <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
        {restaurant.address}
      </div>
      {restaurant.mustTry && (
        <div className="text-xs">
          <span className="text-gray-500">Must try: </span>
          <span className="font-medium text-teal-700">{restaurant.mustTry}</span>
        </div>
      )}
    </div>
  );
}

export default function Place() {
  const { placeId } = useParams<{ placeId: string }>();
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const place = getPlaceById(placeId || '');
  const island = place ? getIslandById(place.island) : null;
  const { data: wikiData } = useWikipedia(place?.wikipediaSlug);

  if (!place || !island) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Place not found</h1>
        <Link to="/" className="text-teal-600 hover:text-teal-700">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History' },
    { id: 'facts', label: 'Facts' },
  ];

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600">
              Home
            </Link>
            <span>/</span>
            <Link to={`/island/${island.id}`} className="hover:text-teal-600">
              {island.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{place.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[place.category]}`}
            >
              {categoryIcons[place.category]} {place.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{island.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{place.name}</h1>
          <p className="text-lg text-gray-600">{place.shortDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <PhotoGallery images={place.images} placeName={place.name} />

            {/* Why Popular */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
              <h2 className="text-lg font-bold text-teal-800 mb-3 flex items-center gap-2">
                ⭐ Why It's Popular
              </h2>
              <p className="text-gray-700 leading-relaxed">{place.whyPopular}</p>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 border-b">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="py-6">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{place.whyPopular}</p>
                    {wikiData && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">From Wikipedia</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{wikiData.extract}</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">{place.history}</p>
                  </div>
                )}

                {activeTab === 'facts' && (
                  <ul className="space-y-3">
                    {place.facts.map((fact, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{fact}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Nearby Restaurants */}
            {place.restaurants && place.restaurants.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🍽️ Nearby Restaurants
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {place.restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-bold text-gray-800">📍 Location</h3>
              </div>
              <PlaceMap
                center={place.location}
                singlePlace={place}
                zoom={13}
                className="h-48"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">{place.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.location.lat},${place.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Island</dt>
                  <dd className="font-medium text-gray-900">{island.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="font-medium text-gray-900 capitalize">{place.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Restaurants</dt>
                  <dd className="font-medium text-gray-900">{place.restaurants?.length || 0} nearby</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Coordinates</dt>
                  <dd className="font-medium text-gray-900 text-xs">
                    {place.location.lat.toFixed(4)}, {place.location.lng.toFixed(4)}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Back Link */}
            <Link
              to={`/island/${island.id}`}
              className="block text-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
            >
              ← More places on {island.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
