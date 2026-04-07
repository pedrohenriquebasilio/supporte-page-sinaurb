import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacidade & Termos - Sua Cidade Mais Limpa",
  description:
    "Politica de Privacidade e Termos de Uso do app Sua Cidade Mais Limpa",
};

const CITY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA9FYFpYuYHoSovupip4P27zA4lYby0iopAjU_3eDihjNwvcwKDVvzUsWy2kYh1pbpGNNf83CT09y9YVi4sfHDa1Dy3MuzTF8pUohLX7IcY16CHr939ovcP5tRzLioHX9qjioZ9gjqBhsgHKwMHrRbuo3KmUJDqH44IhCd-ellJBKoSsMuM0Xe5K1eiA2wUQfA65oaCbM8-bcgN4xfxex-peB7ayApo4SGPW_pxYMu5S24FkoMHtS6qngBQwOxfpDQi4WGHO3kgWeo";

const NAV_LINKS = [
  { href: "#servico", label: "O Servico" },
  { href: "#dados", label: "Dados & Privacidade" },
  { href: "#direitos", label: "Seus Direitos" },
  { href: "#seguranca", label: "Seguranca" },
  { href: "#responsabilidades", label: "Responsabilidades" },
  { href: "#contato", label: "Contato" },
];

export default function TermServicePage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row items-end gap-8">
            <div className="flex-1">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                Transparencia &amp; Confianca
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
                Sua privacidade e o nosso{" "}
                <span className="text-primary italic">alicerce</span>.
              </h1>
            </div>
            <div className="hidden md:block w-1/3 pb-4">
              <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-primary-fixed pl-6">
                Entenda como protegemos seus dados enquanto trabalhamos juntos
                para transformar o ambiente urbano.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 space-y-4">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-all"
                    href={link.href}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="text-on-surface-variant font-medium group-hover:text-primary">
                      {link.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 space-y-16 sm:space-y-24">
            {/* Section 1: O Servico */}
            <section className="scroll-mt-32" id="servico">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    phone_android
                  </span>
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
                  O que e o Sua Cidade Mais Limpa
                </h2>
              </div>
              <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 rounded-xl">
                <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed font-light mb-8">
                  O aplicativo conecta cidadaos ao servico de coleta de lixo
                  urbano, utilizando geolocalizacao e rastreamento em tempo real
                  para informar horarios de coleta.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "my_location",
                      text: "Acompanhamento da coleta em tempo real",
                    },
                    {
                      icon: "search",
                      text: "Consulta por endereco",
                    },
                    {
                      icon: "notifications_active",
                      text: "Notificacoes configuraveis",
                    },
                    {
                      icon: "map",
                      text: "Visualizacao em mapa",
                    },
                  ].map((item) => (
                    <div
                      key={item.icon}
                      className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg"
                    >
                      <span className="material-symbols-outlined text-primary">
                        {item.icon}
                      </span>
                      <span className="text-on-surface font-medium text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mt-4">
                Servico prestado pela{" "}
                <strong>
                  SINAURB SERVICOS E EMPREENDIMENTOS LTDA
                </strong>
                , Av. Amazonas, 2280, Sala 01 - Barro Preto, Belo
                Horizonte/MG, CEP 30.180-012.
              </p>
            </section>

            {/* Section 2: Dados & Privacidade */}
            <section className="scroll-mt-32" id="dados">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-8 sm:mb-12">
                Dados &amp; Privacidade
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
                    contact_page
                  </span>
                  <h3 className="font-headline text-xl font-bold mb-4">
                    Informacoes de Contato
                  </h3>
                  <p className="text-on-surface-variant">
                    Nome, e-mail e telefone para autenticacao e retorno sobre o
                    status dos seus relatos urbanos.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
                    location_on
                  </span>
                  <h3 className="font-headline text-xl font-bold mb-4">
                    Geolocalizacao
                  </h3>
                  <p className="text-on-surface-variant">
                    Localizacao precisa do incidente reportado para que as
                    equipes de limpeza possam atuar com precisao.
                  </p>
                </div>
                <div className="md:col-span-2 bg-primary-container text-on-primary-container p-6 sm:p-8 rounded-xl overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="font-headline text-xl font-bold mb-4">
                      Sem compartilhamento comercial
                    </h3>
                    <p className="max-w-xl opacity-90">
                      Seus dados pessoais sao tratados conforme a LGPD,
                      exclusivamente para prestacao do servico.{" "}
                      <strong>
                        Nunca vendemos seus dados para terceiros.
                      </strong>{" "}
                      Compartilhamos apenas com orgaos publicos e parceiros de
                      limpeza urbana responsaveis pela execucao do servico.
                    </p>
                  </div>
                  <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-white/10 text-[200px] hidden sm:block">
                    shield
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3: Seus Direitos (LGPD) */}
            <section className="scroll-mt-32" id="direitos">
              <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
                <div className="flex-1">
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-6">
                    Seus Direitos (LGPD)
                  </h2>
                  <p className="text-on-surface-variant mb-6">
                    Nos termos da Lei n 13.709/2018, voce tem direito a:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Confirmacao e acesso aos seus dados",
                      "Correcao de dados incompletos ou incorretos",
                      "Limitacao ou exclusao de dados inadequados",
                      "Oposicao ao tratamento de dados",
                      "Portabilidade dos dados",
                      "Revisao de decisoes automatizadas",
                    ].map((right) => (
                      <div
                        key={right}
                        className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                      >
                        <span className="material-symbols-outlined text-primary shrink-0">
                          check_circle
                        </span>
                        <span className="font-medium text-on-surface">
                          {right}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/3 h-48 sm:h-64 rounded-xl overflow-hidden shadow-xl shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Ambiente urbano limpo"
                    src={CITY_IMG}
                  />
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mt-6">
                Voce tambem pode recorrer a Autoridade Nacional de Protecao de
                Dados (ANPD) caso entenda que seus direitos nao foram
                atendidos.
              </p>
            </section>

            {/* Section 4: Seguranca */}
            <section
              className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
              id="seguranca"
            >
              <div>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-6">
                  Seguranca de Ponta
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Utilizamos criptografia SSL/TLS em todas as comunicacoes e
                  armazenamos dados em servidores de alta seguranca. O acesso as
                  suas informacoes pessoais e restrito a funcionarios autorizados.
                </p>
                <div className="p-6 border-l-4 border-tertiary bg-tertiary/5 rounded-r-lg mb-6">
                  <p className="text-sm font-medium text-on-tertiary-fixed-variant">
                    Monitoramos nosso sistema 24/7 contra tentativas de intrusao
                    e vulnerabilidades.
                  </p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="text-sm text-on-surface-variant">
                    <strong>Arcabouco legal:</strong> Lei n 13.460/2017, Lei n
                    13.709/2018 (LGPD), Decreto n 7.724/2012.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary-fixed blur-3xl opacity-20" />
                  <span
                    className="material-symbols-outlined text-primary text-[80px] sm:text-[120px] relative z-10"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
              </div>
            </section>

            {/* Section 5: Responsabilidades */}
            <section className="scroll-mt-32" id="responsabilidades">
              <div className="bg-surface-container-high p-6 sm:p-8 md:p-12 rounded-2xl">
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-8">
                  Responsabilidades
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        person
                      </span>
                      Do usuario
                    </h3>
                    <ul className="space-y-3 text-on-surface-variant">
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Fornecer dados veridicos
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Manter sigilo de login e senha
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Atualizar suas informacoes
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Nao inserir codigos maliciosos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        business
                      </span>
                      Da SINAURB
                    </h3>
                    <ul className="space-y-3 text-on-surface-variant">
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Proteger dados conforme a legislacao
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Informar alteracoes nos termos
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Manter funcionamento da plataforma
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">&#8226;</span>
                        Restringir acesso em caso de violacao
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant mt-4">
                Ultima atualizacao dos termos: 12/09/2025. Os termos podem ser
                modificados a qualquer momento e o usuario sera notificado.
              </p>
            </section>

            {/* Full terms link */}
            <section className="scroll-mt-32">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/20 text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  description
                </span>
                <p className="text-on-surface-variant mb-4">
                  O resumo acima destaca os pontos principais. Para consultar o
                  documento na integra:
                </p>
                <Link
                  href="/termservice/completo"
                  className="text-blue-600 hover:text-blue-800 font-bold text-lg underline underline-offset-4 transition-colors"
                >
                  Ler Termos de Uso e Politica de Privacidade completos
                </Link>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="scroll-mt-32" id="contato">
              <div className="emerald-gradient p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-on-primary text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6">
                  Duvidas sobre sua privacidade?
                </h2>
                <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
                  Nossa equipe de protecao de dados esta pronta para ajudar voce
                  a entender melhor seus direitos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-headline font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 active:scale-95 transition-all"
                    href="mailto:suprimentos@sinaurb.com.br"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    suprimentos@sinaurb.com.br
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-headline font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 active:scale-95 transition-all"
                    href="tel:+553133514703"
                  >
                    <span className="material-symbols-outlined">call</span>
                    (31) 3351-4703
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
