import { Search, Pencil, Presentation, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Výzkum',
    subtitle: 'Research & Analysis',
    duration: '1-2 týdny',
    color: 'blue',
    activities: [
      'Výjezd k zákazníkovi',
      'Interview s klíčovými uživateli',
      'Analýza současných procesů',
      'Identifikace požadavků'
    ]
  },
  {
    number: 2,
    icon: Pencil,
    title: 'Návrh',
    subtitle: 'Design & Architecture',
    duration: '1-2 týdny',
    color: 'purple',
    activities: [
      'Návrh architektury řešení',
      'Návrh databáze',
      'Wireframes a mockupy',
      'Technická dokumentace'
    ]
  },
  {
    number: 3,
    icon: Presentation,
    title: 'Prezentace',
    subtitle: 'Presentation & Demo',
    duration: '1-3 dny',
    color: 'cyan',
    activities: [
      'Prezentace návrhu klientovi',
      'Live demo prototypu',
      'Zpětná vazba',
      'Schválení řešení'
    ]
  },
  {
    number: 4,
    icon: Hammer,
    title: 'Realizace',
    subtitle: 'Development & Testing',
    duration: '4-12 týdnů',
    color: 'orange',
    activities: [
      'Implementace modulů',
      'Unit a integrační testy',
      'Code review',
      'Demo sessions s klientem'
    ]
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Nasazení',
    subtitle: 'Deployment & Support',
    duration: 'Průběžně',
    color: 'green',
    activities: [
      'Školení uživatelů',
      'Nasazení do produkce',
      'Monitoring výkonu',
      'Dlouhodobá podpora'
    ]
  }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-500', border: 'border-blue-500/30', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500', border: 'border-purple-500/30', text: 'text-purple-400' },
    cyan: { bg: 'bg-cyan-500', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-500/30', text: 'text-orange-400' },
    green: { bg: 'bg-green-500', border: 'border-green-500/30', text: 'text-green-400' }
  };
  return colors[color];
};

const ProcessTab = () => {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">5-krokový proces</h3>
        <p className="text-neutral-400">Od analýzy po nasazení - ověřený proces implementace ERP</p>
      </div>

      <div className="space-y-6">
        {steps.map((step) => {
          const colors = getColorClasses(step.color);
          return (
            <div key={step.number} className="flex gap-6 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center font-bold text-2xl text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {step.number}
                </div>
                {step.number < steps.length && (
                  <div className={`w-0.5 h-full ${colors.bg} opacity-30 mt-4`} />
                )}
              </div>

              <div className={`flex-1 bg-white/5 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-neutral-400">{step.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <step.icon className={`w-6 h-6 ${colors.text}`} />
                    <span className={`px-3 py-1 ${colors.bg} bg-opacity-20 ${colors.text} rounded-full text-xs font-semibold`}>
                      {step.duration}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-2">
                  {step.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2 text-neutral-300 text-sm">
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