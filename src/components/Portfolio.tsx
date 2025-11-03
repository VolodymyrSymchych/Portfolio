import { useState } from 'react';
import Hero from './Hero';
import MainCard from './MainCard';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-neutral-900 overflow-x-hidden">
      <LanguageSwitcher />
      <Hero />
      <MainCard
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;
