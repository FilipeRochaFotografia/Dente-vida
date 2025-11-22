import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Paciente de Ortodontia",
    content: "A clínica Dente Vida mudou minha autoestima. O Dr. Alexandre é extremamente atencioso e o resultado do meu tratamento ficou incrível.",
    image: "https://picsum.photos/seed/woman1/100/100"
  },
  {
    name: "Carlos Oliveira",
    role: "Implante Dentário",
    content: "Tinha muito medo de dentista, mas a equipe me deixou super confortável. O procedimento foi sem dor e a recuperação muito rápida.",
    image: "https://picsum.photos/seed/man1/100/100"
  },
  {
    name: "Fernanda Santos",
    role: "Mãe de Paciente",
    content: "Levo meus dois filhos e eles adoram. O ambiente é acolhedor e a equipe sabe lidar com crianças. Recomendo de olhos fechados!",
    image: "https://picsum.photos/seed/woman2/100/100"
  }
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-teal-700 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Histórias que nos fazem sorrir
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-teal-100 max-w-2xl mx-auto text-lg">
            A satisfação dos nossos pacientes é o nosso maior cartão de visitas.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-teal-800/40 backdrop-blur-md border border-teal-600/30 p-8 rounded-[2rem] relative"
            >
              <Quote className="absolute top-8 right-8 text-teal-500/20 w-12 h-12 rotate-180" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full border-2 border-teal-400 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-teal-200 text-sm">{item.role}</p>
                </div>
              </div>
              
              <p className="text-teal-50 leading-relaxed italic relative z-10">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;