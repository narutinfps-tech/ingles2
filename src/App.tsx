/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Edit3, 
  Layout, 
  BookOpen, 
  ChevronRight, 
  MessageCircle, 
  Download, 
  ShieldCheck, 
  Star,
  ChevronDown,
  ExternalLink,
  Lock,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const RECENT_SALES = [
  { name: "Ana Paula", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Ricardo Silva", city: "Curitiba, PR", time: "há 5 minutos" },
  { name: "Juliana Lima", city: "Salvador, BA", time: "há 1 minuto" },
  { name: "Marcos Santos", city: "Belo Horizonte, MG", time: "há 3 minutos" },
  { name: "Fernanda Oliveira", city: "Rio de Janeiro, RJ", time: "há 10 segundos" },
  { name: "Carla Souza", city: "Porto Alegre, RS", time: "há 4 minutos" },
  { name: "Tiago Mendes", city: "Fortaleza, CE", time: "há 7 minutos" }
];

function SalesNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const cycleInterval = setInterval(() => {
      setIsVisible(false); // Hide current
      
      // Wait for exit animation, then show next
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_SALES.length);
        if (!isDismissed) {
          setIsVisible(true);
        }
      }, 500);
    }, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleInterval);
    };
  }, [isDismissed]);

  // Hide after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(hideTimeout);
    }
  }, [isVisible]);

  if (isDismissed) return null;

  const sale = RECENT_SALES[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -20 }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: -20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-6 right-6 z-50 w-full max-w-[220px] pointer-events-none"
    >
      <div className="bg-white rounded-xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5 flex items-center gap-2.5 relative pointer-events-auto">
        <button 
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setIsDismissed(true), 500);
          }}
          className="absolute top-1 right-1 text-slate-300 hover:text-slate-600 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        </div>

        <div className="flex flex-col">
          <p className="text-[10px] font-bold text-slate-900 leading-tight">
            {sale.name} <span className="font-normal text-slate-500 whitespace-nowrap">({sale.city.split(',')[0]})</span>
          </p>
          <p className="text-[9px] text-slate-500 font-medium">Comprou agora</p>
          <p className="text-[8px] text-emerald-600 font-bold leading-none">{sale.time}</p>
        </div>
      </div>
    </motion.div>
  );
}

const TOPICS = [
  "Verb To Be",
  "Verb To Have",
  "Can / Can’t",
  "Should / Shouldn’t",
  "Must / Mustn’t",
  "Do / Does",
  "Simple Present",
  "Present Continuous",
  "Present Perfect"
];

const SLIDE_IMAGES = [
  "https://i.ibb.co/RkwSzCbs/MODAL-CAN.png",
  "https://i.ibb.co/ZpQS9RpW/VERBO-DODOES.png",
  "https://i.ibb.co/yBn20kBv/Chat-GPT-Image-17-de-mai-de-2026-13-42-06.png",
  "https://i.ibb.co/1Gcr6c67/Chat-GPT-Image-16-de-mai-de-2026-18-24-25.png",
  "https://i.ibb.co/PvB5xVzc/Chat-GPT-Image-16-de-mai-de-2026-17-29-51.png",
  "https://i.ibb.co/DPzzRsJ2/Chat-GPT-Image-16-de-mai-de-2026-17-16-06.png",
  "https://i.ibb.co/bw1Pr8j/Chat-GPT-Image-16-de-mai-de-2026-17-01-49.png"
];

