# ♿ React App com Acessibilidade usando axe-core

Este projeto é um aplicativo **React** configurado com o **axe-core**,
uma ferramenta usada para identificar automaticamente problemas de
acessibilidade durante o desenvolvimento.\
O objetivo é garantir que a aplicação siga boas práticas de
**Acessibilidade Web (A11y)** e seja mais inclusiva.

## 🚀 Tecnologias utilizadas

-   React
-   Vite
-   @axe-core/react
-   TypeScript

## ♿ O que é o axe-core?

O **axe-core** é uma engine de verificação de acessibilidade
desenvolvida pela Deque Systems.\
Ele ajuda a identificar problemas seguindo recomendações como:

-   WCAG 2.1\
-   Acessibilidade geral da Web\
-   Boas práticas A11y

Com a integração ao React, ele inspeciona automaticamente a renderização
dos componentes e reporta problemas diretamente no console.

## 📦 Instalação

``` bash
pnpm add @axe-core/react
```

## 🛠 Configuração

O axe deve rodar somente em **modo de desenvolvimento** para evitar
perda de performance em produção.

### Exemplo (main.jsx / index.js):

``` ts
if (import.meta.env.MODE === "development") {
  import('@axe-core/react').then(({ default: axe }) => {
    import('react').then(React =>
      import('react-dom').then(ReactDOM => {
        axe(React, ReactDOM, 1000);
      })
    );
  });
}
```

## ▶️ Como executar o projeto

``` bash
pnpm install
pnpm run dev
```

Abra no navegador:

    http://localhost:5173

## 🔍 Visualizando problemas de acessibilidade

Para ver os alertas:

1.  Abra o DevTools do navegador\
2.  Acesse a aba *Console*\
3.  O axe exibirá:
    -   Descrição do erro\
    -   Severidade\
    -   Trecho do DOM afetado\
    -   Regra violada (WCAG)\
    -   Sugestões de correção

## ✔️ Benefícios do axe-core

-   Detecta falhas não perceptíveis visualmente\
-   Ajuda a seguir WCAG desde o início\
-   Reduz retrabalho\
-   Melhora qualidade e acessibilidade\
-   É rápido e fácil de integrar

## 🧩 Boas práticas adicionais de acessibilidade (A11y)

-   Incluir `alt` em imagens
-   Garantir contraste adequado\
-   Validar navegação via teclado\
-   Manter hierarquia de headings\
-   Usar ARIA somente quando necessário

