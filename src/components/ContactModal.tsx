import { X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-neutral-200 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-neutral-900/10 animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-medium text-neutral-900">
            {t.contact.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-900"
            aria-label={t.contact.closeButton}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4 text-green-600">{t.contact.successIcon}</div>
            <p className="text-lg text-neutral-700">{t.contact.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-700 mb-2 font-medium">{t.contact.nameLabel}</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/20 transition-colors text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2 font-medium">{t.contact.emailLabel}</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/20 transition-colors text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2 font-medium">{t.contact.messageLabel}</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/20 transition-colors resize-none text-neutral-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-500/20 transition-all duration-300 font-medium"
            >
              {t.contact.sendButton}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