const INSIDE_IMAGES = [
  "https://i.ibb.co/RGdYYPWK/Chat-GPT-Image-17-de-mai-de-2026-13-48-26-Copia.png",
  "https://i.ibb.co/27Z5n9ts/Chat-GPT-Image-17-de-mai-de-2026-13-47-39-Copia.png",
  "https://i.ibb.co/wXbbNMr/Chat-GPT-Image-17-de-mai-de-2026-13-47-28-Copia.png",
  "https://i.ibb.co/dJwmBf6B/Chat-GPT-Image-16-de-mai-de-2026-19-26-47.png",
  "https://i.ibb.co/LzTJJv6V/Chat-GPT-Image-16-de-mai-de-2026-19-19-46.png",
  "https://i.ibb.co/d4HkZZQR/Chat-GPT-Image-16-de-mai-de-2026-18-25-11-1.png",
  "https://i.ibb.co/0jXgpDBk/Chat-GPT-Image-16-de-mai-de-2026-17-34-32.png",
  "https://i.ibb.co/XZbwz2H5/Chat-GPT-Image-16-de-mai-de-2026-17-34-22.png",
  "https://i.ibb.co/tpKfBnZV/Chat-GPT-Image-16-de-mai-de-2026-17-33-46.png",
  "https://i.ibb.co/r2RbNwwh/Chat-GPT-Image-16-de-mai-de-2026-17-20-37.png",
  "https://i.ibb.co/svqwZP5C/Chat-GPT-Image-16-de-mai-de-2026-17-04-51.png",
  "https://i.ibb.co/5xxkWRW4/Chat-GPT-Image-16-de-mai-de-2026-17-04-16.png",
  "https://i.ibb.co/JWNVyQh3/Chat-GPT-Image-16-de-mai-de-2026-17-04-07.png",
  "https://i.ibb.co/JFvSqxMy/Chat-GPT-Image-16-de-mai-de-2026-19-27-58-Copia.png",
  "https://i.ibb.co/N647P5Xh/Chat-GPT-Image-16-de-mai-de-2026-19-26-36-Copia.png"
];


