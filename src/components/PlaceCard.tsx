import { Link } from 'react-router-dom';
import type { Place } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PlaceCardProps {
  place: Place;
}

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

export default function PlaceCard({ place }: PlaceCardProps) {
  const { t } = useLanguage();
  const imageUrl = place.images?.[0] || `https://placehold.co/600x400/0d9488/ffffff?text=${encodeURIComponent(place.name)}`;

  return (
    <Link
      to={`/place/${place.id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/600x400/0d9488/ffffff?text=${encodeURIComponent(place.name)}`;
          }}
        />
        <span
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
            categoryColors[place.category]
          }`}
        >
          {categoryIcons[place.category]} {t(`category.${place.category}`)}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
          {place.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{place.shortDescription}</p>

        <div className="mt-3 flex items-center gap-2 text-gray-400 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">{place.address}</span>
        </div>
      </div>
    </Link>
  );
}
