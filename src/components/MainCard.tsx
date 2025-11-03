import { FileText, Mail } from 'lucide-react';
import TabContent from './TabContent';
import ContactModal from './ContactModal';
import { downloadResume } from '../utils/resumeGenerator';

interface MainCardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
}

const tabs = [
  { id: 'about', label: 'O mně' },
  { id: 'services', label: 'Služby' },
  { id: 'skills', label: 'Dovednosti' },
  { id: 'projects', label: 'Projekty' },
  { id: 'process', label: 'Jak pracuji' },
  { id: 'personal', label: 'Osobní projekty' },
  { id: 'booking', label: 'Rezervace' },
];

const MainCard = ({ activeTab, setActiveTab, showContactModal, setShowContactModal }: MainCardProps) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 pb-20">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2a7fff] to-[#22d3ee] bg-clip-text text-transparent">
              Bc. Symchych Volodymyr
            </h2>
            <p className="text-neutral-400 mt-1">ERP Solutions Architect & Technical Project Manager</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2a7fff] to-[#0ea5e9] rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Kontakt</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#2a7fff] to-[#0ea5e9] shadow-lg shadow-blue-500/30'
                  : 'hover:bg-white/5'
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
