
import React from 'react';
import {
  CheckIcon,
  StarIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  PixIcon,
  CreditCardIcon,
  BoletoIcon,
  SparklesIcon,
  JuiceGuideIcon,
  CheckCircleIcon,
} from './components/icons';
import TestimonialCard from './components/TestimonialCard';
import FaqItem from './components/FaqItem';
import FloatingCta from './components/FloatingCta';

const CtaButton: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = '', children }) => (
  <a
    href="https://pay.kirvano.com/ae319659-1345-4bb7-9e3d-74db1cf06869"
    target="_blank"
    rel="noopener noreferrer"
    className={`block w-full max-w-lg mx-auto text-center font-bold text-lg md:text-xl p-5 rounded-xl text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 hover:from-amber-400 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 btn-glow ${className}`}
  >
    {children}
  </a>
);

const GlassCard: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${className}`}>
        {children}
    </div>
);


const App: React.FC = () => {
    const whoIsItFor = [
        { icon: <CheckCircleIcon />, text: 'Quer emagrecer de forma definitiva, sem efeito sanfona.' },
        { icon: <CheckCircleIcon />, text: 'Não aguenta mais dietas que te fazem passar fome e sofrer.' },
        { icon: <CheckCircleIcon />, text: 'Busca mais energia e disposição para o dia a dia.' },
        { icon: <CheckCircleIcon />, text: 'Ama comer, mas quer fazer isso de um jeito saudável e prazeroso.' },
        { icon: <CheckCircleIcon />, text: 'Tem pouco tempo e precisa de receitas práticas e rápidas.' },
        { icon: <CheckCircleIcon />, text: 'Quer resgatar sua autoestima e se sentir bem com o próprio corpo.' },
    ];
    
    const benefits = [
        { icon: <CheckIcon />, text: 'Receitas deliciosas que provam que dieta não é sinônimo de comida sem graça.' },
        { icon: <CheckIcon />, text: 'Um plano passo a passo que elimina a dúvida sobre o que comer em cada refeição.' },
        { icon: <CheckIcon />, text: 'Ingredientes fáceis de encontrar e que não vão pesar no seu bolso.' },
        { icon: <CheckIcon />, text: 'A liberdade de comer doces e sobremesas sem sabotar seus resultados.' },
        { icon: <CheckIcon />, text: 'O fim da compulsão alimentar e o resgate de uma relação saudável com a comida.' },
        { icon: <CheckIcon />, text: 'Mais de 500 opções para nunca mais cair na rotina ou enjoar da dieta.'},
    ];

  const testimonials = [
    {
      name: 'Juliana Souza',
      location: 'São Paulo, SP',
      text: 'Eu já tinha tentado de tudo! Perdi 8kg em 2 meses com as receitas e o melhor: sem passar fome. A torta de frango com massa de couve-flor virou a favorita da família. Recuperei minha autoestima!',
      image: 'https://i.pravatar.cc/100?img=47',
    },
    {
      name: 'Marcos Pereira',
      location: 'Belo Horizonte, MG',
      text: 'Sou diabético e achei que nunca mais ia comer bem. Esse eBook foi um divisor de águas. O pão de queijo de frigideira é genial e como sem culpa! Minha glicemia está mais controlada.',
      image: 'https://i.pravatar.cc/100?img=68',
    },
    {
      name: 'Carla Martins',
      location: 'Rio de Janeiro, RJ',
      text: 'Meu ponto fraco sempre foi o doce depois do almoço. As sobremesas desse eBook são divinas e me salvaram! O mousse de maracujá engana qualquer um, nem parece que é saudável. Indico de olhos fechados!',
      image: 'https://i.pravatar.cc/100?img=31',
    },
  ];

  const faqItems = [
    {
      question: 'Como vou receber o eBook?',
      answer: 'O acesso é 100% digital e imediato. Após a confirmação do pagamento, você receberá um e-mail com o link para baixar o eBook e todos os bônus. Pode ler no celular, tablet ou computador.',
    },
    {
      question: 'Sou iniciante na cozinha, vou conseguir fazer?',
      answer: 'Com certeza! As receitas foram pensadas para serem simples e práticas, com um passo a passo claro e direto. Mesmo que você não tenha experiência, vai conseguir preparar pratos incríveis.',
    },
    {
      question: 'Os ingredientes são caros ou difíceis de encontrar?',
      answer: 'De forma alguma! Todas as receitas foram criadas com ingredientes acessíveis que você encontra em qualquer supermercado. O objetivo é ser prático e econômico.',
    },
    {
      question: 'E se eu não gostar?',
      answer: 'Seu risco é zero. Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar do conteúdo, é só pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.',
    },
     {
      question: 'A compra é segura?',
      answer: 'Sim, 100% segura. Usamos uma das maiores e mais seguras plataformas de pagamentos do mundo. Seus dados estão completamente protegidos com tecnologia de ponta.',
    },
  ];

  return (
    <div className="bg-black text-white antialiased overflow-x-hidden">
      <FloatingCta />

      {/* Hero Section */}
      <header className="pt-16 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Emagreça com <span className="text-amber-400 text-glow">Sabor</span>, Sem Abrir Mão do <span className="text-amber-400 text-glow">Prazer</span>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Chega de dietas restritivas. Descubra como <span className="font-bold text-white">500 receitas Low Carb</span> podem te ajudar a queimar gordura, ganhar energia e resgatar sua autoestima, comendo pratos deliciosos todos os dias.
          </p>
          <div className="mt-10 relative max-w-sm mx-auto group">
            <img
              src="https://github.com/Pintomolenga/Landing-page/blob/3c3e026637b7fa94d31f804a1c15ff60d1514361/CapaEbook_903b63c1-374e-40c4-a8e9-42221a8d8fd2.png?raw=true"
              alt="Mockup do eBook 500 Receitas Low Carb"
              className="rounded-lg shadow-2xl shadow-yellow-400/20 transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-12">
            <CtaButton>QUERO EMAGRECER COMENDO BEM</CtaButton>
            <p className="mt-4 text-sm text-gray-400">Compra 100% segura ✓ Acesso imediato ✓ Risco Zero</p>
          </div>
        </div>
      </header>

      {/* "Para quem é" Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-gray-900/30 to-black">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Este eBook é para você que...</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whoIsItFor.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4">
                          <div className="flex-shrink-0 text-amber-400 mt-1">{React.cloneElement(item.icon, { className: 'w-7 h-7' })}</div>
                          <p className="text-lg text-gray-200">{item.text}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold">
                O que você vai <span className="text-amber-400 text-glow">DESCOBRIR</span> neste guia?
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Este não é apenas um livro de receitas, é o seu novo estilo de vida.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index}>
                <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 text-green-400 mt-1">{React.cloneElement(benefit.icon, { className: 'w-7 h-7' })}</div>
                    <p className="text-lg text-gray-200">{benefit.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Animation Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white">Sinta o Sabor da Transformação</h3>
             <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300">Dê uma espiada no material incrível que vai revolucionar suas refeições.</p>
            <div className="mt-10 relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-amber-500/20 border-2 border-amber-500/30">
                <video
                  src="https://github.com/Pintomolenga/Landing-page/blob/3c3e026637b7fa94d31f804a1c15ff60d1514361/Make_this_book_202508072113_rrlgf.mp4?raw=true"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Seu navegador não suporta o vídeo.
                </video>
            </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="compra" className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
           <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-2xl shadow-amber-500/20">
                <h2 className="text-center text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">Acesso Imediato a TUDO ISSO</h2>
                <p className="text-center text-amber-400 font-semibold animate-pulse mt-1">POR UM PREÇO SIMBÓLICO HOJE</p>
                
                <div className="mt-8 space-y-4">
                    <GlassCard className="flex items-center space-x-4">
                       <BookOpenIcon className="w-10 h-10 text-amber-400 flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-white">eBook Principal: 500 Receitas</h4>
                          <p className="text-sm text-gray-300">O guia completo para todas as refeições.</p>
                       </div>
                       <p className="ml-auto font-bold text-green-400 text-right text-sm">VALOR<br/>R$99,90</p>
                    </GlassCard>
                    <GlassCard className="flex items-center space-x-4">
                       <JuiceGuideIcon className="w-10 h-10 text-amber-400 flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-white">BÔNUS #1: Guia de Sucos Detox</h4>
                          <p className="text-sm text-gray-300">Para desinchar e acelerar o metabolismo.</p>
                       </div>
                       <p className="ml-auto font-bold text-green-400 text-right text-sm">VALOR<br/>R$49,90</p>
                    </GlassCard>
                    <GlassCard className="flex items-center space-x-4">
                       <DevicePhoneMobileIcon className="w-10 h-10 text-amber-400 flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-white">BÔNUS #2: Acesso Vitalício</h4>
                          <p className="text-sm text-gray-300">Seu guia para sempre, em qualquer tela.</p>
                       </div>
                       <p className="ml-auto font-bold text-green-400 text-right text-sm">VALOR<br/>INcalculável</p>
                    </GlassCard>
                </div>
                
                <div className="mt-8 text-center bg-black/50 p-6 rounded-2xl">
                    <p className="text-lg text-gray-400">De <span className="line-through">R$149,80</span></p>
                    <p className="text-white text-xl font-semibold">Por Apenas</p>
                    <p className="my-2">
                       <span className="text-5xl md:text-6xl font-bold text-amber-400 text-glow">12x de R$1,99</span>
                    </p>
                    <p className="text-lg text-white font-semibold">ou R$19,90 à vista</p>
                </div>

                <div className="mt-8">
                    <CtaButton>SIM, QUERO ACESSO A TUDO AGORA!</CtaButton>
                </div>
                
                <div className="mt-6 flex justify-center items-center space-x-6 text-gray-400">
                     <PixIcon className="h-6" />
                     <CreditCardIcon className="h-7" />
                     <BoletoIcon className="h-7" />
                </div>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-black to-gray-900/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold">
              Milhares de Vidas <span className="text-amber-400">Transformadas</span>
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Veja o que estão dizendo as pessoas que aceitaram o desafio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 -mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 sm:py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <GlassCard>
                <ShieldCheckIcon className="w-20 h-20 mx-auto text-green-400" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-6">
                    Sua Compra 100% Segura ou Seu Dinheiro de Volta
                </h3>
                <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                  Você tem <strong>7 dias completos</strong> para experimentar tudo. Se não for a melhor decisão que você tomou pela sua saúde este ano, basta um e-mail para receber <strong>100% do seu dinheiro de volta.</strong> Sem burocracia. O risco é todo meu.
                </p>
            </GlassCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold">
              Ainda tem Dúvidas?
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Respostas para as perguntas mais comuns.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <LockClosedIcon className="w-6 h-6 text-gray-400" />
            <p className="font-semibold text-gray-400">Pagamentos 100% Seguros | Ambiente Criptografado</p>
          </div>
          <p className="text-sm">
            Este produto não substitui o parecer profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à saúde. Os resultados podem variar de pessoa para pessoa.
          </p>
          <div className="mt-6 flex justify-center space-x-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
          <p className="text-xs mt-4">&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;