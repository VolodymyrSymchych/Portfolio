import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-20 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavender-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-serif font-normal mb-6 text-neutral-900 tracking-tight animate-slideUp">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 font-light animate-fadeIn">
          {t.hero.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
