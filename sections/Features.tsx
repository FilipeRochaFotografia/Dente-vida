import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Zap, Heart, Sparkles, Shield, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import { staggerContainer, fadeInUp } from '../utils/animations';

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Estética Dental",
    description: "Lentes de contato, facetas e clareamento para um sorriso radiante e harmonioso."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Implantes",
    description: "Reabilitação completa com materiais de titânio de última geração e cirurgia guiada."
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos modernos para corrigir seu sorriso com discrição."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Prevenção",
    description: "Check-ups regulares e limpeza profunda para manter sua saúde bucal em dia."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Odontopediatria",
    description: "Cuidado especializado e lúdico para garantir o sorriso saudável dos pequenos."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Urgências",
    description: "Atendimento prioritário para dor de dente e acidentes quando você mais precisa."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
            Nossos Tratamentos
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            Tecnologia e carinho em <br className="hidden md:block"/> cada detalhe do seu tratamento.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg">
            Oferecemos uma gama completa de serviços odontológicos, desde a prevenção básica até reabilitações complexas, sempre com foco no seu conforto.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card key={index}>
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;