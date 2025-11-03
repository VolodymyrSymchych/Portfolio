import { Sparkles, Code, Briefcase, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Pre-sales Design',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Analýza požadavků zákazníka',
      'Návrh architektury řešení',
      'Technická prezentace a demo',
      'Odhad náročnosti a timeline'
    ]
  },
  {
    icon: Code,
    title: 'Implementace & Vývoj',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Vývoj na platformě FUSIO',
      'Database design a optimalizace',
      'Custom moduly a integrace',
      'Code review a best practices'
    ]
  },
  {
    icon: Briefcase,
    title: 'Technical Project Management',
    gradient: 'from-orange-500 to-amber-500',
    features: [
      'Koordinace vývojového týmu',
      'Agile metodologie',
      'Risk management',
      'Stakeholder komunikace'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Consulting & Support',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Technické konzultace',
      'Optimalizace výkonu systému',
      'Školení a dokumentace',
      'Long-term podpora'
    ]
  }
];

const ServicesTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
        >
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <service.icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-bold mb-4">{service.title}</h3>

          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-neutral-300">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesTab;
