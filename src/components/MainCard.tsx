import { FileText, Mail } from 'lucide-react';
import TabContent from './TabContent';
import ContactModal from './ContactModal';
import { downloadResume } from '../utils/resumeGenerator';
import { useLanguage } from '../i18n/LanguageContext';

interface MainCardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
}

const MainCard = ({ activeTab, setActiveTab, showContactModal, setShowContactModal }: MainCardProps) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'about', label: t.tabs.about },
    { id: 'services', label: t.tabs.services },
    { id: 'skills', label: t.tabs.skills },
    { id: 'projects', label: t.tabs.projects },
    { id: 'process', label: t.tabs.process },
    { id: 'personal', label: t.tabs.personal },
    { id: 'booking', label: t.tabs.booking },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 pb-20">
      <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-3xl p-8 shadow-xl shadow-neutral-900/5 animate-fadeIn">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-medium text-neutral-900">
              {t.mainCard.name}
            </h2>
            <p className="text-neutral-600 mt-1 font-light">{t.mainCard.title}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-all duration-300 group text-neutral-900"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t.mainCard.cvButton}</span>
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-xl hover:shadow-lg hover:shadow-sage-500/30 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t.mainCard.contactButton}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                activeTab === tab.id
                  ? 'bg-sage-600 text-white shadow-md shadow-sage-500/20'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <TabContent activeTab={activeTab} />
        </div>
      </div>

      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default MainCard;
