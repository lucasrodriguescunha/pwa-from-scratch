# PWA from Scratch

Um Progressive Web App (PWA) mínimo, construído do zero apenas com HTML, um manifesto e um service worker — sem framework nem etapa de build.

## Estrutura

```
.
├── index.html          # Página da aplicação e registro do service worker
├── manifest.json       # Manifesto do PWA (nome, ícones, cores, display)
├── service-worker.js   # Cache offline via Workbox (CDN)
├── logo.png            # Imagem de origem usada para gerar os ícones
└── icons/              # Ícones do manifesto, apple-touch-icon e splash screens iOS
```

## Como executar

O service worker exige HTTP(S) — abrir o `index.html` direto pelo `file://` não funciona. Suba um servidor estático na raiz do projeto:

```bash
npx serve .
```

Ou, com Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Instalação

Com a página aberta em um navegador compatível, use a opção de instalar do próprio navegador (ícone na barra de endereços no desktop, ou "Adicionar à tela de início" no mobile). O app abre em modo `fullscreen`, conforme definido no `manifest.json`.

## Cache offline

O `service-worker.js` usa o [Workbox](https://developer.chrome.com/docs/workbox) carregado por CDN e aplica:

- **Precache** de `index.html`, `manifest.json` e dos ícones do manifesto.
- **Navegações** servidas a partir do `index.html` em cache (app shell).
- **Imagens** com estratégia `CacheFirst`.

Ao alterar um arquivo que está no precache, incremente o valor de `revision` da entrada correspondente para que o novo conteúdo seja baixado.

## Ícones

Os ícones e splash screens em `icons/` foram gerados a partir do `logo.png` com o [pwa-asset-generator](https://github.com/elegantapp/pwa-asset-generator):

```bash
npx pwa-asset-generator logo.png icons
```
