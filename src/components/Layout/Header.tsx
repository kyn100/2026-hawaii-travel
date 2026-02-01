import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const islands = [
    { id: 'oahu', nameKey: 'island.oahu' },
    { id: 'big-island', nameKey: 'island.big-island' },
    { id: 'maui', nameKey: 'island.maui' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="text-3xl">🌺</span>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{t('app.title')}</h1>
              <p className="text-xs text-blue-100">{t('app.subtitle')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'zh'
                    ? 'bg-white text-teal-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-teal-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                EN
              </button>
            </div>

            {/* Navigation */}
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
                    {t(island.nameKey)}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
