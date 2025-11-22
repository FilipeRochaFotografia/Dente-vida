import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import SocialProof from './sections/SocialProof';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-teal-700 tracking-tight">
            Dente<span className="text-teal-500">Vida</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Início</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Tratamentos</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Equipe</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Depoimentos</a>
          </div>

          <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20">
            Agendar
          </button>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Features />
      <SocialProof />
      <FAQ />
      <Footer />

    </main>
  );
}

export default App;