import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌺</span>
            <span className="font-semibold text-white">{t('app.title')}</span>
          </div>

          <p className="text-sm text-gray-400">
            {t('footer.explore')}
          </p>

          <p className="text-xs text-gray-500">
            {t('footer.trip')}
          </p>
        </div>
      </div>
    </footer>
  );
}
