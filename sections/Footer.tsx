import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-100 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            {/* Logo Structure tailored for dark background */}
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-light text-white tracking-tight">Clinica</span>
              <img 
                src="https://i.ibb.co/Df65Y7RQ/logofundo.png" 
                alt="Dente Vida Logo" 
                className="h-7 w-auto object-contain brightness-0 invert"
              />
              <div className="text-2xl font-extrabold text-white tracking-tight">
                Dente<span className="text-teal-400">Vida</span>
              </div>
            </div>

            <p className="text-teal-100/80 leading-relaxed">
              Mais que tratamentos odontológicos, construímos autoestima e felicidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-teal-800 rounded-full hover:bg-white hover:text-teal-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-teal-800 rounded-full hover:bg-white hover:text-teal-900 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links - Hidden on Mobile */}
          <div className="hidden md:block">
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tratamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Av. Centenário, 49, Centro<br/>Vitória da Conquista - BA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>(77) 3084-2858<br/>(77) 99858-5076</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>contato@dentevida.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">Horário</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-teal-800 pb-2">
                <span>Seg, Ter, Qui, Sex</span>
                <span className="text-white">09:00 – 16:30</span>
              </li>
              <li className="flex justify-between border-b border-teal-800 pb-2">
                <span>Quarta-feira</span>
                <span className="text-white">09:00 – 17:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sáb e Dom</span>
                <span className="text-teal-400">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 text-center text-sm text-teal-400/60">
          <p>&copy; {new Date().getFullYear()} Dente Vida Clínica Odontológica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;