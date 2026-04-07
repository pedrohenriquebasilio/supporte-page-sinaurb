"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_URL = "/logo.png";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTerms = pathname === "/termservice";

  return (
    <header className="fixed top-0 w-full z-50 glass-header bg-white/80 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img
            alt="Sua Cidade Mais Limpa Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            src={LOGO_URL}
          />
          <span className="text-lg sm:text-xl font-extrabold text-emerald-800 tracking-tight font-headline">
            Sua Cidade Mais Limpa
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-headline font-bold text-lg">
          <Link
            href="/"
            className={
              isHome
                ? "text-emerald-700 border-b-2 border-emerald-600 pb-1"
                : "text-emerald-900/70 hover:text-emerald-600 transition-colors"
            }
          >
            Suporte
          </Link>
          <Link
            href="/termservice"
            className={
              isTerms
                ? "text-emerald-700 border-b-2 border-emerald-600 pb-1"
                : "text-emerald-900/70 hover:text-emerald-600 transition-colors"
            }
          >
            Privacidade
          </Link>
        </nav>
      </div>
    </header>
  );
}
