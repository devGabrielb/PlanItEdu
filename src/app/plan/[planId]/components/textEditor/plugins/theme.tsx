const Theme = {
  code: "bg-gray-100 text-gray-900 font-mono p-2 rounded", // fundo claro, texto escuro, fonte mono
  heading: {
    h1: "text-4xl font-bold mb-4", // Título grande, negrito, com margem inferior
    h2: "text-3xl font-semibold mb-3", // Título um pouco menor, semi-negrito
    h3: "text-2xl font-medium mb-2", // Tamanho intermediário
    h4: "text-xl font-medium mb-2",
    h5: "text-lg font-medium mb-1",
  },
  image: "w-full h-auto rounded-md shadow", // imagem com largura total, altura automática e sombra
  link: "text-blue-600 hover:underline", // link azul com sublinhado ao passar o mouse
  list: {
    listitem: "list-disc ml-5", // lista com marcador padrão e indentação
    nested: {
      listitem: "list-disc ml-10", // marcador aninhado com indentação maior
    },
    ol: "list-decimal ml-5", // lista ordenada com números
    ul: "list-disc ml-5", // lista não ordenada com marcadores
  },
  ltr: "text-left", // texto alinhado à esquerda
  paragraph: "mb-4 text-base", // espaçamento inferior em parágrafos
  placeholder: "text-gray-400", // texto do placeholder em cinza claro
  quote: "border-l-4 border-gray-300 pl-4 italic text-gray-700", // citação com barra lateral e itálico
  rtl: "text-right", // texto alinhado à direita
  text: {
    bold: "font-bold", // texto em negrito
    code: "bg-gray-200 text-red-600 font-mono p-1 rounded", // bloco de código com fundo cinza e texto vermelho
    hashtag: "text-blue-500", // hashtag em azul
    italic: "italic", // texto em itálico
    overflowed: "truncate", // texto que não ultrapassa a área
    strikethrough: "line-through", // texto riscado
    underline: "underline", // texto sublinhado
    underlineStrikethrough: "line-through underline", // texto riscado e sublinhado
  },
};

export default Theme;
