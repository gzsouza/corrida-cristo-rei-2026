# Ajuste responsivo da página

## Objetivo
Aprimorar a experiência da página nos principais tamanhos de tela sem alterar textos, links, imagens, identidade vinho/dourado ou regras já definidas para patrocinadores e botão flutuante.

## Implementação

1. **Base responsiva e navegação**
   - Revisar larguras máximas, margens laterais e espaçamentos verticais para evitar conteúdo apertado ou excessivamente espalhado.
   - Ajustar o cabeçalho para manter logo, menu e botões estáveis; conservar o menu móvel abaixo do desktop.
   - Garantir áreas de toque confortáveis, foco visível e rolagem correta ao acessar seções pelo menu fixo.

2. **Capa e blocos principais**
   - Adaptar altura, respiros, título, contador e chamada de inscrição para celulares compactos, celulares maiores, tablets e telas largas.
   - Evitar cortes em telas baixas ou em orientação horizontal.
   - Refinar os blocos de propósito, modalidades e local para leitura consistente e cartões com alturas equilibradas quando estiverem na mesma linha.

3. **Entrega de kits e kit do atleta**
   - Manter os quadros empilhados em celular/tablet e lado a lado no desktop.
   - Ajustar mapa, Instagram, imagem do kit e tabela de camisetas para proporções estáveis, sem rolagem lateral ou texto comprimido.
   - Preservar a ordem atual: informações antes do mapa e Instagram antes do kit.

4. **Patrocinadores e rodapé**
   - Preservar a hierarquia visual entre Premium, Diamante, Ouro, Prata e Bronze.
   - Manter linhas incompletas centralizadas e a grade Bronze com quatro espaços por linha quando houver largura suficiente.
   - Ajustar dimensões e espaçamentos dos cards para telas estreitas sem cortar ou deformar logos.
   - Reorganizar o rodapé para leitura e toque confortáveis em celular, tablet e desktop.

5. **Comportamento e acessibilidade**
   - Manter o botão flutuante exclusivo do desktop, após 300 px, e oculto sobre áreas protegidas.
   - Respeitar preferência por movimento reduzido nas animações e transições.
   - Eliminar qualquer sobreposição, corte de texto, overflow horizontal ou mudança inesperada de layout.

## Faixas de validação
- Celular compacto: 320–375 px
- Celular padrão/grande: 390–430 px
- Tablet vertical e horizontal: 768–1024 px
- Notebook: 1280–1366 px
- Desktop amplo: 1440–1920 px

## Verificação final
- Conferir visualmente a página completa nos tamanhos acima, incluindo menu, links externos, botão “Tamanhos”, mapa, Instagram, grades de patrocinadores e botão flutuante.
- Validar que não há erros de execução, imagens quebradas, rolagem horizontal ou regressões na compilação.
