import { Calendar, Clock, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const BookingTab = () => {
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const serviceGradients = [
    'from-sage-500 to-sage-600',
    'from-lavender-500 to-lavender-600',
    'from-peach-500 to-peach-600',
    'from-sage-500 to-sage-600',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-neutral-900">{t.booking.heading}</h3>
        <p className="text-neutral-600">{t.booking.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {t.booking.services.map((service, index) => {
          const gradient = serviceGradients[index];
          return (
            <button
              key={index}
              onClick={() => setSelectedService(service.title)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                selectedService === service.title
                  ? `bg-gradient-to-r ${gradient} bg-opacity-20 border-neutral-300`
                  : 'bg-white/60 border-neutral-200 hover:bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-neutral-900">{service.title}</h4>
                <span className="text-sm text-sage-600 font-semibold">{service.price}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-2">{service.description}</p>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Clock className="w-3 h-3" />
                <span>{service.duration}</span>
              </div>
            </button>
          );
        })}
      </div>

      {submitted ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">{t.booking.submitted.icon}</div>
          <h4 className="text-xl font-bold mb-2 text-green-600">{t.booking.submitted.title}</h4>
          <p className="text-neutral-700">{t.booking.submitted.message}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-4 text-neutral-900">{t.booking.form.title}</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">{t.booking.form.nameLabel}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none transition-colors text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">{t.booking.form.emailLabel}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none transition-colors text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">{t.booking.form.phoneLabel}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none transition-colors text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">{t.booking.form.companyLabel}</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none transition-colors text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">{t.booking.form.noteLabel}</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none transition-colors resize-none text-neutral-900"
                />
              </div>
              <button
                type="submit"
                disabled={!selectedService}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService
                    ? 'bg-gradient-to-r from-sage-500 to-sage-600 text-white hover:shadow-lg hover:shadow-sage-500/20'
                    : 'bg-neutral-50 text-neutral-500 cursor-not-allowed'
                }`}
              >
                {selectedService ? t.booking.form.submitButton : t.booking.form.selectServiceButton}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-neutral-900">
                <Calendar className="w-5 h-5 text-sage-600" />
                {t.booking.meetingInfo.title}
              </h4>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                  <span>{t.booking.meetingInfo.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-lavender-600 mt-1 flex-shrink-0" />
                  <span>{t.booking.meetingInfo.hours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>{t.booking.meetingInfo.cancellation}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4 text-neutral-900">{t.booking.alternativeContact.title}</h4>
              <div className="space-y-3">
                <a
                  href="mailto:volodymyr.symchych@example.com"
                  className="flex items-center gap-3 text-neutral-700 hover:text-sage-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">volodymyr.symchych@example.com</span>
                </a>
                <a
                  href="tel:+420123456789"
                  className="flex items-center gap-3 text-neutral-700 hover:text-sage-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+420 123 456 789</span>
                </a>
                <a
                  href="https://linkedin.com/in/volodymyr-symchych"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-700 hover:text-sage-600 transition-colors"
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