export default function App() {
  const [openGrade, setOpenGrade] = useState<number | null>(7);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SalesNotification />
      {/* Top Banner Message */}
      <div className="bg-slate-900 text-white py-3 px-4 text-center z-50">
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Aproveite: <span className="text-amber-400">70% de desconto</span> disponível apenas hoje!
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Tenha acesso aos <span className="text-primary">slides prontos</span> de Inglês que vão despertar a atenção dos seus alunos.
            </h1>

            {/* Infinite Carousel - Moved here for high impact */}
            <div className="py-8 mb-10 overflow-hidden relative flex flex-col gap-4">
              {/* Gradients para suavizar as bordas */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10" />
              
              {/* Primeira Fileira - VELOCIDADE MÉDIA/LENTA para visualização */}
              <motion.div 
                className="flex whitespace-nowrap gap-3 items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 20, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              >
                {[...SLIDE_IMAGES, ...SLIDE_IMAGES].map((img, index) => (
                  <div 
                    key={`row1-hero-${index}`} 
                    className="w-[260px] shrink-0 bg-white p-1 rounded-xl shadow-md border border-slate-100"
                  >
                    <img 
                      src={img} 
                      alt="Slide Preview" 
                      className="rounded-lg w-full h-auto block object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Segunda Fileira - DIREÇÃO OPOSTA */}
              <motion.div 
                className="flex whitespace-nowrap gap-3 items-center w-max"
                initial={{ x: "-50%" }}
                animate={{ x: ["-50%", "0%"] }}
                transition={{ 
                  duration: 40, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              >
                {[...SLIDE_IMAGES, ...SLIDE_IMAGES].map((img, index) => (
                  <div 
                    key={`row2-hero-${index}`} 
                    className="w-[260px] shrink-0 bg-white p-1 rounded-xl shadow-md border border-slate-100"
                  >
                    <img 
                      src={img} 
                      alt="Slide Preview" 
                      className="rounded-lg w-full h-auto block object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                onClick={scrollToPricing}
                className="bg-secondary hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all btn-shadow flex items-center gap-3"
              >
                Quero garantir meus materiais
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-secondary" /> Compra Segura</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Acesso Imediato</span>
              <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-secondary" /> 7 Dias de Garantia</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <p className="text-slate-400 font-display font-medium tracking-widest text-sm uppercase">Materiais lúdicos, coloridos e 100% didáticos</p>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Nossos materiais são para <span className="text-primary italic">profs</span> que...</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { icon: Star, text: "Querem ver seus alunos interessados pelo conteúdo" },
                { icon: Clock, text: "Querem planejar suas aulas em minutos, não horas" },
                { icon: Layout, text: "Querem dar aulas mais dinâmicas e que despertem a atenção" },
                { icon: Sparkles, text: "Querem recursos visuais que facilitem a compreensão da gramática" },
                { icon: Edit3, text: "Perdem muito tempo tentando criar slides bonitos" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white transition-all hover:shadow-lg border border-transparent hover:border-slate-100"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg font-bold text-slate-800 leading-tight">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Focused Premium Mockup */}
            <div className="relative mt-8 md:mt-16 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-4xl"
              >
                {/* Background Glow */}
                <div className="absolute -inset-10 bg-primary/30 rounded-full blur-[120px] -z-10 opacity-40 animate-pulse" />
                
                {/* Main Product Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-20 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  <img 
                    src="https://i.ibb.co/dw9d17zW/7ca6897b-0234-4924-b33d-f4b259bd64f6-Photoroom.png" 
                    alt="Premium Material Mockup" 
                    className="w-full h-auto block"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-secondary text-white px-6 py-3 rounded-full font-black text-sm md:text-lg shadow-xl animate-bounce">
                    70% OFF HOJE
                  </div>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-4 md:-left-20 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 z-30 hidden sm:flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <Star className="w-7 h-7 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avaliação</p>
                    <p className="text-lg font-black text-slate-800 tracking-tight">VIP</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -right-4 md:-right-20 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 z-30 hidden sm:flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Acesso</p>
                    <p className="text-lg font-black text-slate-800 tracking-tight">IMEDIATO</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Info */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-12">
            A <span className="bg-white text-primary px-3 rounded-lg">Academia de Inglês</span> é uma plataforma online com materiais prontos para professores de Ensino Fundamental II.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-emerald-300 font-black tracking-tight">+ DE 70 AULAS PRONTAS</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>Mais de 70 aulas editáveis no Canva e no PowerPoint, com conteúdos do 7º, 8º e 9º ano.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>Slides super ilustrados e visualmente atrativos para manter o engajamento.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-amber-300 font-black tracking-tight">BANCO DE ATIVIDADES</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>Listas de exercícios com gabarito para cada tema gramatical.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>Material em PDF e Word para você adaptar como precisar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics / Differences */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Por que nossos slides são <span className="text-primary italic">diferentes</span>?</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">Aulas criadas com foco em neurociência aplicada à educação: Impacto Visual + Conexão + Interesse.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Impacto Visual", desc: "Cores vivas, fontes modernas e ícones didáticos que prendem o córtex visual do aluno imediatamente.", icon: Sparkles },
              { title: "Conexão", desc: "Mecanismos de interação, perguntas disparadoras e elementos lúdicos que geram participação ativa.", icon: MessageCircle },
              { title: "Interesse", desc: "Explicações simplificadas. O bicho-papão da gramática vira algo simples e fácil de entender.", icon: Star }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-full rounded-full -mr-32 -mt-32" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl mb-6">Incluímos os temas mais temidos pelos alunos:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {TOPICS.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 group">
                      <div className="w-2 h-2 bg-secondary rounded-full group-hover:scale-150 transition-transform" />
                      <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                {/* Mockup or preview of a grammar slide */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">He</div>
                  <p className="text-2xl font-display font-bold">is / isn't</p>
                  <p className="text-slate-400">Verb To Be visual system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: What's Inside - Dynamic Carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Veja como é por dentro dos <span className="text-primary italic">nossos slides</span></h2>
          <p className="text-slate-600">Material organizado, estético e pronto para dar aula hoje mesmo.</p>
        </div>

        <div className="flex flex-col gap-4">
          <motion.div 
            className="flex whitespace-nowrap gap-3 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 22, // Desacelerado
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...INSIDE_IMAGES, ...INSIDE_IMAGES].map((img, index) => (
              <div 
                key={`inside-1-${index}`} 
                className="w-[280px] shrink-0 bg-white p-2 rounded-2xl shadow-lg border border-slate-100"
              >
                <img 
                  src={img} 
                  alt="Material detalhe" 
                  className="rounded-xl w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex whitespace-nowrap gap-3 w-max"
            initial={{ x: "-50%" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 45, // Mais lento
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...INSIDE_IMAGES, ...INSIDE_IMAGES].map((img, index) => (
              <div 
                key={`inside-2-${index}`} 
                className="w-[280px] shrink-0 bg-white p-2 rounded-2xl shadow-lg border border-slate-100"
              >
                <img 
                  src={img} 
                  alt="Material detalhe" 
                  className="rounded-xl w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
           <button 
             onClick={scrollToPricing}
             className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all animate-pulse shadow-lg"
           >
             QUERO ESSE MATERIAL COMPLETO
           </button>
        </div>
      </section>

      {/* Grade Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Veja a lista de conteúdos inclusos:</h2>
            <p className="text-slate-600 tracking-wide text-sm font-bold uppercase">Clique nos anos para ver os detalhes</p>
          </div>

          <div className="space-y-4">
            {[7, 8, 9].map((grade) => (
              <div key={grade} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setOpenGrade(openGrade === grade ? null : grade)}
                  className="w-full flex items-center justify-between p-6 bg-primary text-white font-display font-bold text-xl"
                >
                  {grade}º ANO - ENSINO FUNDAMENTAL
                  <ChevronDown className={`w-6 h-6 transition-transform ${openGrade === grade ? 'rotate-180' : ''}`} />
                </button>
                {openGrade === grade && (
                  <div className="p-8 grid md:grid-cols-2 gap-4">
                    {grade === 7 && [
                      "Greetings & Introductions", "Verb To Be (Affirmative/Negative/Interrogative)", "Pronouns", "Genitive Case", "Simple Present", "Adjectives"
                    ].map(item => <div key={item} className="text-slate-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {item}</div>)}
                    {grade === 8 && [
                      "Verb To Have", "Prepositions", "Adverbs of Frequency", "Present Continuous", "Can / Could", "Regular/Irregular Verbs"
                    ].map(item => <div key={item} className="text-slate-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {item}</div>)}
                    {grade === 9 && [
                      "Simple Past", "Future (Will/Going to)", "Present Perfect", "Conditionals (First/Second)", "Reported Speech", "Passive Voice"
                    ].map(item => <div key={item} className="text-slate-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {item}</div>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6"
            >
              Feedback da Comunidade
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Quem usa, <span className="text-primary italic">aprova</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Veja o feedback real dos professores que já transformaram suas aulas e economizaram horas de planejamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "https://i.ibb.co/B2z14PbD/Whats-App-Image-2026-05-17-at-18-44-10.jpg",
              "https://i.ibb.co/Q3V0GzLH/Whats-App-Image-2026-05-17-at-18-44-09-2.jpg",
              "https://i.ibb.co/XxJWDjj6/Whats-App-Image-2026-05-17-at-18-44-09-1.jpg",
              "https://i.ibb.co/nN3tG2FJ/Whats-App-Image-2026-05-17-at-18-44-09.jpg"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 30 }}
                className="relative bg-white p-3 rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transition-all duration-500 cursor-zoom-in"
              >
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                <img 
                  src={img} 
                  alt={`Depoimento Profissional ${idx + 1}`} 
                  className="w-full h-auto rounded-2xl shadow-inner block"
                  loading="lazy"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-white/50 transform group-hover:scale-110 transition-transform">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 text-slate-400 font-bold"
            >
              <div className="w-12 h-[1px] bg-slate-200" />
              <span>O próximo feedback pode ser o seu</span>
              <div className="w-12 h-[1px] bg-slate-200" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned with Light Colors and High Conversion Layout */}
      <section id="pricing" className="py-24 bg-linear-to-b from-white via-primary/5 to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto">
            {/* Oferta Card */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden relative"
            >
              {/* Badge Flutuante */}
              <div className="bg-accent text-white px-6 py-2 font-black text-sm absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl shadow-md z-20 whitespace-nowrap">
                OFERTA LIMITADA: 70% OFF
              </div>

              <div className="p-8 md:p-12 pt-16 text-center">
                <h2 className="text-3xl font-display font-black text-slate-900 mb-2 leading-tight">
                  Tudo o que você precisa por um preço simbólico
                </h2>
                <div className="w-16 h-1.5 bg-primary/20 mx-auto rounded-full mb-8" />

                {/* Preço Layout Corrigido */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-slate-400 line-through text-lg font-medium mb-1">De R$ 97,00</span>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-primary font-bold text-2xl mt-2">R$</span>
                    <span className="text-primary font-black text-7xl md:text-8xl tracking-tighter leading-none">27,90</span>
                  </div>
                  <p className="inline-block mt-4 text-secondary font-bold bg-secondary/10 px-4 py-1.5 rounded-full text-sm">
                    Acesso Vitalício • Pagamento Único
                  </p>
                </div>

                {/* Lista de Benefícios */}
                <div className="space-y-4 mb-10 text-left max-w-[280px] mx-auto">
                  {[
                    "+70 Aulas em Slides de Inglês",
                    "Material 100% Editável no Canva",
                    "Biblioteca de Atividades Inclusa",
                    "Acesso Imediato no E-mail"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-semibold text-slate-700 text-sm md:text-base">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button 
                    onClick={() => window.location.href = "https://pay.cakto.com.br/ec4jzvs_888538"}
                    className="w-full bg-secondary hover:bg-emerald-700 text-white py-6 rounded-2xl font-black text-xl md:text-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3 active:translate-y-1"
                  >
                    QUERO MEU ACESSO AGORA
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <p className="mt-6 text-slate-400 text-sm flex items-center justify-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-secondary" /> Transação Criptografada e Segura
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Garantia Section - Institutional Trust Design */}
            <div className="mt-24 max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
                {/* Background Decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    initial={{ rotate: -10, scale: 0.8 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="w-40 h-40 relative flex items-center justify-center">
                      {/* Selo Externo */}
                      <div className="absolute inset-0 border-2 border-dashed border-amber-400 rounded-full animate-[spin_20s_linear_infinite]" />
                      {/* Selo Principal */}
                      <div className="w-32 h-32 rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 flex flex-col items-center justify-center shadow-lg border-4 border-white">
                        <ShieldCheck className="w-6 h-6 text-white mb-1" />
                        <span className="text-4xl font-black text-white leading-none">7</span>
                        <span className="text-xs font-black text-white uppercase tracking-widest">Dias</span>
                        <div className="h-px w-8 bg-white/40 my-1" />
                        <span className="text-[7px] font-bold text-white uppercase tracking-[0.2em]">Garantia Total</span>
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-4">
                    Garantia de Satisfação <span className="text-primary italic">Incondicional</span>
                  </h3>
                  
                  <div className="relative px-6">
                    <span className="absolute -left-2 -top-4 text-6xl text-slate-100 font-serif">"</span>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                      Temos tanta confiança na qualidade dos nossos slides que oferecemos 
                      uma garantia de 7 dias. Se por qualquer motivo você não achar que a Academia de Inglês 
                      facilitou suas aulas, basta nos enviar um e-mail. 
                      <span className="text-slate-900 font-bold block mt-2 text-xl">Devolvemos 100% do seu dinheiro, sem perguntas.</span>
                    </p>
                    <span className="absolute -right-2 -bottom-10 text-6xl text-slate-100 font-serif rotate-180">"</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="flex gap-1 mb-2">
                       {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Lock className="w-3 h-3" /> Pagamento Seguro via Criptografia SSL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 font-medium">
              Tudo o que você precisa saber sobre o material antes de garantir seu acesso.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Como receberei o material?",
                a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link para baixar os materiais e os links de edição do Canva direto na plataforma."
              },
              {
                q: "Posso editar os slides?",
                a: "Sim! Os slides são 100% editáveis no Canva. Você pode mudar absolutamente tudo: cores, textos, imagens e adaptar para a realidade da sua turma."
              },
              {
                q: "Preciso ter a versão paga do Canva?",
                a: "Não. Os materiais foram criados pensando em quem usa a versão gratuita do Canva. Você não precisará pagar nada a mais para editar ou usar."
              },
              {
                q: "O material serve para qual série?",
                a: "O foco principal é o Ensino Fundamental II (6º ao 9º ano), mas os tópicos de gramática são a base necessária para qualquer nível iniciante (A1/A2)."
              },
              {
                q: "Por quanto tempo terei acesso?",
                a: "O acesso é vitalício. Uma vez adquirido, o material é seu para sempre, incluindo as atualizações que fizermos nesta coleção."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-bold text-slate-800 pr-4">{faq.q}</span>
                    <span className="transition-transform group-open:rotate-180 shrink-0">
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          {/* Interactive Support Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-linear-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-slate-600 p-1 overflow-hidden">
                   <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-3xl">👋</div>
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-slate-800 rounded-full animate-pulse" />
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Ainda tem dúvidas?</h3>
                <p className="text-slate-300 text-lg mb-6">Estou online agora para te ajudar a tomar a melhor decisão!</p>
                <a 
                  href="https://wa.me/559884335718" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-emerald-500/20 group-hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  CHAMAR NO WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg leading-none">A</div>
              <span className="font-display font-bold text-lg tracking-tight">Academia de <span className="text-primary">Inglês</span></span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
               <a href="#" className="hover:text-primary">Termos de Uso</a>
               <a href="#" className="hover:text-primary">Privacidade</a>
               <a href="https://wa.me/559884335718" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Ajuda</a>
            </div>

            <p className="text-sm text-slate-400">© 2024 Academia de Inglês. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
