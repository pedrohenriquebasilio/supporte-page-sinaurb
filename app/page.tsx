import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8GoL23DhCpIsnMgE0Rb1i1U2ZzMg17NmDTTtLTOn0gkhvJ6o7dP0hVeWBcFPfQHoyH-Sd_HyIDLlbZGtLUN6Gb2qlKUwRxpHnQkwZ20r2vHisDZVpLmGw-ILbxWPECtkF_WFdD35hrSJMlb8wLLw23KWg5BGq9__I7RtDtdw0UTx8YRWAUWDzmujpUSBrVWLnsXRbBroB_5Dc926okRUswweiA9jQv-UpCWPwF-S5FaRe0DFxyGnLvsfVNYhXBnkGsyStPV8j7Y";

const FAQ_ITEMS = [
  {
    num: "01",
    q: "Como funciona o rastreamento dos caminhoes?",
    a: "O app usa GPS em tempo real para monitorar os caminhoes de coleta seletiva da sua cidade. Voce ve no mapa a posicao atual e o horario estimado de passagem na sua rua.",
  },
  {
    num: "02",
    q: "Preciso criar conta?",
    a: "Nao! Basta registrar seu endereco e pronto. Sem cadastro, sem burocracia.",
  },
  {
    num: "03",
    q: "Como ativar os alertas de coleta?",
    a: "Basta cadastrar seu endereco no app e ativar as notificacoes. Voce recebe um aviso quando o caminhao estiver proximo, para nao perder a coleta.",
  },
  {
    num: "04",
    q: "O app e gratuito?",
    a: "Sim, o aplicativo e totalmente gratuito para os cidadaos. O servico e oferecido em parceria com as prefeituras das cidades participantes.",
  },
  {
    num: "05",
    q: "Minha cidade participa do programa?",
    a: "O Sua Cidade Mais Limpa esta disponivel nas cidades que contrataram o monitoramento inteligente da TechUrb. Consulte a lista de cidades participantes dentro do app.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Central de Suporte
            </span>
            <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-7xl text-on-surface leading-tight mb-6">
              Coleta inteligente na palma da mao
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              O Sua Cidade Mais Limpa, da TechUrb, monitora em tempo real os
              caminhoes de coleta seletiva da sua cidade. Saiba exatamente quando
              a coleta vai passar perto de voce e receba alertas para nao perder.
            </p>
            <div className="flex gap-4">
              <a
                href="#baixar"
                className="emerald-gradient text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold editorial-shadow hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                Baixar Aplicativo
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden editorial-shadow transform md:rotate-3">
              <img
                alt="Urban Cleanliness"
                className="w-full h-full object-cover"
                src={HERO_IMG}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed-variant">
                    eco
                  </span>
                </div>
                <div>
                  <p className="font-bold text-emerald-900">
                    Coleta Seletiva
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Monitoramento em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Contact & FAQ */}
        <section className="bg-surface-container-low py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Column */}
              <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow">
                  <h2 className="font-headline font-bold text-2xl mb-4">
                    Fale Conosco
                  </h2>
                  <p className="text-on-surface-variant mb-8">
                    Estamos aqui para ajudar. Nosso tempo de resposta e de ate
                    48 horas.
                  </p>
                  <div className="space-y-4">
                    <a
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors group"
                      href="mailto:suprimentos@sinaurb.com.br"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                          E-mail
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors truncate">
                          suprimentos@sinaurb.com.br
                        </p>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors group"
                      href="tel:+553133514703"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                          Telefone
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          (31) 3351-4703
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Legal Quick Access */}
                <div className="bg-primary text-on-primary p-6 sm:p-8 rounded-2xl editorial-shadow">
                  <h3 className="font-headline font-bold text-xl mb-4">
                    Informacoes Legais
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        className="flex items-center justify-between group"
                        href="/termservice"
                      >
                        <span>Politica de Privacidade</span>
                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li className="h-px bg-on-primary/20" />
                    <li>
                      <Link
                        className="flex items-center justify-between group"
                        href="/termservice"
                      >
                        <span>Termos de Uso</span>
                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ Column */}
              <div className="lg:col-span-2 bg-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-2xl editorial-shadow">
                <div className="flex items-center gap-3 mb-8 sm:mb-10">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    help_center
                  </span>
                  <h2 className="font-headline font-bold text-2xl sm:text-3xl tracking-tight">
                    Duvidas Frequentes
                  </h2>
                </div>
                <div className="space-y-8 sm:space-y-10">
                  {FAQ_ITEMS.map((item) => (
                    <div key={item.num} className="group">
                      <div className="flex items-start gap-4">
                        <span className="font-headline font-black text-emerald-100 text-3xl sm:text-4xl leading-none">
                          {item.num}
                        </span>
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="font-bold text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors">
                            {item.q}
                          </h3>
                          <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="baixar" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center scroll-mt-24">
          <div className="bg-emerald-900 rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32" />
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-6xl text-white mb-6 sm:mb-8 relative z-10">
              Nunca mais perca a coleta.
            </h2>
            <p className="text-emerald-100 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto relative z-10">
              Baixe o app, cadastre seu endereco e receba alertas quando o
              caminhao de coleta seletiva estiver chegando.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-emerald-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-emerald-50 transition-colors">
                App Store
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.techurb.suacidademaislimpa&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-emerald-50 transition-colors"
              >
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
