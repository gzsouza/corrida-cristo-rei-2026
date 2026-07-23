# Plan: Implementar site "5ª Corrida de Cristo Rei - Lorena 2026"

Portar fielmente o HTML enviado (890 linhas) para o projeto TanStack Start, respeitando a composição, tipografia (Oswald/Montserrat), paleta (dourado #D4AF37, vinho #1f0508, vermelho #82040f) e todas as seções.

## Estrutura de seções (do HTML)
1. Header/nav fixo
2. Hero com background gradiente vinho + imagem, título grande em Oswald
3. Contagem regressiva / info do evento
4. Seção "Causa" (Correndo por um Propósito Maior)
5. "Modalidades" (Escolha seu Desafio) — cards
6. "Inscrições" (bg vinho) — tabela/preços
7. "Patrocinador"
8. "Local do Evento" (mapa)
9. "Realização e Apoio" (logos)
10. Footer

## Passos

1. **Fontes**: adicionar `<link>` para Google Fonts (Montserrat + Oswald) e Font Awesome em `src/routes/__root.tsx` (head links). Nada de `@import` remoto em CSS.
2. **Tokens de tema** em `src/styles.css`:
   - `@theme` com `--color-king-gold`, `--color-king-dark`, `--color-king-red`, `--color-king-light`
   - `--font-display: "Oswald"`, `--font-sans: "Montserrat"`
   - Utilitários customizados via `@utility` para `.hero-bg`, `.clip-diagonal`, animações `fadeUp`
3. **Home page**: reescrever `src/routes/index.tsx` (substituir placeholder) com toda a marcação convertida de HTML para JSX:
   - `class` → `className`
   - `<i class="fas ...">` mantidos (Font Awesome via CDN)
   - Imagens externas (Unsplash) mantidas como URLs; logos/apoiadores como placeholders `<div>` estilizados se forem `<img>` sem src real
   - Links `href="#..."` para navegação por âncora (página única, conforme HTML original)
4. **Metadata SEO** no `head()` da rota index:
   - title: "5ª Corrida de Cristo Rei - Lorena 2026"
   - description, og:title, og:description, og:type, twitter:card
5. **Scripts inline** do HTML (contagem regressiva, menu mobile toggle, smooth scroll) → converter para `useEffect` ou handlers React equivalentes dentro do componente Index.
6. **Verificação**: rodar Playwright headless em `localhost:8080`, screenshot da home, checar console sem erros.

## Detalhes técnicos

- Manter design single-page (âncoras `#causa`, `#modalidades`, `#inscricao`) — o HTML original já é single-page, então a exceção documentada em `tanstack-route-architecture` se aplica.
- Font Awesome e Google Fonts carregados via `<link>` em `__root.tsx` head (nunca `@import` URL no CSS Tailwind v4).
- Tailwind v4: cores customizadas via `@theme` (gera `bg-king-gold`, `text-king-dark`, etc.) — não criar `tailwind.config.js`.
- Countdown: `useState` + `setInterval` em `useEffect`, data-alvo extraída do HTML original.
- Mobile menu: `useState` boolean.
- Não usar `@apply` fora de `styles.css`; usar utilities direto no JSX.

## Arquivos alterados
- `src/routes/__root.tsx` — adicionar links de fonte/FA no `head()`
- `src/styles.css` — tokens de cor/fonte e utilities `.hero-bg`, `.clip-diagonal`, animações
- `src/routes/index.tsx` — página completa portada
