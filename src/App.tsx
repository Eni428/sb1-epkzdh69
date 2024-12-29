import React from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { CategoryMenu } from './components/CategoryMenu';
import { NewsSection } from './components/NewsSection';
import { TourismSection } from './components/TourismSection';
import { HeritageSection } from './components/HeritageSection';
import { ReportForm } from './components/ReportForm';
import { ContactSection } from './components/ContactSection';
import { AppPromotion } from './components/AppPromotion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <div className="pt-28"> {/* Increased padding to account for TopBar + Navbar */}
        <CategoryMenu />
        <NewsSection />
        <TourismSection />
        <HeritageSection />
        <ReportForm />
        <AppPromotion />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;