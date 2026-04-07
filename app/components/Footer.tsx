import Link from "next/link";

const LOGO_FOOTER_URL = "/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-100 bg-emerald-50 text-sm font-body">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 py-10 sm:py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="Sua Cidade Mais Limpa Logo"
              className="w-8 h-8 opacity-80"
              src={LOGO_FOOTER_URL}
            />
            <span className="font-headline font-bold text-emerald-800 text-base">
              Sua Cidade Mais Limpa
            </span>
          </div>
          <p className="text-emerald-900/60 max-w-xs text-center md:text-left">
            Monitoramento inteligente da coleta seletiva. Um produto TechUrb.
          </p>
          <p className="text-emerald-900/60">
            &copy; 2025 TechUrb. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <Link
              className="text-emerald-900/60 hover:underline hover:text-emerald-800 transition-all"
              href="/termservice"
            >
              Politica de Privacidade
            </Link>
            <Link
              className="text-emerald-900/60 hover:underline hover:text-emerald-800 transition-all"
              href="/termservice"
            >
              Termos de Uso
            </Link>
            <a
              className="font-semibold text-emerald-700 hover:underline transition-all"
              href="mailto:suprimentos@sinaurb.com.br"
            >
              Contato
            </a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
