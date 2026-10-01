import { createFileRoute } from "@tanstack/react-router";
import {
  useEffect,
  useState,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
const logoAsset = { url: "/images/logo-corrida-cristo-rei-2026.png" };
const regulamentoAsset = { url: "/docs/regulamento-corrida-cristo-rei-2026.pdf" };
const igrejaAsset = { url: "/images/igreja-comunidade-lorena.jpg" };
const kidocuraAsset = { url: "/images/logo-kidocura.png" };
const dbnetAsset = { url: "/images/logo-dbnet.png" };
const zaninAsset = { url: "/images/logo-zanin-motors.png" };
const siSerralheriaAsset = { url: "/images/logo-si-serralheria.png" };
const ninniAsset = { url: "/images/logo-ninni-sushi-bar.png" };
const planoMutuoAsset = { url: "/images/logo-plano-mutuo-medc.png" };
const cristoReiAsset = { url: "/images/logo-cristo-rei.png" };
const objetivoLogo = "/images/logo-objetivo-lorena-transparente.png";
const cleofasAsset = { url: "/images/logo-editora-cleofas.png" };
const evelynAsset = { url: "/images/logo-evelyn-moda-fitness.png" };
const padariaPrincesaAsset = { url: "/images/logo-padaria-princesa.png" };
const vilaPastelAsset = { url: "/images/logo-vila-pastel.jpeg" };
const trevoShoppingLogo = "/images/logo-trevo-shopping-ouro.png";
const pinhalAsset = { url: "/images/logo-madereira-pinhal.png" };
const maniaLimpezaAsset = { url: "/images/logo-mania-de-limpeza.png" };
const marcelaAsset = { url: "/images/logo-marcela-ambientes.png" };
const reinoPetAsset = { url: "/images/logo-reino-pet.png" };
const samahaAsset = { url: "/images/logo-samaha.png" };
const valgroupAsset = { url: "/images/logo-valgroup.png" };
const varejaoAsset = { url: "/images/logo-varejao-tintas.png" };
const ibisAsset = { url: "/images/logo-ibis.png" };
const alineCristinaAsset = { url: "/images/logo-aline-cristina-pilates.png" };
const coimbraAsset = { url: "/images/logo-coimbra.png" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "5ª Corrida de Cristo Rei - Lorena 2026" },
      {
        name: "description",
        content: "Participe da 5ª Corrida de Cristo Rei em Lorena-SP no dia 29/11/2026, com provas de 10K, 5K, 3K e Kids.",
      },
      { property: "og:title", content: "5ª Corrida de Cristo Rei - Lorena 2026" },
      {
        property: "og:description",
        content: "Corrida beneficente em Lorena-SP, unindo fé, esporte e solidariedade em prol da Paróquia Cristo Rei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Define se a seção interna "Inscrições" (formulário do site) aparece em qualquer dispositivo.
const SHOW_INSCRICOES = false;

// As inscrições oficiais acontecem na plataforma Portal das Corridas.
const INSCRICAO_URL =
  "https://www.portaldascorridas.com.br/event-details/5-corrida-de-rua-e-caminhada-de-cristo-rei";

// Abre o link numa nova aba: a visualização do Lovable bloqueia a navegação
// feita no mesmo quadro, então a aba é aberta direto pelo navegador.
function openInNewTab(event: ReactMouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
}

const centeredSponsorGrid =
  "grid grid-cols-4 sm:grid-cols-6 [&>*]:col-span-2 [&>*:last-child:nth-child(odd)]:col-start-2 sm:[&>*:last-child:nth-child(odd)]:col-start-auto sm:[&>*:nth-last-child(2):nth-child(3n+1)]:col-start-2";

type PlanId = "promo" | "kids";

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({ d: "00", h: "00", m: "00" });
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [showError, setShowError] = useState(false);
  const [modalidade, setModalidade] = useState("");
  const [modal, setModal] = useState<{ name: string; price: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [partner, setPartner] = useState({ empresa: "", responsavel: "", telefone: "", email: "" });

  const pushDataLayer = (data: Record<string, unknown>) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  };

  const handlePartnerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushDataLayer({
      event: "partner_form_submit",
      form_name: "Quero ser Parceiro",
      empresa: partner.empresa,
      responsavel: partner.responsavel,
      telefone: partner.telefone,
      email: partner.email,
    });
    const subject = encodeURIComponent(`Proposta de Parceria - ${partner.empresa}`);
    const body = encodeURIComponent(
      `Nome da Empresa: ${partner.empresa}\nResponsável: ${partner.responsavel}\nTelefone / WhatsApp: ${partner.telefone}\nE-mail Corporativo: ${partner.email}`
    );
    window.location.href = `mailto:corridacristorei@gmail.com?subject=${subject}&body=${body}`;
    alert("Obrigado pelo interesse! Nossa equipe de marketing entrará em contato em breve.");
  };

  useEffect(() => {
    const eventDate = new Date("November 29, 2026 07:30:00").getTime();
    const tick = () => {
      const gap = eventDate - Date.now();
      if (gap > 0) {
        const day = 1000 * 60 * 60 * 24;
        const hour = 1000 * 60 * 60;
        const minute = 1000 * 60;
        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        setCountdown({
          d: d < 10 ? `0${d}` : String(d),
          h: h < 10 ? `0${h}` : String(h),
          m: m < 10 ? `0${m}` : String(m),
        });
      } else {
        setCountdown({ d: "00", h: "00", m: "00" });
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const plans: Record<PlanId, { price: string; name: string }> = {
    promo: { price: "59.90", name: "Lote Promocional" },
    kids: { price: "45.00", name: "Kids / Caminhada" },
  };

  const selectPlan = (id: PlanId) => {
    setSelectedPlan(id);
    setShowError(false);
  };

  const onModalidadeChange = (v: string) => {
    setModalidade(v);
    if (v === "kids" || v === "walk") selectPlan("kids");
    else if (v === "10k" || v === "5k") selectPlan("promo");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPlan) {
      setShowError(true);
      document.getElementById("card-promo")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const p = plans[selectedPlan];
    setModal({ name: p.name, price: `R$ ${p.price.replace(".", ",")}` });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="font-sans text-stone-800 bg-stone-50 antialiased">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 bg-king-dark/95 backdrop-blur-md text-white transition-all duration-300 border-b border-white/10 ${
          scrolled ? "py-2 shadow-lg" : "py-0 shadow-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-2 md:py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group z-50">
            <img
              src={logoAsset.url}
              alt="Logo 5ª Corrida Cristo Rei"
              className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto max-w-none object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium text-sm xl:text-base">
            <a href="#causa" className="hover:text-king-gold transition-colors">Nossa Causa</a>
            <a href="#sobre" className="hover:text-king-gold transition-colors">A Prova</a>
            <a href="#modalidades" className="hover:text-king-gold transition-colors">Modalidades</a>
            <a
              href={INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openInNewTab}
              className="bg-king-gold text-king-dark px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20 whitespace-nowrap"
            >
              Inscreva-se
            </a>
            <a
              href="#patrocinador"
              className="border border-king-gold text-king-gold px-5 py-2 rounded-full font-bold hover:bg-king-gold hover:text-king-dark transition-all whitespace-nowrap"
            >
              Seja Nosso Patrocinador
            </a>
          </div>

          <button
            className="lg:hidden text-2xl p-2 focus:outline-none focus:text-king-gold transition-colors z-50"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-dvh w-full bg-king-dark/98 z-40 transform transition-transform duration-300 lg:hidden flex flex-col justify-center items-center ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-6 text-center text-lg w-full px-8">
            <a href="#causa" className="hover:text-king-gold py-2 border-b border-white/10" onClick={closeMenu}>Nossa Causa</a>
            <a href="#sobre" className="hover:text-king-gold py-2 border-b border-white/10" onClick={closeMenu}>A Prova</a>
            <a href="#modalidades" className="hover:text-king-gold py-2 border-b border-white/10" onClick={closeMenu}>Modalidades</a>
            <a
              href={INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-king-gold text-king-dark font-bold py-3 rounded-full hover:bg-yellow-400 transition-colors shadow-lg mt-4"
              onClick={(event) => {
                closeMenu();
                openInNewTab(event);
              }}
            >
              Realizar Inscrição
            </a>
            <a
              href="#patrocinador"
              className="border border-king-gold text-king-gold py-3 rounded-full font-bold hover:bg-king-gold hover:text-king-dark transition-colors"
              onClick={closeMenu}
            >
              Seja Nosso Patrocinador
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-bg min-h-[100dvh] flex items-center justify-center text-white relative clip-diagonal pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center pt-20">
          <span className="inline-block bg-king-gold/20 border border-king-gold text-king-gold px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 animate-fade-up backdrop-blur-sm">
            ENCERRAMENTO DA FESTA DE CRISTO REI
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight drop-shadow-lg animate-fade-up leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            5ª Corrida de <br />
            <span className="text-king-gold">Cristo Rei</span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto animate-fade-up px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Correndo com Fé, Chegando com Graça.
          </p>

          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-10 md:mb-12 animate-fade-up px-2" style={{ animationDelay: "0.6s" }}>
            {[
              { l: "Dias", v: countdown.d },
              { l: "Horas", v: countdown.h },
              { l: "Min", v: countdown.m },
            ].map((c) => (
              <div key={c.l} className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-lg min-w-[70px] sm:w-24 border border-white/20">
                <span className="block text-2xl md:text-4xl font-display font-bold text-king-gold">{c.v}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider">{c.l}</span>
              </div>
            ))}
          </div>

          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openInNewTab}
            className="inline-block bg-king-gold text-king-dark text-base md:text-lg font-bold px-8 py-4 rounded-full hover:bg-white hover:text-king-red transition-all transform hover:scale-105 shadow-xl animate-fade-up w-full sm:w-auto max-w-xs"
            style={{ animationDelay: "0.8s" }}
          >
            GARANTIR MINHA VAGA
          </a>

          <p className="mt-6 text-xs md:text-sm opacity-80 animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-2" style={{ animationDelay: "1s" }}>
            <span><i className="fa-solid fa-calendar-day mr-2" /> 29 de Novembro de 2026</span>
            <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
            <span><i className="fa-solid fa-location-dot mr-2" /> Lorena, SP</span>
          </p>
        </div>
      </header>

      {/* Info Bar */}
      <section className="container mx-auto px-4 relative z-20">
        <div className="bg-king-gold py-8 -mt-12 md:-mt-20 mx-auto max-w-6xl rounded-xl shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-king-dark/10">
            {[
              { i: "fa-running", t: "Esporte & Fé", d: "Incentivando a saúde física e espiritual." },
              { i: "fa-hand-holding-heart", t: "100% Beneficente", d: "Todo lucro revertido para as obras da Paróquia." },
              { i: "fa-medal", t: "Premiação", d: "Troféus por categoria e medalha para todos." },
            ].map((c) => (
              <div key={c.t} className="p-4 flex flex-col items-center">
                <i className={`fa-solid ${c.i} text-3xl text-king-dark mb-3`} />
                <h3 className="font-bold text-king-dark text-lg">{c.t}</h3>
                <p className="text-king-dark/80 text-sm max-w-xs">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causa */}
      <section id="causa" className="bg-stone-100 py-16 md:py-24 mt-8 md:mt-0">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="md:w-1/2 relative w-full">
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-king-gold rounded-full opacity-20" />
            <img
              src={igrejaAsset.url}
              alt="Igreja e Comunidade"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-64 sm:h-80 md:h-96"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-king-red rounded-full opacity-20" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="text-king-gold font-bold uppercase tracking-wider mb-2 text-sm md:text-base">Solidariedade e Fé</h4>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-king-dark mb-6 leading-tight">
              Correndo por um Propósito Maior
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm md:text-base">
              A 5ª Corrida de Cristo Rei não é apenas um evento esportivo, mas um ato de comunhão. Todo o valor arrecadado com as inscrições será destinado à troca do telhado da Paróquia Cristo Rei de Lorena.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed text-sm md:text-base">
              Ao participar, você cuida da sua saúde, celebra o encerramento das nossas festividades e ajuda diretamente nossa comunidade a continuar seus trabalhos de evangelização.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-king-gold text-left max-w-md">
                <p className="text-sm font-bold text-king-dark italic">"Combati o bom combate, acabei a carreira, guardei a fé."</p>
                <p className="text-xs text-stone-500 mt-1">- 2 Timóteo 4:7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section id="modalidades" className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-king-red font-display text-3xl md:text-4xl font-bold uppercase mb-4">Escolha seu Desafio</h2>
          <div className="w-20 md:w-24 h-1 bg-king-gold mx-auto rounded" />
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto text-sm md:text-base px-2">
            Temos categorias para todas as idades e níveis de condicionamento. Venha participar desta festa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "KIDS", icon: "fa-child",
              headerBg: "bg-yellow-400", headerText: "text-king-dark", iconTint: "text-black/10",
              border: "border-yellow-400",
              items: ["Distâncias por Idade", "Recreação no Local", "Kit Camiseta, Medalha, Terço e Brindes"],
              time: "Início Previsto: 08:00h*", note: "O horário da largada da Corrida Kids poderá ser alterada ao longo do evento.",
            },
            {
              title: "3 KM", icon: "fa-person-walking",
              headerBg: "bg-stone-600", headerText: "text-white", iconTint: "text-white/10",
              border: "border-stone-500",
              items: ["Participativo (Sem Chip)", "Ideal para Famílias", "Kit Camiseta, Medalha, Terço e Brindes"],
              time: "Largada: 07:00h", note: "",
            },
            {
              title: "5 KM", icon: "fa-stopwatch",
              headerBg: "bg-king-red/90", headerText: "text-white", iconTint: "text-white/10",
              border: "border-king-red",
              items: ["Chip de Cronometragem", "Hidratação no percurso", "Kit Camiseta, Medalha, Terço e Brindes"],
              time: "Largada: 07:00h", note: "",
            },
            {
              title: "10 KM", icon: "fa-road",
              headerBg: "bg-king-red", headerText: "text-white", iconTint: "text-white/10",
              border: "border-king-red",
              items: ["Chip de Cronometragem", "Hidratação no percurso", "Kit Camiseta, Medalha, Terço e Brindes"],
              time: "Largada: 07:00h", note: "",
            },
          ].map((m) => (
            <div key={m.title} className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all border-b-4 ${m.border} flex flex-col`}>
              <div className={`${m.headerBg} p-6 min-h-[104px] md:min-h-[124px] flex items-center justify-center text-center ${m.headerText} relative overflow-hidden`}>
                <i className={`fa-solid ${m.icon} absolute -right-4 -top-4 text-7xl md:text-8xl ${m.iconTint} group-hover:scale-110 transition-transform`} />
                <h3 className="relative text-2xl md:text-3xl font-display font-bold">{m.title}</h3>
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <ul className="text-sm text-stone-600 space-y-3 mb-6 text-left pl-4">
                  {m.items.map((it) => (
                    <li key={it}><i className="fa-solid fa-check text-green-500 mr-2" />{it}</li>
                  ))}
                </ul>
                <span className="block text-xl md:text-2xl font-bold text-king-dark mt-auto pt-4 border-t border-stone-100">{m.time}</span>{m.note ? <p className="mt-2 text-[11px] leading-snug text-stone-500">{m.note}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inscrição — seção oculta em todos os dispositivos */}
      {SHOW_INSCRICOES && (
      <section id="inscricao" className="py-16 md:py-20 bg-king-dark text-white relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">Inscrições</h2>
            <p className="text-stone-300 text-sm md:text-base">Garanta seu kit com preço promocional de lançamento.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white text-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-stone-100 p-6 md:p-8 border-b md:border-b-0 md:border-r border-stone-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-6 text-king-red flex items-center gap-2">
                  <i className="fa-solid fa-tag" /> Selecione o Valor
                </h3>
                <div className="space-y-4">
                  {/* Promo */}
                  <div
                    id="card-promo"
                    onClick={() => selectPlan("promo")}
                    className={`bg-white p-4 rounded-lg shadow-sm border border-stone-200 relative overflow-hidden ring-2 ${
                      selectedPlan === "promo" ? "ring-king-red bg-red-50" : "ring-transparent hover:ring-king-gold/50"
                    } cursor-pointer transition-all group`}
                  >
                    <div className="absolute top-0 right-0 bg-king-gold text-[10px] font-bold px-2 py-1 text-king-dark">ATUAL</div>
                    {selectedPlan === "promo" && (
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-king-red text-2xl">
                        <i className="fa-solid fa-circle-check" />
                      </div>
                    )}
                    <p className="text-xs text-stone-500 uppercase font-bold group-hover:text-king-red transition-colors">Lote Promocional</p>
                    <p className="text-2xl font-bold text-king-dark group-hover:text-king-red transition-colors">R$ 59,90</p>
                    <p className="text-[10px] text-stone-400">Até 30/06/2026</p>
                  </div>

                  {/* 1º Lote inativo */}
                  <div className="opacity-50 grayscale p-4 rounded-lg border border-stone-200 border-dashed bg-stone-50 cursor-not-allowed select-none">
                    <p className="text-xs text-stone-500 uppercase font-bold">1º Lote</p>
                    <p className="text-xl font-bold text-king-dark">R$ 79,90</p>
                    <p className="text-[10px] text-stone-400">Em breve</p>
                  </div>

                  {/* Kids */}
                  <div
                    id="card-kids"
                    onClick={() => selectPlan("kids")}
                    className={`bg-white p-4 rounded-lg shadow-sm border border-stone-200 relative overflow-hidden ring-2 ${
                      selectedPlan === "kids" ? "ring-king-red bg-red-50" : "ring-transparent hover:ring-king-gold/50"
                    } cursor-pointer transition-all group`}
                  >
                    <div className="absolute top-0 right-0 bg-stone-200 text-[10px] font-bold px-2 py-1 text-stone-600">FIXO</div>
                    {selectedPlan === "kids" && (
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-king-red text-2xl">
                        <i className="fa-solid fa-circle-check" />
                      </div>
                    )}
                    <p className="text-xs text-stone-500 uppercase font-bold group-hover:text-king-red transition-colors">Kids / Caminhada</p>
                    <p className="text-xl font-bold text-king-dark group-hover:text-king-red transition-colors">R$ 45,00</p>
                    <p className="text-[10px] text-stone-400">Valor único</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 text-center">Idosos (60+) têm 50% de desconto conforme lei.</p>
                {showError && (
                  <p className="text-xs text-red-600 font-bold text-center mt-2">
                    <i className="fa-solid fa-triangle-exclamation mr-1" /> Selecione um valor acima
                  </p>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="md:w-2/3 p-6 md:p-8">
              <h3 className="font-bold text-xl md:text-2xl mb-6 text-king-dark">Ficha de Pré-Inscrição</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Nome Completo</label>
                    <input type="text" required className="w-full px-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Data de Nasc.</label>
                    <input type="date" required className="w-full px-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">E-mail</label>
                    <input type="email" required className="w-full px-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Telefone / WhatsApp</label>
                    <input type="tel" required placeholder="(XX) 9XXXX-XXXX" className="w-full px-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">Equipe / Assessoria</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-users text-stone-400 text-xs" />
                    </div>
                    <input type="text" placeholder="Nome da equipe (opcional)" className="w-full pl-10 pr-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">Modalidade</label>
                  <div className="relative">
                    <select
                      required
                      value={modalidade}
                      onChange={(e) => onModalidadeChange(e.target.value)}
                      className="w-full px-4 py-3 md:py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition bg-white appearance-none text-sm"
                    >
                      <option value="" disabled>Selecione sua prova</option>
                      <option value="10k">Corrida 10KM</option>
                      <option value="5k">Corrida 5KM</option>
                      <option value="walk">Caminhada 3KM</option>
                      <option value="kids">Corrida Kids</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
                      <i className="fa-solid fa-chevron-down text-xs" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-king-gold text-king-dark font-bold py-4 md:py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg flex items-center justify-center gap-2 transform active:scale-95 duration-150"
                  >
                    <span>AVANÇAR PARA PAGAMENTO</span>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                  <p className="text-[10px] md:text-xs text-center text-stone-400 mt-3 flex items-center justify-center gap-1">
                    <i className="fa-solid fa-lock" /> Ambiente seguro. Pagamento na próxima etapa.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Patrocinador */}
      <section id="patrocinador" className="py-16 md:py-20 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-king-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-king-red/5 rounded-full blur-3xl -ml-16 -mb-16" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-king-red font-bold tracking-wider text-xs md:text-sm uppercase mb-2 block">Oportunidade de Parceria</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-king-dark mb-6 leading-tight">
                Associe sua marca à <span className="text-king-gold">Força do Esporte</span>
              </h2>
              <p className="text-stone-600 text-base md:text-lg mb-6 leading-relaxed">
                A 5ª Corrida de Cristo Rei reunirá mais de 300 atletas, famílias e membros da comunidade em um dia de celebração.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed text-sm md:text-base">
                Ao apoiar nosso evento, sua marca conquista visibilidade estratégica em camisetas, mídias sociais, banners, stands, medalhas, troféus e brindes no kit do atleta, com benefícios exclusivos proporcionais a cada cota de patrocínio. Uma oportunidade única de associar sua empresa ao esporte e às obras sociais da Paróquia.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-stone-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-king-dark">Quero ser Parceiro</h3>
                  <p className="text-xs md:text-sm text-stone-500">Preencha e entraremos em contato com as cotas disponíveis.</p>
                </div>
                <form className="space-y-4" onSubmit={handlePartnerSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Nome da Empresa</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-building text-stone-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Sua Empresa Ltda"
                        required
                        value={partner.empresa}
                        onChange={(e) => setPartner({ ...partner, empresa: e.target.value })}
                        onBlur={() => partner.empresa && pushDataLayer({ event: "partner_field", field: "nome_empresa", value: partner.empresa })}
                        className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition bg-stone-50 focus:bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Responsável</label>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        required
                        value={partner.responsavel}
                        onChange={(e) => setPartner({ ...partner, responsavel: e.target.value })}
                        onBlur={() => partner.responsavel && pushDataLayer({ event: "partner_field", field: "responsavel", value: partner.responsavel })}
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition bg-stone-50 focus:bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(XX) 99999-9999"
                        required
                        value={partner.telefone}
                        onChange={(e) => setPartner({ ...partner, telefone: e.target.value })}
                        onBlur={() => partner.telefone && pushDataLayer({ event: "partner_field", field: "telefone", value: partner.telefone })}
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition bg-stone-50 focus:bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      placeholder="contato@suaempresa.com"
                      required
                      value={partner.email}
                      onChange={(e) => setPartner({ ...partner, email: e.target.value })}
                      onBlur={() => partner.email && pushDataLayer({ event: "partner_field", field: "email", value: partner.email })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-king-red focus:border-transparent outline-none transition bg-stone-50 focus:bg-white text-sm"
                    />
                  </div>
                  <button type="submit" className="w-full bg-king-gold text-king-dark font-bold py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-[1.02] shadow-lg mt-2 text-sm md:text-base">
                    SOLICITAR PROPOSTA COMERCIAL
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-king-dark mb-8">Local do Evento</h2>
          <div className="bg-stone-100 p-6 md:p-8 rounded-xl max-w-3xl mx-auto border border-stone-200 shadow-sm">
            <i className="fa-solid fa-map-location-dot text-3xl md:text-4xl text-king-red mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Largada e Chegada</h3>
            <p className="text-base md:text-lg text-stone-700 font-medium">Paróquia Cristo Rei</p>
            <a
              href="https://maps.app.goo.gl/vtxZFC1wAgcNdQ9L9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={openInNewTab}
              className="inline-block text-stone-600 mb-6 text-sm md:text-base hover:text-king-red hover:underline transition-colors group"
            >
              R. Joaquim Cardoso Machado, 201 - Vila Geny
              <br />
              Lorena - SP, 12604-110
              <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1 opacity-70 group-hover:opacity-100" />
            </a>
            <div className="block">
              <div className="inline-block bg-white px-6 py-3 rounded-full border border-stone-200 text-xs md:text-sm text-stone-500">
                <i className="fa-solid fa-route mr-2 text-king-gold" /> O percurso passará pelas principais avenidas do bairro.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realização e Apoio */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-king-dark mb-2 uppercase">Realização e Apoio</h2>
          <div className="w-16 h-1 bg-king-gold mx-auto rounded mb-12" />

          {/* Premium */}
          <div className="mb-16">
            <h3 className="text-king-gold font-display font-bold text-xl md:text-2xl mb-8 uppercase tracking-widest flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-king-gold/30" /> Patrocínio Premium <span className="h-px w-8 bg-king-gold/30" />
            </h3>
            <div className="flex justify-center">
              <div className="w-[333px] h-[208px] max-w-[calc(100vw-2rem)] md:w-[416px] md:h-[250px] bg-white rounded-xl shadow-md shadow-stone-200/70 ring-1 ring-stone-100 flex items-center justify-center p-8 md:p-[42px] transition-all duration-300 transform hover:scale-105">
                <img src={kidocuraAsset.url} alt="Patrocinador Premium - Kidoçura" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Diamante */}
          <div className="mb-16">
            <h3 className="text-cyan-600 font-display font-bold text-lg md:text-xl mb-6 uppercase tracking-wider">Patrocínio Diamante</h3>
            <div className={`${centeredSponsorGrid} gap-4 md:gap-6 max-w-4xl mx-auto`}>
              {[
                { src: zaninAsset.url, alt: "Patrocinador Diamante - Zanin Motors" },
                { src: planoMutuoAsset.url, alt: "Patrocinador Diamante - Plano Mútuo MEDC Funerária Central" },
                { src: dbnetAsset.url, alt: "Patrocinador Diamante - DBNet Internet Fibra" },
                { src: siSerralheriaAsset.url, alt: "Patrocinador Diamante - S.I. Serralheria" },
                { src: ninniAsset.url, alt: "Patrocinador Diamante - Ninni Sushi Bar", imgClass: "max-w-[84%] max-h-[84%]" },
              ].map(({ imgClass = "max-w-full max-h-full", ...logo }) => (
                <div key={logo.alt} className="h-28 md:h-36 bg-white shadow-md shadow-stone-200/70 ring-1 ring-stone-100 rounded-xl flex items-center justify-center p-4 md:p-6 transition-all duration-300 transform hover:scale-105">
                  <img src={logo.src} alt={logo.alt} className={`${imgClass} w-auto h-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>

          {/* Ouro */}
          <div className="mb-14">
            <h3 className="text-yellow-600 font-display font-bold text-lg md:text-xl mb-6 uppercase tracking-wider">Patrocínio Ouro</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
              {[
                { src: trevoShoppingLogo, alt: "Patrocinador Ouro - Trevo Shopping da Construção", imgClass: "max-w-[88%] max-h-[78%]" },
                { src: evelynAsset.url, alt: "Patrocinador Ouro - Evelyn Moda Fitness", imgClass: "max-w-[76%] max-h-[94%] [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges] contrast-[1.04] brightness-[1.01]" },
                { src: padariaPrincesaAsset.url, alt: "Patrocinador Ouro - Padaria Princesa", imgClass: "max-w-[78%] max-h-[96%]" },
                { src: vilaPastelAsset.url, alt: "Patrocinador Ouro - Vila Pastel", imgClass: "max-w-[88%] max-h-[70%]" },
              ].map((logo) => (
                <div key={logo.alt} className="h-24 sm:h-26 md:h-28 bg-white shadow-sm shadow-stone-200/70 ring-1 ring-stone-100 rounded-lg flex items-center justify-center p-3 sm:p-4 transition-transform duration-300 hover:scale-[1.03]">
                  <img src={logo.src} alt={logo.alt} className={`${logo.imgClass} w-auto h-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>

          {/* Prata */}
          <div className="mb-12">
            <h3 className="text-stone-400 font-display font-bold text-base md:text-lg mb-6 uppercase tracking-wider">Patrocínio Prata</h3>
            <div className={`${centeredSponsorGrid} gap-3 sm:gap-4 max-w-3xl mx-auto`}>
              {[
                { src: objetivoLogo, alt: "Patrocinador Prata - Objetivo Lorena", imgClass: "max-w-[92%] max-h-[58%]" },
                { src: marcelaAsset.url, alt: "Patrocinador Prata - Marcela Ambientes Planejados", imgClass: "max-w-[92%] max-h-[62%]" },
                { src: cleofasAsset.url, alt: "Patrocinador Prata - Editora Cléofas", imgClass: "max-w-[86%] max-h-[74%]" },
                { src: pinhalAsset.url, alt: "Patrocinador Prata - Madeireira Pinhal", imgClass: "max-w-[74%] max-h-[92%]" },
                { src: varejaoAsset.url, alt: "Patrocinador Prata - Varejão Tintas", imgClass: "max-w-[94%] max-h-[56%]" },
                { src: valgroupAsset.url, alt: "Patrocinador Prata - Valgroup", imgClass: "max-w-[90%] max-h-[58%]" },
                { src: maniaLimpezaAsset.url, alt: "Patrocinador Prata - Mania de Limpeza", imgClass: "max-w-[80%] max-h-[88%]" },
                { src: samahaAsset.url, alt: "Patrocinador Prata - Samaha Store", imgClass: "max-w-[90%] max-h-[64%]" },
                { src: reinoPetAsset.url, alt: "Patrocinador Prata - Reino Pet", imgClass: "max-w-[88%] max-h-[62%]" },
                { src: ibisAsset.url, alt: "Patrocinador Prata - Ibis Budget", imgClass: "max-w-[78%] max-h-[84%] scale-[1.15]" },
                { src: alineCristinaAsset.url, alt: "Patrocinador Prata - Aline Cristina Pilates", imgClass: "max-w-[88%] max-h-[88%] scale-[1.15]" },
              ].map((logo) => (
                <div key={logo.alt} className="h-24 sm:h-26 md:h-28 bg-white shadow-sm shadow-stone-200/70 ring-1 ring-stone-100 rounded-lg flex items-center justify-center p-3 sm:p-4 transition-transform duration-300 hover:scale-[1.03]">
                  <img src={logo.src} alt={logo.alt} className={`${logo.imgClass} w-auto h-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>

          {/* Bronze */}
          <div className="mb-12">
            <h3 className="text-orange-800/60 font-display font-bold text-sm md:text-base mb-6 uppercase tracking-wider">Patrocínio Bronze</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-16 md:w-28 md:h-20 bg-transparent flex items-center justify-center p-2 opacity-60 hover:opacity-100 transition-all">
                  <img src="https://via.placeholder.com/100x50?text=LOGO" alt="Bronze" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>

          {/* Realização e apoio institucional */}
          <div className="mt-16 border-t border-stone-200/50 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <h3 className="text-king-dark font-display font-bold text-sm md:text-base mb-6 uppercase tracking-wider">Realização</h3>
                <div className="w-full max-w-[400px] h-28 md:h-36 bg-white shadow-md shadow-stone-200/70 ring-1 ring-stone-100 rounded-xl flex items-center justify-center p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                  <img src={cristoReiAsset.url} alt="Realização Paróquia Cristo Rei" className="max-w-full max-h-full w-auto h-auto object-contain scale-[1.3]" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-stone-500 font-display font-bold text-sm md:text-base mb-6 uppercase tracking-wider">Apoio Institucional</h3>
                <div className="w-full max-w-[400px] h-28 md:h-36 bg-white shadow-md shadow-stone-200/70 ring-1 ring-stone-100 rounded-xl flex items-center justify-center p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                  <img
                    src={coimbraAsset.url}
                    alt="Coimbra - Apoio Institucional"
                    className="max-w-[88%] max-h-[88%] w-auto h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-king-dark text-stone-400 py-12 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="text-sm">Evento oficial da Paróquia Cristo Rei de Lorena-SP. Unindo fé e esporte em prol da comunidade.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={regulamentoAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openInNewTab}
                  className="hover:text-king-gold transition-colors"
                >
                  Regulamento
                </a>
              </li>
              <li><a href="#" className="hover:text-king-gold transition-colors">Retirada de Kits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5512997723895?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openInNewTab}
                  className="flex items-center justify-center md:justify-start hover:text-king-gold transition-colors"
                >
                  <i className="fa-brands fa-whatsapp mr-2" /> (12) 99772-3895
                </a>
              </li>
              <li className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-king-red hover:text-white transition-colors"><i className="fa-brands fa-instagram text-lg" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs text-white/40">
          &copy; 2026 5ª Corrida de Cristo Rei. Todos os direitos reservados.
        </div>
      </footer>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-auto text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-check text-2xl text-green-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-king-dark mb-2">Pré-inscrição Realizada!</h3>
            <p className="text-stone-600 text-sm md:text-base mb-6">
              Plano: <span className="font-bold text-king-red">{modal.name}</span>
              <br />
              Valor: <span className="font-bold text-king-dark">{modal.price}</span>
            </p>
            <p className="text-stone-500 text-xs mb-6">Obrigado por apoiar a Paróquia Cristo Rei. Enviamos os dados de pagamento para o seu e-mail.</p>
            <button onClick={() => setModal(null)} className="w-full bg-king-red text-white font-bold py-3 rounded-lg hover:bg-red-900 transition-colors">
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
