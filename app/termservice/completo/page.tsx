import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso Completos - Sua Cidade Mais Limpa",
  description: "Termos de Uso e Politica de Privacidade completos do app Sua Cidade Mais Limpa",
};

export default function TermsFullPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/termservice"
            className="inline-flex items-center gap-1 text-primary font-medium mb-8 hover:underline"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Voltar ao resumo
          </Link>

          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-12">
            Termos de Uso e Politica de Privacidade
          </h1>

          <article className="prose-custom space-y-10 text-on-surface-variant leading-relaxed">
            {/* ACEITACAO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                ACEITACAO DOS TERMOS
              </h2>
              <p>
                Este Termo de Uso constitui um contrato de adesao entre o
                usuario e a empresa SINAURB SERVICOS E EMPREENDIMENTOS LTDA,
                localizada na Avenida Amazonas, 2280, Sala 01 - Barro Preto,
                Belo Horizonte/MG, CEP: 30.180-012.
              </p>
              <p className="mt-3">
                O uso do servico esta condicionado a aceitacao integral destes
                termos e das politicas associadas. O usuario declara que leu,
                compreendeu e concorda com todas as condicoes aqui
                estabelecidas, comprometendo-se a cumpri-las.
              </p>
              <p className="mt-3">
                Ao utilizar o servico, o usuario manifesta concordancia livre,
                expressa e inequivoca com este Termo, ficando legalmente
                vinculado as suas disposicoes.
              </p>
            </section>

            {/* DEFINICOES */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                DEFINICOES
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Codigos maliciosos:</strong> programas ou partes de
                  programas destinados a causar danos, obter dados nao
                  autorizados ou interromper sistemas.
                </li>
                <li>
                  <strong>Internet:</strong> rede global de comunicacao de dados
                  baseada em protocolos publicos.
                </li>
                <li>
                  <strong>Sitios e aplicativos:</strong> plataformas pelas quais
                  o usuario acessa o servico.
                </li>
                <li>
                  <strong>Terceiro:</strong> pessoa ou entidade nao participante
                  direta da relacao contratual.
                </li>
                <li>
                  <strong>Usuario:</strong> pessoa natural que utiliza o servico.
                </li>
              </ul>
            </section>

            {/* ARCABOUCO LEGAL */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                ARCABOUCO LEGAL
              </h2>
              <p>O servico e regido pelas seguintes normas:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  Lei n 13.460/2017 - direitos dos usuarios de servicos publicos
                </li>
                <li>Lei n 13.709/2018 (LGPD) - protecao de dados pessoais</li>
                <li>Decreto n 7.724/2012 - acesso a informacao</li>
              </ul>
            </section>

            {/* DESCRICAO DO SERVICO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                DESCRICAO DO SERVICO
              </h2>
              <p>
                O aplicativo conecta cidadaos ao servico de coleta de lixo
                urbano, utilizando geolocalizacao e rastreamento em tempo real
                para informar horarios de coleta.
              </p>
              <p className="mt-3">Permite:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Acompanhamento da coleta em tempo real</li>
                <li>Consulta por endereco</li>
                <li>Notificacoes configuraveis</li>
                <li>Visualizacao em mapa</li>
              </ul>
              <p className="mt-3">
                Os dados pessoais sao tratados conforme a LGPD, exclusivamente
                para prestacao do servico, sem compartilhamento comercial com
                terceiros.
              </p>
            </section>

            {/* DIREITOS DO USUARIO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                DIREITOS DO USUARIO
              </h2>
              <p>Nos termos da LGPD, o usuario tem direito a:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Confirmacao e acesso aos dados</li>
                <li>Correcao de dados incompletos ou incorretos</li>
                <li>Limitacao ou exclusao de dados inadequados</li>
                <li>Oposicao ao tratamento de dados</li>
                <li>Portabilidade dos dados</li>
                <li>Revisao de decisoes automatizadas</li>
              </ul>
            </section>

            {/* RESPONSABILIDADES DO USUARIO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                RESPONSABILIDADES DO USUARIO
              </h2>
              <p>O usuario se compromete a:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Fornecer dados veridicos</li>
                <li>Manter sigilo de login e senha</li>
                <li>Atualizar suas informacoes</li>
              </ul>
              <p className="mt-4">Tambem e responsavel por:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Danos causados a terceiros ou a plataforma</li>
                <li>Uso indevido do servico</li>
                <li>Violacao de direitos de propriedade intelectual</li>
              </ul>
              <p className="mt-4">E proibido:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Interferir no funcionamento do sistema</li>
                <li>Inserir codigos maliciosos</li>
                <li>Utilizar o servico para fins comerciais indevidos</li>
              </ul>
              <p className="mt-4">A empresa nao se responsabiliza por:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Dispositivos infectados ou comprometidos</li>
                <li>Falhas no equipamento do usuario</li>
                <li>Vulnerabilidades do ambiente do usuario</li>
              </ul>
            </section>

            {/* RESPONSABILIDADES DA EMPRESA */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                RESPONSABILIDADES DA EMPRESA
              </h2>
              <p>A SINAURB compromete-se a:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Proteger os dados pessoais conforme a legislacao</li>
                <li>Informar alteracoes nos termos</li>
                <li>Manter funcionamento adequado da plataforma</li>
              </ul>
              <p className="mt-4">Nao se responsabiliza por:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Danos decorrentes do uso do servico</li>
                <li>
                  Instalacao de softwares maliciosos por navegacao do usuario
                </li>
              </ul>
              <p className="mt-4">Pode:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Restringir acesso em caso de violacao</li>
                <li>Compartilhar dados mediante ordem judicial</li>
                <li>Tomar medidas contra atividades ilegais</li>
              </ul>
              <p className="mt-3">
                O uso do aplicativo e permitido apenas para fins nao comerciais.
              </p>
            </section>

            {/* POLITICA DE PRIVACIDADE */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                POLITICA DE PRIVACIDADE
              </h2>
              <p>
                A Politica de Privacidade integra este Termo e regula o
                tratamento de dados pessoais conforme a legislacao vigente.
              </p>
            </section>

            {/* ALTERACOES */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                ALTERACOES DOS TERMOS
              </h2>
              <p>Os termos podem ser modificados a qualquer momento.</p>
              <p className="mt-2">
                O usuario sera notificado em caso de alteracoes relevantes.
              </p>
              <p className="mt-4 font-medium text-on-surface">
                Ultima atualizacao: 12/09/2025
              </p>
            </section>

            {/* CONTATO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                CONTATO
              </h2>
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Telefone:</strong>{" "}
                  <a
                    href="tel:+553133514703"
                    className="text-blue-600 hover:underline"
                  >
                    (31) 3351-4703
                  </a>
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:suprimentos@sinaurb.com.br"
                    className="text-blue-600 hover:underline"
                  >
                    suprimentos@sinaurb.com.br
                  </a>
                </p>
              </div>
            </section>

            {/* FORO */}
            <section>
              <h2 className="font-headline text-xl font-bold text-on-surface mb-4">
                FORO
              </h2>
              <p>Este Termo e regido pela legislacao brasileira.</p>
              <p className="mt-2">
                Controversias serao resolvidas na Justica Federal do domicilio
                do usuario.
              </p>
              <p className="mt-2">
                O usuario tambem pode recorrer a Autoridade Nacional de Protecao
                de Dados (ANPD).
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
