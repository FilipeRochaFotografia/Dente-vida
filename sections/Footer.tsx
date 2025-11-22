import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              Dente<span className="text-teal-400">Vida</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Sua clínica de confiança para um sorriso saudável e radiante. Dr. Alexandre Rodrigues Aragão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Tratamentos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>Av. Principal, 1234, Centro<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>contato@dentevida.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">Horário</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Seg - Sex</span>
                <span className="text-white">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">08:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-teal-500">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dente Vida Clínica Odontológica. Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="#" 
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-green-500/40 hover:scale-110 transition-transform text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;