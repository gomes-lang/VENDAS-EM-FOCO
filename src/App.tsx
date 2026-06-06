import React, { useState } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Clock, 
  Quote, 
  Zap, 
  Award, 
  Users, 
  Target, 
  Shield, 
  Laptop, 
  ChevronRight,
  Send,
  Camera
} from 'lucide-react';
import { ProjectDetails, ProjectData } from './components/ProjectDetails';

const PORTFOLIO_PROJECTS: ProjectData[] = [
  {
    title: "Escala 7 Dígitos - E-commerce Tech",
    category: "GESTÃO DE TRÁFEGO & IA",
    tag: "trafego",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    stats: "ROI 8.4x",
    description: "Otimização completa de funil com anúncios dinâmicos gerados por inteligência artificial para e-commerce de tecnologia de ponta.",
    challenge: "Um e-commerce de eletrônicos premium e acessórios tecnológicos de ponta estava estagnado em um faturamento mensal médio de R$ 50 mil, com custo de aquisição de cliente (CAC) extremamente alto e anúncios saturados que não geravam engajamento.\n\nA marca precisava de escala agressiva mantendo a saúde financeira e otimizando o retorno sobre o investimento publicitário (ROAS).",
    strategy: [
      "Implementação de anúncios dinâmicos integrados com feed XML em tempo real no Meta Ads e Google Shopping.",
      "Uso de inteligência artificial para segmentação preditiva com públicos semelhantes baseados no valor de tempo de vida do cliente (LTV).",
      "Criação de variações ultra-personalizadas de criativos gerados com inteligência artificial para rodar testes A/B em escala com ganchos emocionais específicos.",
      "Funil de remarketing em 4 camadas abordando abandono de carrinho, visualização sem compra e ofertas cruzadas (cross-sell)."
    ],
    results: [
      "ROI/ROAS médio consolidado de 8.4x ao longo de 6 meses de campanha ativa.",
      "Faturamento mensal escalado de R$ 50.000 para mais de R$ 420.000 recorrentes de forma previsível.",
      "Redução imediata de 43% no Custo de Aquisição de Cliente (CAC) geral.",
      "Mais de R$ 1.2M gerados em novas receitas puras para a operação tech."
    ],
    techStack: ["Meta Ads API", "Google Analytics 4", "Klaviyo CRM", "IA Generativa de Imagens", "Shopify Plus"]
  },
  {
    title: "Branding Disruptivo - Fintech Z",
    category: "CRIATIVOS & BRANDING",
    tag: "branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    stats: "+45% CTR",
    description: "Reestruturação de posicionamento premium com anúncios com taxa de cliques altíssima, elevando a percepção de mercado.",
    challenge: "A Fintech Z entrou em um mercado de meios de pagamento altamente concorrido. Seus criativos publicitários eram puramente focados em recursos técnicos e não conseguiam capturar a atenção do público de alta renda.\n\nEra indispensável gerar identificação imediata, desejo e decolar as taxas de cliques nas principais plataformas digitais para reduzir o CPM de veiculação.",
    strategy: [
      "Reconstrução estética completa de toda a identidade visual dos criativos de alta conversão.",
      "Roteiro de anúncios no formato 'Cinematic Hook' focando nos problemas reais de segurança, tempo e status do usuário premium.",
      "Distribuição de tráfego com segmentação refinada por dados demográficos qualificados (interesses em investimentos de alta renda e bens de luxo).",
      "Landing page redesenhada com técnicas avançadas de copywriting voltadas a converter leads frios em cadastros ativos."
    ],
    results: [
      "Aumento imediato de mais de 45% na taxa de cliques (CTR) geral de todas as campanhas.",
      "Redução drástica de 32% no Custo por Lead (CPL) qualificado de alta renda.",
      "Mais de 25 mil novas contas abertas na fintech impulsionadas diretamente pelas campanhas desenhadas."
    ],
    techStack: ["Framer Motion", "Tailwind CSS", "TikTok Business Ads", "Meta Ads Enterprise", "Hotjar Premium"]
  },
  {
    title: "Automação de Leads - Real Estate",
    category: "IA & AUTOMAÇÃO",
    tag: "automacao",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    stats: "-60% SAC",
    description: "Sistema automatizado com inteligência artificial conversacional integrada, qualificando leads de alto padrão 24 horas por dia.",
    challenge: "Uma imobiliária focada em imóveis residenciais de luxo e condomínios fechados recebia centenas de leads através do tráfego pago.\n\nNo entanto, a equipe comercial de corretores não conseguia atender a demanda a tempo, resultando em leads frios e alta taxa de cancelamento por demora de resposta, além de sobrecarregar o suporte telefônico com perguntas repetitivas.",
    strategy: [
      "Desenho e construção de fluxo inteligente via WhatsApp API oficial.",
      "Integração com agente de Inteligência Artificial conversacional que simula um tom de atendimento empático e altamente profissional.",
      "Envio de portfólio customizado, fotos e agendamento automático integrado com o calendário do corretor responsável com base no perfil financeiro do lead.",
      "Triagem instantânea em menos de 10 segundos, categorizando leads entre alta, média e baixa prioridade."
    ],
    results: [
      "Redução de 60% nas chamadas manuais de triagem e de suporte repetitivas (Redução de custo de SAC).",
      "Aumento de 180% na taxa de agendamento de reuniões comerciais de alta conversão.",
      "Tempo médio de atendimento do primeiro contato reduzido de 2 horas para incríveis 8 segundos."
    ],
    techStack: ["WhatsApp Cloud API", "Make / Integromat", "OpenAI Assistant API", "HubSpot CRM", "Typeform SDK"]
  },
  {
    title: "Dominação Local - Clínica VIP",
    category: "PRESTADOR DE SERVIÇO",
    tag: "trafego",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
    stats: "Agenda Cheia",
    description: "Estratégia geolocalizada refinada com automação direta para o WhatsApp, saturando o faturamento do principal estabelecimento médico de luxo.",
    challenge: "Uma clínica médica e dermatológica de luxo em região nobre queria atrair novos pacientes particulares de alta capacidade aquisitiva.\n\nEles já haviam tentado tráfego tradicional de mídias sociais mas os contatos eram sem perfil, buscavam apenas orçamentos de baixo custo e não convertiam nas consultas presenciais de ticket elevado.",
    strategy: [
      "Mapeamento geográfico refinado com raio ultra-preciso em bairros nobres e condomínios de alto padrão.",
      "Desenvolvimento de criativos cinematográficos gerando desejo e destacando as tecnologias de ponta exclusivas da clínica.",
      "Anúncios focados em benefícios estéticos e rejuvenescimento saudável direcionando diretamente para atendimento pré-qualificado.",
      "Esteira automatizada no WhatsApp que realiza um mini-diagnóstico prévio e sugere datas livres na agenda médica."
    ],
    results: [
      "Agenda médica de procedimentos estéticos premium totalmente preenchida com 3 semanas de antecedência recorrente.",
      "Aumento líquido de 220% no faturamento bruto advindo de novos pacientes de alta renda.",
      "ROAS estimado de 12.5x com base no valor de vida útil (LTV) das consultas e procedimentos subsequentes de pacientes retidos."
    ],
    techStack: ["Google Local Search Ads", "Meta Ads", "CRM Clinis", "WhatsApp API", "Copywriting de Alto Padrão"]
  }
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab ] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    faturamento: '',
    mensagem: ''
  });

  // Dynamic portfolio profile images that support real-time uploads and local persistence
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('rodrigo_profile_image') || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000';
  });

  const [dragOver1, setDragOver1] = useState(false);
  const [dragOver2, setDragOver2] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileDrop(file);
    }
  };

  const handleFileDrop = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        setProfileImage(base64Data);
        localStorage.setItem('rodrigo_profile_image', base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  // Floating AI Chat Simulator State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Olá! Sou o assistente inteligente do Rodrigo. Qual é o principal diagnóstico que você procura hoje?' }
  ]);
  const [userMsg, setUserMsg] = useState('');

  const navLinks = [
    { name: 'VENDAS EM FOCO', href: '#sobre' },
    { name: 'PERFORMANCE', href: '#performance' },
    { name: 'CASES', href: '#portfolio' },
    { name: 'ESTRATÉGIA', href: '#estrategista' },
    { name: 'METODOLOGIA', href: '#metodo' },
    { name: 'CONTATO', href: '#contato' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Persist real input locally so user does not lose state on refresh
    localStorage.setItem('rodrigo_lead_submitted', JSON.stringify(contactData));
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactData({
        nome: '',
        email: '',
        whatsapp: '',
        empresa: '',
        faturamento: '',
        mensagem: ''
      });
    }, 4000);
  };

  const handleSendChat = () => {
    if (!userMsg.trim()) return;
    const newMessages = [...chatMessages, { sender: 'user', text: userMsg }];
    setChatMessages(newMessages);
    const trigger = userMsg.toLowerCase();
    setUserMsg('');

    // Dynamic professional responses based on intent
    setTimeout(() => {
      let botResponse = "Fantástico! Para desenhar esse plano customizado de processos comerciais e automação inteligente, recomendo agendarmos uma sessão de diagnóstico rápido de 15 minutos com o Rodrigo. Deixe seu WhatsApp ou clique no botão de contato abaixo.";
      if (trigger.includes('tráfego') || trigger.includes('anuncio') || trigger.includes('ads') || trigger.includes('marketing')) {
        botResponse = "Excelente. O Rodrigo foca em tráfego de alta escala e qualificação prévia por IA. Isso garante leads prontos para comprar, maximizando o ROI e evitando desperdício de verba. Qual seu nicho?";
      } else if (trigger.includes('automacao') || trigger.includes('ia') || trigger.includes('chatbot') || trigger.includes('agent')) {
        botResponse = "Automação é nossa especialidade. Construímos agentes inteligentes 24/7 que triam, respondem e agendam reuniões diretamente no WhatsApp, reduzindo custos de SAC em até 60%. Quer ver uma demonstração?";
      } else if (trigger.includes('preco') || trigger.includes('valor') || trigger.includes('custo') || trigger.includes('quanto')) {
        botResponse = "Trabalhamos com soluções sob medida focadas em retorno (ROI). Criamos planos personalizados após analisar seu faturamento atual e gargalos comerciais atuais. Vamos agendar?";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-brand selection:text-dark font-sans relative overflow-x-hidden">
      
      {/* HEADER / NAVIGATION */}
      <nav id="nav-header" className="fixed top-0 inset-x-0 bg-dark/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a 
            href="#sobre" 
            onClick={(e) => {
              e.preventDefault();
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-dark to-brand-light flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform duration-300">
              <Target className="text-dark bg-brand/10 p-1.5 rounded-lg text-brand" size={24} />
            </div>
            <div>
              <span className="font-display font-medium text-lg tracking-[2px] text-white group-hover:text-brand transition-colors duration-200">RODRIGO RIBEIRO GOMES</span>
              <p className="text-[9px] font-bold text-gray-500 tracking-[3px] uppercase">Estrategista Digital</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(null);
                  setTimeout(() => {
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-xs font-bold tracking-[2px] text-gray-400 hover:text-brand transition-colors duration-200 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a 
              href="#contato" 
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(null);
                setTimeout(() => {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-6 py-3 rounded-full text-xs font-bold tracking-[2px] border border-brand bg-brand/5 text-brand hover:bg-brand hover:text-dark transition-all duration-300 shadow-lg shadow-brand/10 hover:shadow-brand/20"
            >
              FALAR COM O LÍDER
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-gray-400 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-24 left-0 right-0 bg-dark-soft border-b border-white/5 shadow-2xl overflow-hidden z-40"
            >
              <div className="px-6 py-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(null);
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }}
                    className="text-sm font-bold tracking-[3px] text-gray-300 hover:text-brand transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contato" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="w-full text-center px-6 py-4 rounded-full text-xs font-bold tracking-[3px] bg-brand text-dark hover:bg-brand-light transition-all duration-300"
                >
                  CONTRATAR AGORA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetails 
            key="details"
            project={selectedProject} 
            onBack={() => {
              setSelectedProject(null);
              setTimeout(() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* HERO SECTION */}
            <section id="sobre" className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-dark/5 blur-[150px] pointer-events-none" />
        <div className="absolute top-12 right-1/4 w-72 h-72 rounded-full border border-brand/5 animate-pulse-ring pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 text-brand text-xs font-bold tracking-[3px] uppercase">
                <Sparkles size={14} className="animate-spin-slow" />
                VENDAS EM FOCO & INTELIGÊNCIA ARTIFICIAL
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[0.95] tracking-tighter text-yellow-400">
                MÁQUINAS DE VENDAS PREVISÍVEIS, <br className="hidden sm:inline" />
                PROCESSOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">IMPLACÁVEIS.</span>
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Não gaste dinheiro com ferramentas caras ou leads frios. Unimos a psicologia de consumo tradicional com a velocidade da inteligência artificial para construir máquinas lucrativas de atração e escala.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <a 
                  href="#contato" 
                  className="w-full sm:w-auto px-8 py-5 rounded-full bg-brand text-dark font-display font-bold tracking-[2px] text-sm hover:bg-brand-light transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group"
                >
                  QUERO ESCALAR OPERAÇÃO 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#portfolio" 
                  className="w-full sm:w-auto px-8 py-5 rounded-full border border-white/10 hover:border-brand/40 bg-white/5 hover:bg-brand/5 text-white font-display font-bold tracking-[2px] text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  VER CASES DE SUCESSO
                </a>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white">10+ Anos</div>
                  <p className="text-xs text-gray-500 tracking-[1px] mt-1">De Mercado Comercial</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-brand">ROI 8x+</div>
                  <p className="text-xs text-gray-500 tracking-[1px] mt-1">Média de Campanhas</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white">R$10M+</div>
                  <p className="text-xs text-gray-500 tracking-[1px] mt-1">Investimento Gerido</p>
                </div>
              </div>
            </div>

            {/* Right Column Mockup Image */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[3rem] p-4 bg-gradient-to-tr from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent rounded-[3rem] pointer-events-none" />
                <div 
                  className={`w-full h-full rounded-[2.5rem] bg-dark-soft overflow-hidden relative border transition-all duration-300 group ${dragOver1 ? 'border-brand ring-4 ring-brand/30 ring-inset' : 'border-white/5'}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver1(true); }}
                  onDragLeave={() => setDragOver1(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver1(false);
                    if (e.dataTransfer.files?.[0]) {
                      handleFileDrop(e.dataTransfer.files[0]);
                    }
                  }}
                >
                  <img 
                    src={profileImage} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    alt="Rodrigo Ribeiro Gomes"
                    referrerPolicy="no-referrer"
                  />

                  {/* Drag and Drop visual Overlay */}
                  {dragOver1 && (
                    <div className="absolute inset-0 bg-dark-soft/95 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-40 border-2 border-brand border-dashed rounded-[2.5rem] p-4 text-center">
                      <Camera className="text-brand animate-bounce" size={40} />
                      <span className="text-xs font-bold text-white tracking-[2px] uppercase">Solte sua foto aqui</span>
                      <p className="text-[10px] text-gray-400">Arraste e solte o arquivo da foto para atualizar instantaneamente!</p>
                    </div>
                  )}
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 border border-brand/20 bg-dark-soft/90 backdrop-blur-md rounded-2xl flex items-center gap-3 shadow-xl z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand animate-ping" />
                    <span className="text-xs font-bold tracking-[2px] text-white">IA DE TRÁFEGO ATIVA</span>
                  </div>

                  {/* Floating Edit Icon */}
                  <label className="absolute bottom-28 right-6 bg-brand hover:bg-brand-light text-dark p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group/edit z-30">
                    <Camera size={16} />
                    <span className="max-w-0 overflow-hidden group-hover/edit:max-w-xs transition-all duration-300 text-[9px] font-bold tracking-[2px] uppercase whitespace-nowrap text-dark font-extrabold">ALTERAR FOTO</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </label>

                  {/* Floating Process Card */}
                  <div className="absolute bottom-6 right-6 left-6 p-5 border border-white/10 bg-dark-soft/95 backdrop-blur-md rounded-2xl flex items-center gap-4 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 block tracking-[1px]">Escala Comercial</span>
                      <p className="text-sm font-display font-bold text-white">Mais de R$2.4M Gerados este Ano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRIC RIBBON */}
      <section className="bg-dark-soft border-y border-white/5 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Zap, label: "Foco Absoluto", val: "Resultado Comercial" },
              { icon: Users, label: "Operações Ativas", val: "Nacionais & Latam" },
              { icon: Award, label: "Autoridade", val: "Pilar de IA Aplicada" },
              { icon: Shield, label: "Processo Consolidado", val: "Escala Sustentável" }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2 group">
                <div className="flex justify-center">
                  <metric.icon className="text-brand opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-brand transition-colors">{metric.label}</h4>
                <p className="text-xs text-gray-500 tracking-[1px] uppercase">{metric.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / CASES SECTION */}
      <section id="portfolio" className="section-pad bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-[10px] font-bold text-brand tracking-[6px] mb-4 uppercase">NOSSOS CASES</h2>
              <h3 className="text-4xl md:text-6xl font-display font-extrabold mb-4 leading-none text-white uppercase">
                RESULTADOS QUE <span className="text-brand">FALAM POR NÓS.</span>
              </h3>
              <p className="text-gray-400 font-light text-base max-w-xl">
                Confira os marcos e resultados reais desenhados através de funis direcionados, criativos cirúrgicos e automação.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'trafego', label: 'Gestão & IA' },
                { id: 'automacao', label: 'Automação' },
                { id: 'branding', label: 'Estratégia' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase transition-all ${
                    activeTab === tab.id 
                    ? 'bg-brand text-dark shadow-lg shadow-brand/20' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS
            .filter(project => activeTab === 'all' || project.tag === activeTab)
            .map((p, idx) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProject(p)}
                className="group relative h-[520px] rounded-[3rem] overflow-hidden border border-white/5 cursor-pointer shadow-xl hover:shadow-brand/5 transition-all"
              >
                <img 
                  src={p.image} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-75" 
                  alt={p.title} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end gap-6">
                    <div className="flex-grow">
                      <div className="inline-block px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-[9px] tracking-[3px] mb-4 uppercase">
                        {p.category}
                      </div>
                      <h4 className="text-3xl font-display font-extrabold text-white mb-4 leading-none tracking-tight">{p.title}</h4>
                      <p className="text-gray-300 text-sm font-light max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 mb-2">{p.description}</p>
                      <span className="text-[10px] font-bold text-brand tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75 inline-block">Clique para detalhes do case &rarr;</span>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <div className="text-4xl font-display font-black text-brand mb-3">{p.stats}</div>
                      <div className="bg-brand text-dark rounded-full p-4.5 inline-block group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm font-light mb-8">E mais de 100 outras campanhas e estruturas otimizadas estrategicamente.</p>
            <a 
              href="#contato" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-brand/40 text-brand text-sm font-display font-bold tracking-[2px] hover:bg-brand hover:text-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/10"
            >
              ALCANÇAR ESSES MARCOS COM O MEU NEGÓCIO <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS (PERFORMANCE SECTION) */}
      <section id="performance" className="section-pad bg-dark-soft relative">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-dark/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold text-brand tracking-[6px] mb-4 uppercase">SERVIÇOS DE PERFORMANCE</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6 uppercase">
              O QUE EU FAÇO PELO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">SEU FATURAMENTO.</span>
            </h3>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Soluções integradas com foco agressivo em conversão de leads, automatização de processos de vendas e inteligência operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Zap,
                title: "Tráfego Pago & IA",
                desc: "Anúncios cirúrgicos nas plataformas Meta, Google e TikTok com inteligência aplicada para encontrar o cliente final ideal, reduzindo o custo de aquisição e garantindo o máximo aproveitamento do orçamento."
              },
              {
                step: "02",
                icon: Target,
                title: "Funis de Alta Conversão",
                desc: "Estruturas de captura, landing pages cinemáticas e funis dedicados para focar a atenção do público exatamente na sua oferta, de forma escalável e sem pontas soltas."
              },
              {
                step: "03",
                icon: MessageSquare,
                title: "Vendas via WhatsApp",
                desc: "Roteiros cirúrgicos de prospecção e estruturas de atendimento comercial focados no aplicativo de mensagens. Projetados para quebrar objeções e consolidar pré-agendamentos instantâneos."
              },
              {
                step: "04",
                icon: Laptop,
                title: "Agentes de IA e Chats",
                desc: "Integração de assistentes digitais que conversam diretamente com o cliente, qualificam dados, respondem FAQs e agendam reuniões 24 horas por dia, 7 dias por semana, sem cansar."
              },
              {
                step: "05",
                icon: Clock,
                title: "Automação Operacional",
                desc: "Interação perfeita entre CRMs, planilhas e o seu pipeline comercial. Reduzimos o trabalho manual exaustivo para que sua equipe foque exclusivamente nas etapas fundamentais e decisivas."
              },
              {
                step: "06",
                icon: Shield,
                title: "Consultoria Estratégica",
                desc: "Acompanhamento pessoal e desenvolvimento de metas comerciais. Um olhar maduro e preciso para redefinir o posicionamento de sua marca e impulsionar uma liderança agressiva de mercado."
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="bg-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-brand/20 hover:bg-dark-card/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Background Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand/5 blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand/5 group-hover:bg-brand/15 border border-brand/10 text-brand flex items-center justify-center transition-all duration-300">
                      <service.icon size={26} />
                    </div>
                    <span className="font-display font-medium text-sm text-gray-700 tracking-widest">{service.step}</span>
                  </div>
                  
                  <h4 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand transition-colors">{service.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{service.desc}</p>
                </div>

                <a href="#contato" className="inline-flex items-center gap-2 text-xs font-bold text-brand tracking-[2px] mt-2 group-hover:translate-x-1 transition-transform">
                  CONTRATAR SOLUÇÃO <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STRATEGIST SECTION (O LÍDER POR TRÁS DAS ESTRATÉGIAS) */}
      <section id="estrategista" className="section-pad bg-dark lg:mx-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          
          {/* Confirmed Photo Container */}
          <div className="relative">
            {/* White-background framed portait matching Rodrigo's provided picture requests perfectly */}
            <div 
              className={`aspect-[3/4] bg-white rounded-[4rem] overflow-hidden relative group border transition-all duration-300 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ${dragOver2 ? 'border-brand ring-4 ring-brand/30 ring-inset' : 'border-white/10'}`}
              onDragOver={(e) => { e.preventDefault(); setDragOver2(true); }}
              onDragLeave={() => setDragOver2(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver2(false);
                if (e.dataTransfer.files?.[0]) {
                  handleFileDrop(e.dataTransfer.files[0]);
                }
              }}
            >
              <img 
                src={profileImage} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                alt="Rodrigo Ribeiro Gomes - Estrategista Digital"
                referrerPolicy="no-referrer"
              />

              {/* Drag and Drop visual Overlay */}
              {dragOver2 && (
                <div className="absolute inset-0 bg-dark-soft/95 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-40 border-4 border-brand border-dashed rounded-[4rem] p-6 text-center">
                  <Camera className="text-brand animate-bounce" size={48} />
                  <span className="text-sm font-bold text-white tracking-[2px] uppercase">Solte sua foto aqui</span>
                  <p className="text-xs text-gray-400">Arraste e solte o arquivo da foto para atualizar instantaneamente!</p>
                </div>
              )}
              
              {/* Floating Edit Icon */}
              <label className="absolute top-6 right-6 bg-brand hover:bg-brand-light text-dark p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group/edit z-30">
                <Camera size={16} />
                <span className="max-w-0 overflow-hidden group-hover/edit:max-w-xs transition-all duration-300 text-[9px] font-bold tracking-[2px] uppercase whitespace-nowrap text-dark font-extrabold">ALTERAR FOTO</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden" 
                />
              </label>

              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h4 className="text-4xl font-display font-bold text-white mb-2 underline underline-offset-4 decoration-brand uppercase tracking-tighter">RODRIGO RIBEIRO GOMES</h4>
                <p className="text-brand font-bold text-xs tracking-[5px] uppercase text-shadow-sm">Estrategista Digital & Founder</p>
              </div>
            </div>

            {/* Experience circular badge */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand rounded-full flex flex-col items-center justify-center p-8 shadow-[0_20px_50px_rgba(16,185,129,0.3)] border-8 border-dark z-20">
              <div className="text-5xl font-display font-black text-dark leading-none">10+</div>
              <p className="text-dark text-center font-bold text-[10px] tracking-[2px] leading-tight mt-2 uppercase">
                Anos de<br/>Experiência
              </p>
            </div>
          </div>

          {/* Text and Bio Column */}
          <div className="space-y-8">
            <div className="w-20 h-1 bg-brand" />
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none text-white uppercase tracking-tighter">
              O LÍDER POR TRÁS DAS <span className="opacity-30 italic font-light block">ESTRATÉGIAS.</span>
            </h2>
            
            <div className="relative pl-12 border-l-2 border-brand/20">
              <Quote className="absolute left-4 top-0 text-brand opacity-20 w-8 h-8" />
              <p className="text-xl text-gray-300 italic font-light leading-relaxed">
                "Para colocar as Vendas em Foco, precisamos de processos claros e inteligência aplicada. Traduzo 10 anos de vivência profissional em resultados reais para o seu negócio."
              </p>
            </div>

            <p className="text-gray-400 text-base leading-relaxed font-light">
              Rodrigo Ribeiro Gomes traz a autoridade de quem já vivenciou todas as etapas fundamentais e decisivas no ecossistema comercial. Do analógico ao automatizado, sua metodologia une psicologia de consumo à eficácia implacável dos novos agentes inteligentes, ajudando empresas sólidas a moldar pipelines eficientes de lucros ininterruptos.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Estrategista Digital focado no planejamento estratégico e processos reais de escala.",
                "Especialista em comportamento, psicologia de conversão e psicologia de consumo.",
                "Arquiteto de soluções avançadas integrando tecnologia, CRM, automação e vendas."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span className="text-sm font-medium text-gray-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="#contato" 
                className="inline-flex items-center gap-3 text-sm font-display font-bold text-brand uppercase tracking-[3px] group border-b border-brand/20 pb-2 hover:border-brand transition-colors"
              >
                SAIBA MAIS SOBRE A COMPOSIÇÃO COMERCIAL 
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE METHODOLOGY SECTION */}
      <section id="metodo" className="section-pad bg-dark-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold text-brand tracking-[6px] mb-4 uppercase">METODOLOGIA PILAR</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase">
              COMO TRABALHAMOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">PILARES EM ATUAÇÃO.</span>
            </h3>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Seguimos um pipeline testado para modelar e implantar suas automações comerciais sem fricção.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { num: "01", title: "Diagnóstico Completo", step: "Imersão", desc: "Análise profunda de gargalos operacionais e estrutura comercial do cliente." },
              { num: "02", title: "Arquitetura Prática", step: "Planejamento", desc: "Estruturação sob medida do ecossistema de anúncios e fluxos de IA." },
              { num: "03", title: "Integração & Deploy", step: "Ação", desc: "Criação de criativos, configuração de tráfego pago e automação de chats." },
              { num: "04", title: "Escala Direcionada", step: "Otimização", desc: "Monitoramento diário para refinar o ROI comercial sistematicamente." }
            ].map((m, idx) => (
              <div key={idx} className="bg-dark p-8 rounded-3xl border border-white/5 relative group hover:border-brand/10 transition-all">
                <div className="text-5xl font-display font-black text-brand/10 group-hover:text-brand/20 transition-colors mb-6">{m.num}</div>
                <h4 className="text-xs font-bold text-brand tracking-[2px] uppercase mb-2">{m.step}</h4>
                <h5 className="text-lg font-display font-bold text-white mb-4">{m.title}</h5>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (FORMULARIO REAL COM PERSISTENCIA) */}
      <section id="contato" className="section-pad bg-dark relative">
        <div className="absolute bottom-0 inset-x-0 h-96 bg-brand/[0.02] blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-[10px] font-bold text-brand tracking-[6px] mb-4 uppercase">CONTATO DIRETO</h2>
                <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 uppercase leading-[0.95] tracking-tight">
                  PRONTO PARA COLOCAR SUAS <span className="text-brand">VENDAS EM FOCO?</span>
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Preencha os dados do seu negócio ao lado com honestidade. Eu e minha equipe faremos uma imersão preliminar sem compromisso para trazer insights reais de automação e escala comercial na nossa primeira reunião.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 text-brand rounded-2xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 tracking-[1px] block">WhatsApp Comercial</span>
                    <a href="https://wa.me/5561996239833" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-brand font-medium">(61) 99623-9833</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 text-brand rounded-2xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 tracking-[1px] block">Email Profissional</span>
                    <a href="mailto:rodrigoribeirogomes13@gmail.com" className="text-base text-white hover:text-brand font-medium">rodrigoribeirogomes13@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 text-brand rounded-2xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 tracking-[1px] block">Disponibilidade Ativa</span>
                    <p className="text-base text-white font-medium">TODO BRASIL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-dark-soft p-8 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleFormSubmit} 
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">Seu Nome *</label>
                          <input 
                            type="text" 
                            name="nome" 
                            required
                            placeholder="John Doe"
                            value={contactData.nome}
                            onChange={handleInputChange}
                            className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl px-6 py-4.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">Seu Email *</label>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            placeholder="john@example.com"
                            value={contactData.email}
                            onChange={handleInputChange}
                            className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl px-6 py-4.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">WhatsApp com DDD *</label>
                          <input 
                            type="tel" 
                            name="whatsapp" 
                            required
                            placeholder="(11) 99999-9999"
                            value={contactData.whatsapp}
                            onChange={handleInputChange}
                            className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl px-6 py-4.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">Nome da Empresa</label>
                          <input 
                            type="text" 
                            name="empresa" 
                            placeholder="Minha Empreendimento"
                            value={contactData.empresa}
                            onChange={handleInputChange}
                            className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl px-6 py-4.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">Faturamento Mensal Estimado</label>
                        <select 
                          name="faturamento"
                          value={contactData.faturamento}
                          onChange={handleInputChange}
                          className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl px-6 py-4.5 text-sm text-gray-400 outline-none transition-colors"
                        >
                          <option value="">Selecione uma faixa...</option>
                          <option value="ate-10k">Até R$ 10 mil / mês</option>
                          <option value="10k-50k">R$ 10 mil a R$ 50 mil / mês</option>
                          <option value="50k-100k">R$ 50 mil a R$ 100 mil / mês</option>
                          <option value="acima-100k">Acima de R$ 100 mil / mês</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 tracking-[1px] uppercase">Principais Gargalos de Vendas atualmente *</label>
                        <textarea 
                          name="mensagem" 
                          required
                          rows={4}
                          placeholder="Ex: Não consigo leads qualificados diariamente, equipe comercial perde tempo..."
                          value={contactData.mensagem}
                          onChange={handleInputChange}
                          className="w-full bg-dark border border-white/5 focus:border-brand/50 rounded-2xl p-6 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-5 rounded-2xl bg-brand text-dark font-display font-bold tracking-[2px] text-sm hover:bg-brand-light transition-all transform hover:-translate-y-0.5 shadow-xl shadow-brand/10"
                      >
                        SOLICITAR SESSÃO DIAGNÓSTICO
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      className="text-center py-20 space-y-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-20 h-20 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center mx-auto text-brand animate-bounce">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white uppercase">Dados Recebidos com Sucesso!</h4>
                      <p className="text-gray-400 text-sm max-w-sm mx-auto font-light leading-relaxed">
                        Rodrigo Ribeiro Gomes analisará seus gargalos pessoalmente. Entraremos em contato via WhatsApp nas próximas horas.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-dark-soft border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <a 
            href="#sobre" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-dark">
              <Target size={18} />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-[1px] text-white group-hover:text-brand transition-colors duration-200">RODRIGO RIBEIRO GOMES</span>
              <p className="text-[8px] font-bold text-gray-500 tracking-[2px] uppercase">Estrategista Digital</p>
            </div>
          </a>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-gray-500 font-light">&copy; {new Date().getFullYear()} Rodrigo Ribeiro Gomes. Todos os direitos reservados.</p>
            <p className="text-[10px] text-brand uppercase font-bold tracking-[2px]">Foco na Escala Comercial & Automação</p>
          </div>
        </div>
      </footer>

      {/* FLOATING BOT TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button 
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-dark shadow-2xl shadow-brand/30 cursor-pointer relative"
        >
          {chatOpen ? <X size={26} /> : <MessageSquare size={26} />}
          <div className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-ping" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white" />
        </motion.button>
      </div>

      {/* FLOATING CHAT BOX */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-26 right-6 w-[340px] md:w-[380px] h-[480px] bg-dark-soft border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden z-40 flex flex-col justify-between"
          >
            {/* Chat Header */}
            <div className="bg-dark p-6 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/25 text-brand flex items-center justify-center relative">
                <Target size={20} />
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-brand border-2 border-dark" />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white">Rodrigo AI Specialist</h4>
                <p className="text-[9px] text-gray-500 tracking-[1px] uppercase">Online para Orçamentos e Perguntas</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                    m.sender === 'user' 
                    ? 'bg-brand text-dark rounded-tr-none font-medium' 
                    : 'bg-dark border border-white/5 text-gray-300 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-dark border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Pergunte sobre tráfego ou automação..."
                value={userMsg}
                onChange={e => setUserMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendChat()}
                className="flex-grow bg-dark-soft border border-white/5 focus:border-brand/35 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 outline-none"
              />
              <button 
                onClick={handleSendChat}
                className="w-12 h-12 bg-brand hover:bg-brand-light rounded-xl flex items-center justify-center text-dark hover:scale-105 transition-all"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
