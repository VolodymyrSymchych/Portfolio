import { Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="max-w-7xl mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
        <div className="flex gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-medium text-sage-700">
              15+
            </div>
            <div className="text-sm text-neutral-600">{t.footer.projectsLabel}</div>
          </div>
          <div>
            <div className="text-3xl font-medium text-lavender-700">
              2+
            </div>
            <div className="text-sm text-neutral-600">{t.footer.yearsLabel}</div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/volodymyr-symchych"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-xl hover:bg-white hover:border-sage-400 transition-all duration-300 group text-neutral-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/volodymyr-symchych"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-xl hover:bg-white hover:border-lavender-400 transition-all duration-300 group text-neutral-900"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
