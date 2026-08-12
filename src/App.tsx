import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { CompanyHistory } from './components/CompanyHistory';
import { ManagementPhilosophy } from './components/ManagementPhilosophy';
import { OrganizationChart } from './components/OrganizationChart';
import { ProductsShowcase } from './components/ProductsShowcase';
import { EsgManagement } from './components/EsgManagement';
import { Certifications } from './components/Certifications';
import { LocationAndContact } from './components/LocationAndContact';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // IntersectionObserver to sync active section with scroll position
  useEffect(() => {
    const sectionIds = [
      'hero',
      'overview',
      'history',
      'philosophy',
      'organization',
      'products',
      'esg',
      'certifications',
      'location',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onNavigate={handleNavigate} />

        <CompanyOverview onNavigate={handleNavigate} />

        <CompanyHistory />

        <ManagementPhilosophy />

        <OrganizationChart />

        <ProductsShowcase />

        <EsgManagement />

        <Certifications />

        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
