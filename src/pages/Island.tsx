import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import { PlaceMap } from '../components/Map';
import { useLanguage } from '../context/LanguageContext';
import { usePlaces } from '../hooks';

type Category = 'all' | 'beach' | 'volcano' | 'historic' | 'nature' | 'culture' | 'adventure';

export default function Island() {
  const { islandId } = useParams<{ islandId: string }>();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const { t } = useLanguage();
  const { getIslandById, getPlacesByIsland } = usePlaces();

  const categories: { id: Category; labelKey: string; icon: string }[] = [
    { id: 'all', labelKey: 'category.all', icon: '🗺️' },
    { id: 'beach', labelKey: 'category.beach', icon: '🏖️' },
    { id: 'volcano', labelKey: 'category.volcano', icon: '🌋' },
    { id: 'historic', labelKey: 'category.historic', icon: '🏛️' },
    { id: 'nature', labelKey: 'category.nature', icon: '🌿' },
    { id: 'culture', labelKey: 'category.culture', icon: '🎭' },
    { id: 'adventure', labelKey: 'category.adventure', icon: '🚗' },
  ];

  const island = getIslandById(islandId || '');
  const allPlaces = getPlacesByIsland(islandId || '');

  if (!island) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Island not found</h1>
        <Link to="/" className="text-teal-600 hover:text-teal-700">
          ← {t('place.back.home')}
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
              ← {t('island.back')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{island.name}</h1>
            <p className="text-blue-100 max-w-2xl">{island.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Map Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">📍 {t('island.map.title')} {island.name}</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${island.name}+Hawaii`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
            >
              {t('island.view.google.maps')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <PlaceMap center={island.center} places={allPlaces} className="h-72 rounded-xl shadow-md" />
        </section>

        {/* Hotel Section */}
        {island.hotel && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🏨 {t('hotel.title')}</h2>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 shadow-md border border-teal-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{island.hotel.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-teal-600">📍</span>
                  <span>{island.hotel.address}</span>
                </p>
                {island.hotel.phone && (
                  <p className="flex items-center gap-2">
                    <span className="text-teal-600">📞</span>
                    <a href={`tel:${island.hotel.phone}`} className="hover:text-teal-600">
                      {island.hotel.phone}
                    </a>
                  </p>
                )}
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(island.hotel.name + ' ' + island.hotel.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                {t('hotel.directions')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        )}

        {/* Weather Section */}
        {island.weather && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🌤️ {t('weather.title')}</h2>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 shadow-md border border-orange-100">
              {/* Weather Summary */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase">{t('weather.period')}</p>
                  <p className="text-lg font-semibold text-gray-800">{island.weather.period}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase">{t('weather.avg.high')}</p>
                  <p className="text-lg font-semibold text-orange-600">{island.weather.avgHigh}°C</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase">{t('weather.avg.low')}</p>
                  <p className="text-lg font-semibold text-blue-600">{island.weather.avgLow}°C</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase">{t('weather.water.temp')}</p>
                  <p className="text-lg font-semibold text-teal-600">🌊 {island.weather.waterTemp}°C</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase">{t('weather.humidity')}</p>
                  <p className="text-lg font-semibold text-gray-600">💧 {island.weather.humidity}%</p>
                </div>
              </div>

              {/* 10-Day Forecast */}
              <div className="overflow-x-auto">
                <div className="flex gap-2 min-w-max pb-2">
                  {island.weather.forecast.map((day) => {
                    const weatherIcon = {
                      'sunny': '☀️',
                      'partly-cloudy': '⛅',
                      'cloudy': '☁️',
                      'rainy': '🌧️',
                      'showers': '🌦️',
                    }[day.condition];
                    return (
                      <div
                        key={day.date}
                        className="flex flex-col items-center bg-white rounded-lg p-3 min-w-[70px] shadow-sm"
                      >
                        <span className="text-xs text-gray-500 font-medium">{day.date}</span>
                        <span className="text-2xl my-1">{weatherIcon}</span>
                        <span className="text-xs text-orange-600 font-medium">{day.high}°</span>
                        <span className="text-xs text-blue-600">{day.low}°</span>
                        <span className="text-xs text-gray-400 mt-1">💧{day.precipitation}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">{t('weather.note')}</p>
            </div>
          </section>
        )}

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
                  {cat.icon} {t(cat.labelKey)}
                </button>
              );
            })}
          </div>
        </section>

        {/* Places Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {t(categories.find(c => c.id === selectedCategory)?.labelKey || 'category.all')}
            </h2>
            <span className="text-gray-500 text-sm">{filteredPlaces.length} {t('island.places')}</span>
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
