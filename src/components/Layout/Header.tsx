import { Link, useLocation } from 'react-router-dom';
import { islands } from '../../data/places';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="text-3xl">🌺</span>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Hawaii Explorer</h1>
              <p className="text-xs text-blue-100">Your Island Adventure Guide</p>
            </div>
          </Link>

          <nav className="flex gap-1 sm:gap-2">
            {islands.map(island => {
              const isActive = location.pathname.includes(island.id);
              return (
                <Link
                  key={island.id}
                  to={`/island/${island.id}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {island.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
