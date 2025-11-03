import { Calendar, Clock, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Intro konzultace',
    duration: '30 min',
    price: 'Zdarma',
    description: 'Úvodní schůzka pro zjištění vašich potřeb',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Technical konzultace',
    duration: '60 min',
    price: '2000 Kč',
    description: 'Detailní technická konzultace a návrh řešení',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Workshop',
    duration: '2-4 hod',
    price: 'Dohodou',
    description: 'Praktický workshop pro váš tým',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Pre-sales prezentace',
    duration: '1-2 hod',
    price: 'Dohodou',
    description: 'Prezentace řešení pro váš projekt',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const BookingTab = () => {
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Rezervace konzultace</h3>
        <p className="text-neutral-400">Vyberte typ schůzky a vyplňte kontaktní údaje</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => setSelectedService(service.title)}
            className={`text-left p-4 rounded-xl border transition-all duration-300 ${
              selectedService === service.title
                ? `bg-gradient-to-r ${service.gradient} bg-opacity-20 border-white/30`
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">{service.title}</h4>
              <span className="text-sm text-cyan-400 font-semibold">{service.price}</span>
            </div>
            <p className="text-sm text-neutral-400 mb-2">{service.description}</p>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Clock className="w-3 h-3" />
              <span>{service.duration}</span>
            </div>
          </button>
        ))}
      </div>

      {submitted ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h4 className="text-xl font-bold mb-2 text-green-400">Rezervace odeslána!</h4>
          <p className="text-neutral-300">Ozveme se vám do 24 hodin.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-4">Kontaktní formulář</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Jméno *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Společnost</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Poznámka</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={!selectedService}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-white/5 text-neutral-500 cursor-not-allowed'
                }`}
              >
                {selectedService ? 'Odeslat rezervaci' : 'Vyberte typ schůzky'}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Informace o schůzce
              </h4>
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Online (Google Meet) nebo osobně v Brně</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Pracovní dny 9:00 - 17:00</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Možnost zrušení do 24 hodin před schůzkou</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4">Alternativní kontakt</h4>
              <div className="space-y-3">
                <a
                  href="mailto:volodymyr.symchych@example.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">volodymyr.symchych@example.com</span>
                </a>
                <a
                  href="tel:+420123456789"
                  className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+420 123 456 789</span>
                </a>
                <a
                  href="https://linkedin.com/in/volodymyr-symchych"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingTab;
