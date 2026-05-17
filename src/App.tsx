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
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

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

const TESTIMONIALS = [
  {
    name: "Adriana Silva",
    role: "Professora 8º ano",
    text: "Meus alunos ficaram encantados com os visuais. Finalmente pararam de mexer no celular e prestaram atenção na gramática!",
    rating: 5
  },
  {
    name: "Marcos Oliveira",
    role: "Professor Particular",
    text: "A facilidade de editar no Canva é o diferencial. Adapto para cada aluno em minutos. Economizo horas de planejamento.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Coordenadora Pedagógica",
    text: "Material extremamente didático e organizado. A sequência lógica ajuda muito no aprendizado.",
    rating: 5
  }
];

export default function App() {
  const [openGrade, setOpenGrade] = useState<number | null>(7);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Top Banner Message */}
      <div className="bg-slate-900 text-white py-3 px-4 text-center sticky top-0 z-50">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Tenha acesso aos <span className="text-primary">slides prontos</span> de Inglês que vão despertar a atenção dos seus alunos.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Aulas prontas, visuais e 100% editáveis no Canva para ensinar gramática de forma simples, divertida e organizada no Ensino Fundamental II.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                onClick={scrollToPricing}
                className="bg-secondary hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all btn-shadow flex items-center gap-3"
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

      {/* Infinite Carousel - "Esteira Infinita" Multi-Row */}
      <div className="py-6 bg-slate-50 border-y border-slate-200 overflow-hidden relative flex flex-col gap-3">
        {/* Gradients para suavizar as bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-slate-50 to-transparent z-10" />
        
        {/* Primeira Fileira - SUPER RÁPIDA */}
        <motion.div 
          className="flex whitespace-nowrap gap-3 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 8, // Muito mais rápido
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...SLIDE_IMAGES, ...SLIDE_IMAGES].map((img, index) => (
            <div 
              key={`row1-${index}`} 
              className="w-[280px] shrink-0 bg-white p-1 rounded-lg shadow-sm border border-slate-200"
            >
              <img 
                src={img} 
                alt="Preview 1" 
                className="rounded-md w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>

        {/* Segunda Fileira - DIREÇÃO OPOSTA E RÁPIDA */}
        <motion.div 
          className="flex whitespace-nowrap gap-3 items-center"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 10, // Velocidade alta e variada
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...SLIDE_IMAGES, ...SLIDE_IMAGES].reverse().map((img, index) => (
            <div 
              key={`row2-${index}`} 
              className="w-[280px] shrink-0 bg-white p-1 rounded-lg shadow-sm border border-slate-200"
            >
              <img 
                src={img} 
                alt="Preview 2" 
                className="rounded-md w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <section className="py-12 bg-white text-center">
        <p className="text-slate-400 font-display font-medium tracking-widest text-sm uppercase">Materiais lúdicos, coloridos e 100% didáticos</p>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-100">
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-slate-700 pt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden">
                   <img 
                      src={`https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2671&auto=format&fit=crop`}
                      alt="Canva editing" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="mt-4 flex justify-center gap-8">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white">C</div>
                    Edite no Canva
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-[10px] text-white">P</div>
                    P. Point
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Info */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-12">
            A <span className="bg-white text-primary px-3 rounded-lg">English Pack</span> é uma plataforma online com materiais prontos para professores de Ensino Fundamental II.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-secondary font-black tracking-tight">+ DE 70 AULAS PRONTAS</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span>Mais de 70 aulas editáveis no Canva e no PowerPoint, com conteúdos do 7º, 8º e 9º ano.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span>Slides super ilustrados e visualmente atrativos para manter o engajamento.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-accent font-black tracking-tight">BANCO DE ATIVIDADES</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span>Listas de exercícios com gabarito para cada tema gramatical.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
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

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">O que dizem os professores que já usam?</h2>
            <p className="text-slate-600">Junte-se a centenas de educadores que transformaram suas aulas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />)}
                  </div>
                  <p className="italic text-lg text-slate-700 mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900 relative text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-[50px] p-12 shadow-2xl relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full font-bold shadow-lg animate-bounce">
              OFERTA EXCLUSIVA: 15% OFF
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl mb-6">Comece agora a transformar suas aulas</h2>
              <div className="flex justify-center items-baseline gap-2 mb-2">
                <span className="text-slate-400 line-through text-xl">De R$ 97,00</span>
                <span className="text-primary font-black text-5xl md:text-7xl tracking-tighter">R$ 27,90</span>
              </div>
              <p className="text-slate-500 font-medium">Pagamento único • Acesso vitalício</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                {[
                  "+70 Aulas em Slides Profissionais",
                  "Material 100% Editável no Canva",
                  "Biblioteca de Atividades Inclusa",
                  "Bônus: Planejadores de Aula",
                  "Atualizações Gratuitas por 1 ano"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <p className="text-sm text-center text-slate-500 mb-4 tracking-tighter uppercase font-bold">Pagamento 100% Seguro</p>
                <div className="flex justify-center gap-3">
                  <div className="w-10 h-6 bg-slate-200 rounded" />
                  <div className="w-10 h-6 bg-slate-200 rounded" />
                  <div className="w-10 h-6 bg-slate-200 rounded" />
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center"
            >
              <button className="w-full bg-secondary hover:bg-emerald-600 text-white py-6 rounded-3xl font-black text-2xl shadow-xl transition-all btn-shadow mb-6">
                QUERO MEU ACESSO AGORA
              </button>
              <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Garantia incondicional de 7 dias
              </p>
            </motion.div>
          </div>

          <div className="mt-20 flex flex-col items-center text-center max-w-2xl mx-auto border-t border-white/10 pt-16 px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative mb-10"
            >
              <div className="w-44 h-44 rounded-full bg-linear-to-br from-amber-300 via-yellow-500 to-amber-600 flex flex-col items-center justify-center shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)] border-8 border-slate-900/50">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-white text-white" />)}
                </div>
                <div className="flex flex-col items-center leading-none">
                  <span className="text-5xl font-black tracking-tighter">7</span>
                  <span className="text-lg font-black tracking-tight mt-1">DIAS</span>
                </div>
                <div className="h-px w-12 bg-white/30 my-2" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-90">Incondicional</span>
              </div>
              
              {/* Círculo decorativo girando */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-amber-500/30 rounded-full" 
              />
            </motion.div>

            <h4 className="text-3xl md:text-4xl font-display font-black mb-4 text-white">Garantia Total de Satisfação</h4>
            <p className="text-slate-400 text-lg leading-relaxed italic">
              "O risco é 100% meu. Você acessa os slides, usa em sala de aula e, se em até 7 dias você sentir que o material não valeu o investimento, eu te devolvo <span className="text-secondary font-bold">cada centavo</span> imediatamente."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-secondary font-bold uppercase text-xs tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Compromisso English Pack
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg leading-none">E</div>
              <span className="font-display font-bold text-lg tracking-tight">English<span className="text-primary">Pack</span></span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
               <a href="#" className="hover:text-primary">Termos de Uso</a>
               <a href="#" className="hover:text-primary">Privacidade</a>
               <a href="#" className="hover:text-primary">Ajuda</a>
            </div>

            <p className="text-sm text-slate-400">© 2024 English Pack. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
