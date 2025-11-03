import { useLanguage } from '../i18n/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl px-4 py-2 shadow-lg shadow-neutral-900/5">
      <Languages className="w-4 h-4 text-neutral-600" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-sage-600 text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('cz')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === 'cz'
            ? 'bg-sage-600 text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        }`}
      >
        CZ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
