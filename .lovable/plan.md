# Plano: tabela de tamanhos no Kit do Atleta

## Objetivo
Adicionar ao quadro “Kit do Atleta” a mesma interação da referência: o conteúdo normal exibe camiseta, medalha e número de peito; ao clicar em **Tamanhos**, somente a área interna desse quadro troca para a tabela de medidas. O botão **Voltar** restaura o kit.

## Implementação
- Inserir um botão **Tamanhos**, com ícone de camiseta, junto à parte inferior da imagem do kit.
- Criar uma visualização interna de medidas, sem abrir uma janela sobre o restante do site.
- Mostrar uma camiseta dourada, na mesma cor da camiseta oficial já exibida, acompanhada de indicadores visuais de **Altura** e **Largura**.
- Exibir as medidas informadas no anexo:

| Tamanho | Altura | Largura |
|---|---:|---:|
| PP | 61 cm | 44 cm |
| P | 64 cm | 47 cm |
| M | 67 cm | 50 cm |
| G | 70 cm | 53 cm |
| GG | 73 cm | 56 cm |
| XG | 76 cm | 59 cm |

- Adicionar o botão **Voltar** dentro da visualização de medidas.
- Manter o cabeçalho “Kit do Atleta” e o tamanho externo do quadro estáveis durante a troca, evitando saltos na página.
- Preservar a paleta vinho/dourado e garantir leitura confortável em computador, tablet e celular.

## Detalhes técnicos
- Controlar a troca entre “kit” e “tamanhos” com estado local na página.
- Usar os componentes de botão existentes no projeto, caso disponíveis; caso contrário, manter o padrão visual dos controles atuais.
- Criar a representação da camiseta e das marcações com elementos visuais responsivos, sem usar os prints de referência diretamente no site.
- Incluir nomes acessíveis nos botões e foco visível para navegação por teclado.

## Verificação
- Confirmar que **Tamanhos** troca apenas o conteúdo do quadro direito.
- Confirmar que **Voltar** restaura camiseta, medalha e número de peito.
- Conferir todas as seis linhas e medidas exatamente como no anexo.
- Verificar o resultado visual e a ausência de cortes/sobreposições em desktop e mobile.
