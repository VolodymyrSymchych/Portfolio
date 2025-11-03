import { Sparkles, Code, Briefcase, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const ServicesTab = () => {
  const { t } = useLanguage();

  const serviceIcons = [Sparkles, Code, Briefcase, MessageSquare];
  const serviceGradients = [
    'from-sage-500 to-sage-600',
    'from-lavender-500 to-lavender-600',
    'from-peach-500 to-peach-600',
    'from-sage-500 to-sage-600',
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {t.services.services.map((service, index) => {
        const Icon = serviceIcons[index];
        const gradient = serviceGradients[index];

        return (
          <div
            key={index}
            className="bg-white/60 border border-neutral-200 rounded-2xl p-6 hover:bg-white transition-all duration-300 group"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <Icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900">{service.title}</h3>

            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-neutral-700">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesTab;
