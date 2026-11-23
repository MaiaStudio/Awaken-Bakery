# Awaken Bakery — Official Website

Site oficial da **Awaken Bakery** (`awakenbg.com`) — padaria 100% dedicada Gluten-Free & Celiac Safe em Bowling Green, KY (`300 E Main Ave`).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + Design System CSS customizado (`--beige`, `--pink`, `--blue`, `--dark`, `--awaken-ease`, `--paper-texture`)
- **GSAP 3 + ScrollTrigger** & **Lenis Smooth Scroll**
- **Apfel Grotezk** (fontes locais em `public/fonts/`) + **DM Sans** (`next/font/google`)

## Animações & Interações da Awaken Bakery

- **Lenis + GSAP Ticker Sync**: Rolagem ultrassuave sincronizada com todos os `ScrollTrigger`.
- **Curved SVG Page Transitions (`.pageload` / `.pagehide`)**: Cortina orgânica animada na entrada e na navegação entre páginas.
- **Interactive Crumb Canvas (`CrumbCanvas`)**: Partículas de migalhas com gravidade, rotação e fade-out ao passar o mouse ou clicar nos botões `-` / `+`, `ALLOW YOURSELF` e `Add to Cart`.
- **Bite-Mask Hover (`/bite-mask.svg`)**: Efeito de "mordida" aplicado ao selo flutuante do hero e aos botões circulares de quantidade.
- **Hero Parallax + Border-Radius Scrub**: Fundo em parallax + zoom suave + curvatura dinâmica da borda inferior (`5rem`) no scroll.
- **Adaptive Header**: Alterna automaticamente entre tema claro transparente sobre o hero escuro e barra com textura de papel e logo escuro ao rolar.
- **`.Grow_Anim` Magnetic Letters**: Cada letra dos links de navegação cresce suavemente (`scale(1.22)`) com retorno orgânico.
- **`.Form_Button` Cursor-Tracking Radial Ripple**: O preenchimento circular expande exatamente a partir do ponto de entrada do cursor.
- **Collection Display + Tilted Opposing Marquee**: 3 cards em arco (`border-radius: 500px 500px 4rem 4rem`) sobre 4 faixas diagonais em sentidos opostos.
- **Collections Browser**: Abas com preenchimento líquido + troca de cards com animação GSAP de rotação/inclinação (`rotation: 12 → -12 → 0`) e paginação.
- **Window Image + Curved SVG `<textPath>`**: Arco central com o texto curvo `CELEBRATE WITH CAKE` deslizando ao longo do contorno no scroll.
- **Product Detail Pages (`/products/[slug]`)**: Galeria com transição circular morph, seletor interativo de variantes/preços, ingredientes e recomendações relacionadas.
- **Sticker Slap Footer**: Rodapé interativo com stickers arrastáveis e wordmark `AWAKEN` fundido à borda inferior.
- **Scroll-Scrubbed Vertical Timeline**: Linha do tempo da história da Awaken Bakery em `/our-story` com barra de progresso central e parallax nas fotos.

## Páginas da Awaken Bakery

- `/` — Home (Hero, Editorial Intro, Best Sellers Arch Showcase, Arches Gallery Marquee, Interactive Menu Browser, 5-Star Reviews Marquee, Celebrate With Cake Window CTA, Newsletter & Sticker Footer)
- `/menu` — Cardápio completo Gluten-Free + filtros dietéticos (`Dairy Free`, `Vegan`, `Ships US`)
- `/products/[slug]` — Páginas de detalhes individuais para todos os 46 produtos do catálogo
- `/cakes` — Cakes & Custom Orders (Whole Cakes, Cupcakes, Wedding & Corporate guide)
- `/our-story` — História da fundadora Tiana Post (2011 → 2024) com Timeline animada + Faith, Family & Purpose
- `/take-and-bake` — Take & Bake Instructions + Bread Care Storage & Reheating
- `/holiday` — Holiday Sales (Thanksgiving & Christmas) + The Awaken Bakery App (10% off & Double Points Wednesdays)
- `/contact` — Formulário split 60/40, horários, estacionamento gratuito e visita em 300 E Main Ave
- `/faq` — FAQs pesquisáveis (Celiac Safety, Allergens, Ordering, App) + Refund & Cancellation Policy

## Como Rodar

```bash
cd "Awaken Bakery"
npm install
npm run dev
```
