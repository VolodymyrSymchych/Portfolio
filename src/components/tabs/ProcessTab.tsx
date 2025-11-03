import { Search, Pencil, Presentation, Hammer, Rocket } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    sage: { bg: 'bg-sage-500', border: 'border-sage-500/30', text: 'text-sage-600' },
    lavender: { bg: 'bg-lavender-500', border: 'border-lavender-500/30', text: 'text-lavender-600' },
    peach: { bg: 'bg-peach-500', border: 'border-peach-500/30', text: 'text-peach-600' },
    green: { bg: 'bg-green-500', border: 'border-green-500/30', text: 'text-green-600' }
  };
  return colors[color];
};

const ProcessTab = () => {
  const { t } = useLanguage();

  const stepIcons = [Search, Pencil, Presentation, Hammer, Rocket];
  const stepColors = ['sage', 'lavender', 'sage', 'peach', 'green'];

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-neutral-900">{t.process.heading}</h3>
        <p className="text-neutral-600">{t.process.subtitle}</p>
      </div>

      <div className="space-y-6">
        {t.process.steps.map((step, index) => {
          const Icon = stepIcons[index];
          const color = stepColors[index];
          const colors = getColorClasses(color);
          const number = index + 1;

          return (
            <div key={number} className="flex gap-6 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center font-bold text-2xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-${color}-500/20`}>
                  {number}
                </div>
                {number < t.process.steps.length && (
                  <div className={`w-0.5 h-full ${colors.bg} opacity-30 mt-4`} />
                )}
              </div>

              <div className={`flex-1 bg-white/60 border ${colors.border} rounded-2xl p-6 hover:bg-white transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-neutral-900">{step.title}</h4>
                    <p className="text-sm text-neutral-600">{step.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                    <span className={`px-3 py-1 ${colors.bg} bg-opacity-20 ${colors.text} rounded-full text-xs font-semibold`}>
                      {step.duration}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-2">
                  {step.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2 text-neutral-700 text-sm">
                      <span className={colors.text}>✓</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTab;