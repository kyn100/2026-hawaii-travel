import { Link } from 'react-router-dom';
import type { Island } from '../types';

interface IslandCardProps {
  island: Island;
}

export default function IslandCard({ island }: IslandCardProps) {
  return (
    <Link
      to={`/island/${island.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={island.heroImage}
          alt={island.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{island.name}</h3>
          <p className="text-sm text-gray-200">{island.placeCount} popular places</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed">{island.description}</p>
        <div className="mt-4 flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700">
          Explore {island.name}
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
