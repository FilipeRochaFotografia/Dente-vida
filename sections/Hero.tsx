import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Instagram } from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-soft-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Novos pacientes: 1ª Avaliação Gratuita
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-teal-900 leading-[1.1] tracking-tight mb-6">
              Seu melhor sorriso <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                começa aqui.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              Odontologia humanizada e tecnologia de ponta para cuidar da sua saúde e autoestima. <strong className="text-teal-700">Dr. Alexandre Rodrigues Aragão</strong> e equipe.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" icon={<ChevronRight className="w-5 h-5" />}>
                Agendar Consulta
              </Button>
              <Button variant="outline">
                Conhecer Tratamentos
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-teal-50 rounded-full text-teal-600">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500">Google Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-teal-50 rounded-full text-teal-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Certificado</p>
                  <p className="text-xs text-slate-500">CRO Especializado</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Frame */}
            <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/20 aspect-[3/4] border-4 border-white group">
              {/* Image replaced with a high-quality Unsplash placeholder */}
              <img 
                src="https://i.ibb.co/qMc82gYx/Whats-App-Image-2025-11-22-at-10-29-17-AM-1.jpg" 
                alt="Dr. Alexandre Rodrigues Aragão" 
                className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-slate-200"
              />
              
              {/* Subtle overlay to blend the dark photo bottom if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent opacity-50" />
            </div>

            {/* Floating Name Card - Increased Size (approx 50%) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -left-8 bottom-12 z-30 bg-white/95 backdrop-blur-md p-6 pr-12 rounded-[2rem] shadow-xl border border-teal-100 flex items-center gap-5"
            >
               <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 rounded-xl text-white shadow-md">
                  <Instagram size={32} />
               </div>
               <div>
                  <p className="font-bold text-slate-900 text-xl leading-tight">Dente.vida</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;