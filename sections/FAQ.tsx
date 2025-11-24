import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const faqs = [
  {
    question: "Aceitam convênios odontológicos?",
    answer: "Sim! Trabalhamos com os principais convênios do mercado. Entre em contato com nossa recepção pelo WhatsApp para verificar a cobertura do seu plano específico."
  },
  {
    question: "Quanto custa um implante dentário?",
    answer: "O valor varia dependendo da complexidade do caso e do material escolhido. Realizamos uma avaliação inicial completa para fornecer um orçamento preciso e transparente."
  },
  {
    question: "O clareamento dental causa sensibilidade?",
    answer: "Utilizamos técnicas modernas e produtos de alta qualidade que minimizam a sensibilidade. Além disso, oferecemos tratamentos dessensibilizantes prévios para garantir seu conforto."
  },
  {
    question: "Atendem emergências fora do horário comercial?",
    answer: "Entendemos que imprevistos acontecem. Temos um canal exclusivo para pacientes em tratamento que necessitam de suporte urgente."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img 
          src="https://i.ibb.co/3m86sT5Y/Generated-Image-November-24-2025-12-30-PM.png" 
          alt="Clinic Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dúvidas Frequentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600">
            Esclareça suas principais dúvidas <br className="md:hidden" /> sobre nossos tratamentos.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-sm ${activeIndex === index ? 'border-teal-200 bg-teal-50/50' : 'border-slate-200'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${activeIndex === index ? 'text-teal-800' : 'text-slate-700'}`}>
                  {item.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-teal-200 text-teal-800' : 'bg-slate-100 text-slate-500'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;