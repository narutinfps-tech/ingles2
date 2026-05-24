/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
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
  X,
  Volume2,
  Play,
  Gamepad2,
  FileText,
  Award,
  ChevronLeft,
  CreditCard,
  Mail
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
            setTimeout(() => setIsDismissed(true), 500);
          }}
          className="absolute top-1 right-1 text-slate-300 hover:text-slate-600 transition-colors cursor-pointer"
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

interface WistiaPlayerProps {
  hashedId: string;
}

function WistiaPlayer({ hashedId }: WistiaPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Integrate with Wistia's asynchronous queue
    const _wq = (window as any)._wq || [];
    _wq.push({
      id: hashedId,
      options: {
        videoFoam: true, // Auto-responsiveness for player
        playsinline: true,
        preload: "auto",
        qualityControl: true,
        qualityMin: "360p",
        qualityMax: "720p",
        resumable: false,
        endVideoBehavior: "reset"
      },
      onReady: (video: any) => {
        console.log(`Native Wistia player is active for ${hashedId}`);
      }
    });
    (window as any)._wq = _wq;

    // Scan the DOM if the library is already compiled
    if ((window as any).Wistia && (window as any).Wistia.api) {
      (window as any).Wistia.api(hashedId);
    }
  }, [hashedId]);

  return (
    <div className="w-full h-full relative" ref={containerRef}>
      <div 
        className={`wistia_embed wistia_async_${hashedId}`} 
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <div 
          className="wistia_swatch" 
          style={{ 
            height: '100%', 
            left: 0, 
            opacity: 0, 
            overflow: 'hidden', 
            position: 'absolute', 
            top: 0, 
            transition: 'opacity 200ms', 
            width: '100%' 
          }}
        >
          <img 
            className="w-full h-full object-contain"
            src={`https://fast.wistia.com/embed/medias/${hashedId}/swatch`} 
            style={{ filter: 'blur(5px)' }} 
            alt="Carregando..." 
            aria-hidden="true" 
            onLoad={(e) => { 
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) parent.style.opacity = '1';
            }} 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openGrade, setOpenGrade] = useState<string | null>("fundamental-6-7");

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SalesNotification />
      {/* Top Banner Message */}
      <div className="bg-orange-500 text-white py-3 px-4 text-center z-50 shadow-md">
        <p className="text-xs md:text-sm font-extrabold tracking-widest uppercase flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Oferta Especial Disponível por Tempo Limitado
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-10">
              Tenha acesso aos <span className="text-primary">slides prontos</span> de Inglês que vão despertar a atenção dos seus alunos.
            </h1>

            {/* Custom Infinite Carousel in place of the video */}
            <div className="w-full relative overflow-hidden py-6 mb-12">
              <div className="relative flex flex-col gap-4 select-none pointer-events-none">
                {/* Gradients to shadow the left and right borders of the infinite strip */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Row 1 - Slide Previews */}
                <motion.div 
                  className="flex whitespace-nowrap gap-5 items-center w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ 
                    duration: 22, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                >
                  {[...SLIDE_IMAGES, ...SLIDE_IMAGES].map((img, index) => (
                    <div 
                      key={`row1-hero-carousel-${index}`} 
                      className="w-[220px] sm:w-[260px] shrink-0"
                    >
                      <img 
                        src={img} 
                        alt="Slide Preview" 
                        className="rounded-2xl w-full h-auto block object-contain shadow-md border border-slate-100/50"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Row 2 - Slide Previews opposite direction */}
                <motion.div 
                  className="flex whitespace-nowrap gap-5 items-center w-max"
                  initial={{ x: "-50%" }}
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ 
                    duration: 35, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                >
                  {[...SLIDE_IMAGES, ...SLIDE_IMAGES].map((img, index) => (
                    <div 
                      key={`row2-hero-carousel-${index}`} 
                      className="w-[220px] sm:w-[260px] shrink-0"
                    >
                      <img 
                        src={img} 
                        alt="Slide Preview" 
                        className="rounded-2xl w-full h-auto block object-contain shadow-md border border-slate-100/50"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPricing();
                }}
                className="bg-secondary hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all btn-shadow flex items-center gap-3 cursor-pointer"
              >
                Quero garantir meus materiais
                <ChevronRight className="w-6 h-6" />
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-secondary" /> Compra Segura</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Acesso Imediato</span>
              <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-secondary" /> 7 Dias de Garantia</span>
            </div>
          </motion.div>
        </div>
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
            A <span className="bg-white text-primary px-3 rounded-lg">Academia de Inglês</span> é uma plataforma online com materiais prontos para professores de Ensino Fundamental e Ensino Médio.
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
                  <span>Mais de 70 aulas completas e prontas para uso, abrangendo conteúdos do Ensino Fundamental e Ensino Médio.</span>
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
              { title: "Conexão", desc: "Mecanismos de interação, perguntas disparadoras e elementos lúdicos que geram participação activa.", icon: MessageCircle },
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

        </div>
      </section>



      {/* New Section: What's Inside - Dynamic Carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Veja como é por dentro dos <span className="text-primary italic">nossos slides</span></h2>
          <p className="text-slate-600 mb-8">Material organizado, estético e pronto para dar aula hoje mesmo.</p>

          {/* Video Player Card for Slide Walkthrough Presentation (16:9 widescreen) */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-3 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] border border-slate-100 overflow-hidden">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <WistiaPlayer hashedId="2aubx2g64c" />
              </div>
              <p className="text-center text-slate-500 text-sm font-medium mt-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                Assista ao vídeo acima para ver uma amostra grátis de um slide por dentro!
              </p>
            </div>
          </div>
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
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block animate-pulse"
          >
            <a 
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToPricing();
              }}
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg cursor-pointer no-underline"
            >
              QUERO ESSE MATERIAL COMPLETO
            </a>
          </motion.div>
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
            {[
              { id: "fundamental-6-7", title: "6º e 7º ANO - ENSINO FUNDAMENTAL", items: ["Greetings & Introductions", "Verb To Be (Affirmative/Negative/Interrogative)", "Pronouns & Possessive Adjectives", "Genitive Case & Family Members", "Simple Present Tense", "Adjectives & Opposites", "Insects & Animals Vocabulary", "School Objects & Places"] },
              { id: "fundamental-8-9", title: "8º e 9º ANO - ENSINO FUNDAMENTAL", items: ["Verb To Have (All Forms)", "Prepositions of Place & Time", "Adverbs of Frequency", "Present Continuous Tense", "Modal Verbs: Can / Could", "Regular & Irregular Verbs", "Simple Past Tense", "Future with Will & Going To"] },
              { id: "medio", title: "1º ao 3º ANO - ENSINO MÉDIO", items: ["Present Perfect Tense", "Conditionals (Zero, First, Second)", "Reported Speech basics", "Passive Voice & Active Voice", "Relative Pronouns", "Modal Verbs: Must, Should, May, Might", "Reading Comprehension & Text Interpretation", "Vocabulary Building & False Cognates"] },
            ].map((section) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenGrade(openGrade === section.id ? null : section.id);
                  }}
                  className="w-full flex items-center justify-between p-6 bg-primary text-white font-display font-bold text-xl cursor-pointer"
                >
                  {section.title}
                  <ChevronDown className={`w-6 h-6 transition-transform ${openGrade === section.id ? 'rotate-180' : ''}`} />
                </button>
                {openGrade === section.id && (
                  <div className="p-8 grid md:grid-cols-2 gap-4">
                    {section.items.map(item => (
                      <div key={item} className="text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
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

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory -mx-4 px-4 md:mx-auto md:px-0 max-w-6xl">
            {[
              "https://i.ibb.co/B2z14PbD/Whats-App-Image-2026-05-17-at-18-44-10.jpg",
              "https://i.ibb.co/Q3V0GzLH/Whats-App-Image-2026-05-17-at-18-44-09-2.jpg",
              "https://i.ibb.co/Sw6KLrLP/Chat-GPT-Image-23-de-mai-de-2026-21-37-19.png",
              "https://i.ibb.co/tpGDSdbv/Chat-GPT-Image-23-de-mai-de-2026-21-37-08.png",
              "https://i.ibb.co/XxJWDjj6/Whats-App-Image-2026-05-17-at-18-44-09-1.jpg",
              "https://i.ibb.co/nN3tG2FJ/Whats-App-Image-2026-05-17-at-18-44-09.jpg"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-full md:shrink relative bg-white p-3 rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transition-all duration-500 cursor-zoom-in"
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

          {/* Touch Swiping Helper Indicator */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-8 text-slate-400 font-bold">
            <ChevronLeft className="w-4 h-4 animate-pulse text-primary/70" />
            <span className="text-xs uppercase tracking-wider">Arraste para o lado para ver todos</span>
            <ChevronRight className="w-4 h-4 animate-pulse text-primary/70" />
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

      {/* Exclusive Bonus Section - Redesigned with 3 Super Bonuses */}
      <section className="py-24 bg-[#F8F7F4] border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-600 text-xs font-black uppercase tracking-widest rounded-full mb-4">
              🎁 PRESENTES EXCLUSIVOS E GRATUITOS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Garante Hoje e Leve <span className="text-primary">+3 Super Bônus</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium mt-3 max-w-2xl mx-auto">
              Preparamos três presentes incríveis alinhados à BNCC para enriquecer ainda mais a jornada das suas aulas e poupar horas de planejamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            
            {/* BONUS 1: Atividades Extras Prontas */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                    BÔNUS 01
                  </span>
                  <div className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-lg font-bold border border-emerald-100 uppercase tracking-wider">
                    DE R$ 47 por R$ 0
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                  +100 Atividades Extras
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Um pack fantástico com mais de 100 folhas de atividades pedagógicas extras prontas para imprimir e aplicar diretamente na sua turma.
                </p>

                {/* Main Image representing Bonus 1 */}
                <div className="relative rounded-2xl overflow-hidden mb-6 bg-slate-50 border border-slate-100 aspect-video flex items-center justify-center p-2.5">
                  <img 
                    src="https://i.ibb.co/MyvQWqVv/Chat-GPT-Image-18-de-mai-de-2026-22-20-06.png" 
                    alt="Bônus 100 Atividades" 
                    className="max-h-full object-contain drop-shadow-md rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ul className="space-y-2.5 mb-8 text-left">
                  {[
                    "Exercícios gramaticais diretos",
                    "Listas de fixação alinhadas com a BNCC",
                    "Formato A4 PDF limpo pronto para imprimir"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 text-center">
                <span className="text-xs font-bold text-slate-400 tracking-wider">INCLUSO NA COMPRA DO SLIDESHOW</span>
              </div>
            </motion.div>

            {/* BONUS 2: English Audio Class Pack */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary/10 text-secondary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                    BÔNUS 02
                  </span>
                  <div className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-lg font-bold border border-emerald-100 uppercase tracking-wider">
                    DE R$ 37 por R$ 0
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                  English Audio Class Pack
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Atividades criativas acompanhadas de áudio com pronúncia nítida para ajudar seus alunos a dominar o speaking e treinar listening.
                </p>

                {/* Mockup Image representing Bonus 2 (Livre e maior, sem moldura) */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://i.ibb.co/FqXqQwFF/Chat-GPT-Image-19-de-mai-de-2026-17-31-38.png" 
                    alt="Bônus English Audio Class Pack" 
                    className="w-full h-auto drop-shadow-xl select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ul className="space-y-2.5 mb-8 text-left">
                  {[
                    "Áudios práticos divididos por temas",
                    "Perfeito para ensinar phonetics e rítmica",
                    "Slides com botões integrados para dar play na aula"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 text-center">
                <span className="text-xs font-bold text-slate-400 tracking-wider">AULA MAIS IMERSIVA E DINÂMICA</span>
              </div>
            </motion.div>

            {/* BONUS 3: Atividades Diversificadas Lúdicas */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-amber-500" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                    BÔNUS 03
                  </span>
                  <div className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-lg font-bold border border-emerald-100 uppercase tracking-wider">
                    DE R$ 49 por R$ 0
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                  Atividades Lúdicas Especiais
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Uma coleção lúdica fantástica contendo Bingos didáticos, Caça-Palavras dinâmicos e Atividades de Ligação de Palavras.
                </p>

                {/* Mockup Image representing Bonus 3 (Livre e maior, sem moldura) */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://i.ibb.co/nqPc6XPj/Chat-GPT-Image-19-de-mai-de-2026-17-42-07.png" 
                    alt="Bônus Atividades Lúdicas Especiais" 
                    className="w-full h-auto drop-shadow-xl select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ul className="space-y-2.5 mb-8 text-left">
                  {[
                    "Bingos de vocabulário e tempos verbais",
                    "Caça-palavras temáticos desafiadores",
                    "Quebra-cabeças e ligação de balões visuais"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 text-center">
                <span className="text-xs font-bold text-slate-400 tracking-wider">ENSINE JOGANDO E FIXE O APRENDIZADO</span>
              </div>
            </motion.div>

          </div>

          {/* Quick interactive CTA block inside */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -mr-24 -mt-24" />
            
            <h4 className="text-2xl md:text-3xl font-black mb-3">Tudo isso somado vale R$ 230 reais...</h4>
            <p className="text-slate-300 text-sm md:text-base font-semibold max-w-xl mx-auto mb-8 leading-relaxed">
              Mas comprando o material completo hoje, esses três presentes vão sair de forma <span className="text-amber-400 underline font-black">totalmente GRATUITA</span> para você.
            </p>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <a 
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPricing();
                }}
                className="bg-secondary hover:bg-emerald-700 text-white px-8 py-4.5 rounded-2xl font-black text-lg md:text-xl transition-all flex items-center gap-2 cursor-pointer no-underline"
              >
                Garantir slides + todos os bônus
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Passo a Passo de Compra e Recebimento */}
      <section className="py-12 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          <div className="text-center mb-8 max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-500/10 text-[#E65C00] text-xs font-bold uppercase tracking-wider rounded-full">
              Sem Complicação
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Como funciona o <span className="text-primary italic font-serif">passo a passo</span>?
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Processo automático, seguro e instantâneo para começar a usar hoje mesmo.
            </p>
          </div>

          {/* Steps Timeline Grid / Mobile horizontal scroll */}
          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {/* Connecting Line on Desktop */}
            <div className="hidden md:block absolute top-[1.8rem] left-[12%] right-[12%] h-[1.5px] bg-slate-200/40 border-t border-dashed -z-10" />

            {[
              {
                step: "01",
                icon: CreditCard,
                title: "Escolha o Plano",
                desc: "Selecione o plano ideal abaixo e faça o pagamento rápido via Pix ou Cartão.",
                textColor: "text-emerald-600 font-bold"
              },
              {
                step: "02",
                icon: Mail,
                title: "Receba o E-mail",
                desc: "O envio é imediato. Os links de acesso e PDFs chegam direto no seu e-mail.",
                textColor: "text-amber-600 font-bold"
              },
              {
                step: "03",
                icon: Layout,
                title: "Acesse o Material",
                desc: "Baixe os PDFs e slides prontos para utilizar em sala de aula.",
                textColor: "text-blue-600 font-bold"
              },
              {
                step: "04",
                icon: Sparkles,
                title: "Dê uma Super Aula",
                desc: "Surpreenda seus alunos com dinâmicas incríveis e poupe horas semanais.",
                textColor: "text-primary font-bold"
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="w-[250px] md:w-auto shrink-0 snap-center bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.01),0_4px_10px_-2px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Circle Header containing Step Number & Icon */}
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-50 font-mono ${item.textColor} border border-slate-100/80`}>
                        Passo {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100/50">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Swipe Indicator for Mobile */}
          <div className="flex justify-center gap-1.5 mt-3 md:hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          </div>

        </div>
      </section>

      {/* Pricing Section - Redesigned with Light Colors and High Conversion Layout */}
      <section id="pricing" className="pt-10 pb-24 bg-linear-to-b from-white via-primary/5 to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Two-Column Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              
              {/* Essential Card (R$ 10,00) */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden relative flex flex-col justify-between"
              >
                {/* Floating Badge */}
                <div className="bg-slate-100 text-slate-700 px-6 py-2 font-black text-xs absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl shadow-xs z-20 whitespace-nowrap uppercase tracking-wider">
                  Oferta Prática
                </div>

                <div className="p-8 md:p-10 pt-16 text-center flex-grow flex flex-col justify-between bg-slate-50/5">
                  <div>
                    <h3 className="text-2xl font-display font-black text-slate-900 mb-2 leading-tight uppercase tracking-tight">
                      Plano Essencial
                    </h3>
                    <div className="w-12 h-1 bg-slate-200 mx-auto rounded-full mb-8" />

                    {/* Price */}
                    <div className="flex flex-col items-center justify-center mb-8">
                      <span className="text-slate-400 line-through text-base font-medium mb-1">De R$ 47,00</span>
                      <div className="flex items-start justify-center gap-1">
                        <span className="text-slate-800 font-bold text-xl mt-2">R$</span>
                        <span className="text-slate-800 font-black text-6xl md:text-7xl tracking-tighter leading-none">10,00</span>
                      </div>
                      <p className="inline-block mt-4 text-slate-500 font-bold bg-slate-100 px-4 py-1.5 rounded-full text-xs">
                        Acesso Vitalício • Material Prático
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-10 text-left max-w-[280px] mx-auto">
                      {[
                        "+70 Aulas em Slides (Fundamental e Médio)",
                        "Material Didático Completo Prontinho para Ministrar",
                        "Acesso Vitalício Garantido",
                        "Suporte por E-mail"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 font-semibold text-slate-700 text-sm">
                          <div className="w-5.5 h-5.5 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a 
                      href="https://pay.cakto.com.br/mofctvj"
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4.5 rounded-2xl font-black text-lg shadow-md transition-all flex items-center justify-center gap-2 active:translate-y-1 cursor-pointer no-underline"
                    >
                      QUERO O PLANO ESSENCIAL
                      <ChevronRight className="w-5 h-5" />
                    </a>
                    <p className="mt-4 text-slate-400 text-xs flex items-center justify-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-500" /> Transação Segura e Criptografada
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Premium Card (R$ 27,90) */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border-2 border-primary overflow-hidden relative flex flex-col justify-between"
              >
                {/* Floating Badge */}
                <div className="bg-primary text-white px-6 py-2 font-black text-xs absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl shadow-md z-20 whitespace-nowrap uppercase tracking-widest">
                  🔥 O MAIS RECOMENDADO (TODOS OS BÔNUS)
                </div>

                <div className="p-8 md:p-10 pt-16 text-center flex-grow flex flex-col justify-between bg-slate-50/10">
                  <div>
                    <h3 className="text-2xl font-display font-black text-primary mb-2 leading-tight uppercase tracking-tight">
                      Acesso Completo
                    </h3>
                    <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full mb-8" />

                    {/* Price */}
                    <div className="flex flex-col items-center justify-center mb-8">
                      <span className="text-slate-400 line-through text-base font-medium mb-1">De R$ 97,00</span>
                      <div className="flex items-start justify-center gap-1">
                        <span className="text-primary font-bold text-xl mt-2">R$</span>
                        <span className="text-primary font-black text-6xl md:text-7xl tracking-tighter leading-none">27,90</span>
                      </div>
                      <p className="inline-block mt-4 text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-full text-xs">
                        Acesso Vitalício • Todos os Bônus Inclusos
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-10 text-left max-w-[285px] mx-auto">
                      {[
                        "+70 Aulas em Slides (Fundamental e Médio)",
                        "Material Didático Completo Prontinho para Ministrar",
                        "BÔNUS: +100 Atividades de Fixação",
                        "BÔNUS: English Audio Class Pack",
                        "BÔNUS: Atividades Lúdicas Especiais",
                        "Acesso Vitalício Garantido",
                        "Suporte Pedagógico por Chat"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 font-semibold text-slate-800 text-sm">
                          <div className="w-5.5 h-5.5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a 
                      href="https://pay.cakto.com.br/ec4jzvs_888538"
                      className="w-full bg-primary hover:bg-emerald-700 text-white py-4.5 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 active:translate-y-1 cursor-pointer no-underline"
                    >
                      QUERO GARANTIR O ACESSO COMPLETO
                      <ChevronRight className="w-5 h-5" />
                    </a>
                    <p className="mt-4 text-slate-400 text-xs flex items-center justify-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Transação Criptografada e 100% Segura
                    </p>
                  </motion.div>
                </div>
              </motion.div>

            </div>

            {/* Garantia Section - Institutional Trust Design */}
            <div className="mt-24 max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] text-center relative overflow-hidden">
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Classic 7-Day Guarantee Minimalist Icon */}
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 rounded-full bg-amber-50/60 border border-amber-200 flex items-center justify-center relative">
                      {/* Outer subtle glowing ring */}
                      <div className="absolute inset-[-6px] rounded-full border border-dashed border-amber-200/50 animate-[spin_60s_linear_infinite]" />
                      
                      <div className="flex flex-col items-center">
                        <ShieldCheck className="w-10 h-10 text-amber-600 stroke-[1.5]" />
                        <span className="text-xs font-black text-amber-800 tracking-wider uppercase mt-0.5 leading-none">7 dias</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Clean Copy typography */}
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Garantia de Satisfação <span className="text-primary italic font-serif">Incondicional</span>
                  </h3>
                  
                  <div className="max-w-2xl mx-auto px-4 md:px-8">
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal mb-8">
                      Temos tanta confiança na qualidade pedagógica e no impacto dos nossos slides que oferecemos uma garantia integral de 7 dias. Experimente cada detalhe em suas turmas sem risco algum.
                    </p>
                    <div className="bg-slate-50/80 backdrop-blur-xs rounded-2xl p-5 border border-slate-100 mb-8 inline-block max-w-lg">
                      <p className="text-slate-800 text-base md:text-lg font-bold leading-relaxed">
                        Se em até 7 dias você não amar o material por qualquer motivo, devolvemos <span className="text-[#E65C00] font-black">100% do seu dinheiro</span>. Simples assim.
                      </p>
                    </div>
                  </div>

                  {/* Security trust flags */}
                  <div className="flex flex-col items-center gap-2 border-t border-slate-100 pt-8 w-full max-w-xl">
                    <div className="flex gap-1.5 mb-2">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-400" /> Pagamento 100% Seguro & Acesso Imediato
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
                a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com as instruções e o link prático para baixar todos os materiais direto na plataforma."
              },
              {
                q: "Como são apresentados os slides?",
                a: "Os slides são entregues prontos em altíssima qualidade de resolução de imagem e design. Você pode utilizá-los de forma prática e imediata para ministrar suas aulas de inglês."
              },
              {
                q: "O pagamento é recorrente?",
                a: "Não! O pagamento é único (conforme o plano escolhido, a partir de apenas R$ 10,00) e você passa a ter acesso para sempre, livre de mensalidades ou qualquer outra taxa embutida."
              },
              {
                q: "O material serve para qual série?",
                a: "O material é ideal tanto para o Ensino Fundamental quanto para o Ensino Médio, abrangendo toda a gramática essencial e vocabulários de forma dinâmica, visual e super prática para qualquer um desses níveis."
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
                <motion.a 
                  href="https://wa.me/559884335718" 
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer no-underline"
                >
                  <MessageCircle className="w-6 h-6" />
                  CHAMAR NO WHATSAPP
                </motion.a>
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
