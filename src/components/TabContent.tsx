import AboutTab from './tabs/AboutTab';
import ServicesTab from './tabs/ServicesTab';
import SkillsTab from './tabs/SkillsTab';
import ProjectsTab from './tabs/ProjectsTab';
import ProcessTab from './tabs/ProcessTab';
import PersonalTab from './tabs/PersonalTab';
import BookingTab from './tabs/BookingTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  return (
    <div className="animate-fadeIn">
      {activeTab === 'about' && <AboutTab />}
      {activeTab === 'services' && <ServicesTab />}
      {activeTab === 'skills' && <SkillsTab />}
      {activeTab === 'projects' && <ProjectsTab />}
      {activeTab === 'process' && <ProcessTab />}
      {activeTab === 'personal' && <PersonalTab />}
      {activeTab === 'booking' && <BookingTab />}
    </div>
  );
};

export default TabContent;
