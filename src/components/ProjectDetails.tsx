import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Target, Zap, TrendingUp, Calendar, ArrowRight, Shield } from 'lucide-react';

export interface ProjectData {
  title: string;
  category: string;
  tag: string;
  image: string;
  stats: string;
  description: string;
  challenge: string;
  strategy: string[];
  results: string[];
  techStack: string[];
}

interface ProjectDetailsProps {
  project: ProjectData;
  onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  // Safe scroll to top when coming to the details page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-dark text-white font-sans pt-28 pb-20 relative"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-dark/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-light/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 group text-gray-400 hover:text-brand font-medium text-xs tracking-[2px] uppercase mb-12 transition-colors cursor-pointer py-2"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Cases
        </button>

        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-[10px] tracking-[3px] uppercase">
            {project.category}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight uppercase tracking-tight">
            {project.title}
          </h1>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <div className="p-6 rounded-2xl bg-dark-soft border border-white/5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-gray-500 tracking-[1px] uppercase mb-1">MÉTRICA CHAVE</span>
              <span className="text-3xl md:text-4xl font-display font-black text-brand">{project.stats}</span>
            </div>
            <div className="p-6 rounded-2xl bg-dark-soft border border-white/5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-gray-500 tracking-[1px] uppercase mb-1">DISCIPLINA</span>
              <span className="text-sm font-semibold text-white whitespace-nowrap truncate">{project.category.split('&')[0] || project.category}</span>
            </div>
            <div className="col-span-2 md:col-span-1 p-6 rounded-2xl bg-dark-soft border border-white/5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-gray-500 tracking-[1px] uppercase mb-1">PROJETO</span>
              <span className="text-sm font-semibold text-white">Consolidado com Sucesso</span>
            </div>
          </div>
        </div>

        {/* Project Image banner */}
        <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2.5xl mb-16 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </div>

        {/* Case Study Details Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          
          {/* Main Case Content */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Overview & Challenge */}
            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-[1px] border-l-4 border-brand pl-4">
                O Desafio de Negócio
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed whitespace-pre-line">
                {project.challenge}
              </p>
            </section>

            {/* Strategy Applied */}
            <section className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-[1px] border-l-4 border-brand pl-4">
                A Estratégia de Rodrigo
              </h2>
              <ul className="space-y-4">
                {project.strategy.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={12} className="text-brand" />
                    </div>
                    <span className="text-gray-300 font-light text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Real Results Obtained */}
            <section className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-[1px] border-l-4 border-brand pl-4">
                Resultados Implacáveis Obteridos
              </h2>
              <ul className="space-y-4">
                {project.results.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                    </div>
                    <strong className="text-emerald-400 font-bold font-sans text-base leading-relaxed">{item}</strong>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Pillar metadata & Quick Booking */}
          <div className="space-y-8">
            
            {/* Technologies */}
            <div className="p-8 rounded-[2rem] bg-dark-soft border border-white/5 space-y-4">
              <h3 className="text-xs font-bold text-brand tracking-[2px] uppercase">PILARES DE TECNOLOGIA</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick action card */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-brand-dark/5 border border-brand/20 space-y-6">
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-dark shadow-lg shadow-brand/20">
                <Target size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-display font-bold text-white uppercase">Obtenha esses Resultados</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Podemos replicar ou customizar essas estratégias inteligentes adaptadas diretamente ao seu modelo de vendas atual.
                </p>
              </div>
              
              <a 
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-4.5 rounded-xl bg-brand hover:bg-brand-light text-dark text-xs font-bold tracking-[2px] uppercase transition-all shadow-md hover:shadow-brand/20"
              >
                QUERO ESTE RESULTADO <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

        {/* Big Bottom Action CTA */}
        <div className="text-center py-16 border-t border-white/5">
          <p className="text-gray-400 font-light text-base mb-6">Pronto para estruturar o processo comercial definitivo do seu negócio?</p>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-display font-medium text-sm tracking-[2px] uppercase transition-colors"
          >
            VER TODOS OS CASES DISPONÍVEIS <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </motion.div>
  );
};
