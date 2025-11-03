import { useState } from 'react';
import Hero from './Hero';
import MainCard from './MainCard';
import Footer from './Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030408] via-[#0a1628] to-[#283343] text-white overflow-x-hidden">
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
