# Garage Games - Projeto Final de Certificacao

Mini aplicacao Fullstack com Next.js desenvolvida para atender ao enunciado de certificacao.

## Resumo Executivo

- Status geral: requisitos obrigatorios atendidos
- Entregaveis: codigo fonte, README com decisoes tecnicas e scripts npm de execucao/build/teste
- Rotas principais: `/`, `/products/[slug]`, `/profile`, `/login`
- API Routes: `GET /api/products` e `GET /api/products/[id]`
- Stack: Next.js + TypeScript + CSS Modules com SASS + Jest

## Objetivo

Aplicacao de catalogo de jogos com:

- listagem de produtos
- pagina de detalhe por rota dinamica
- autenticacao simulada
- pagina de perfil com edicao de dados
- API Routes com dados mock

## Atendimento ao Enunciado

### 1. Pagina Home

- [x] Listagem estatica de produtos (6 itens ficticios)
- [x] Cada item exibe titulo, descricao curta e imagem
- Implementacao: `app/page.tsx`, `app/components/ProductCard.tsx`
- Estrategia: SSG com `revalidate = 600` (ISR)

### 2. Pagina Detalhe do Item

- [x] Rota dinamica via slug
- [x] Dados obtidos no servidor
- [x] Exibe detalhes completos do produto
- Implementacao: `app/products/[slug]/page.tsx`
- Justificativa: SSR para manter dados de preco/estoque sempre atuais

### 3. Pagina Perfil do Usuario

- [x] Conteudo personalizado com CSR
- [x] Autenticacao simulada com estado local + `localStorage`
- [x] Edicao simples dos dados do usuario
- Implementacao: `app/profile/page.tsx`, `src/contexts/AuthContext.tsx`

### 4. API Routes

- [x] Endpoint de listagem
: `GET /api/products`
- [x] Endpoint de detalhe
: `GET /api/products/[id]` (aceita id ou slug)
- Implementacao: `app/api/products/route.ts`, `app/api/products/[id]/route.ts`

### 5. Estilizacao

- [x] CSS Modules com SASS (SCSS)
- [x] Layout responsivo com Flexbox e Grid
- Implementacao: `*.module.scss` + `app/globals.css` para variaveis globais

### 6. Qualidade e Organizacao

- [x] Codigo em TypeScript (modo strict)
- [x] ESLint configurado
- [x] Prettier configurado
- [x] Estrutura organizada por feature/pagina

### 7. Extras

- [x] Testes unitarios com Jest
- [ ] Lazy loading com Suspense
- [ ] Acessibilidade adicional (melhorias incrementais)

## Estrategias de Renderizacao

- Home (`app/page.tsx`): SSG + ISR (`revalidate = 600`)
- Detalhe (`app/products/[slug]/page.tsx`): SSR
- Login e Perfil: CSR

## Estrutura do Projeto

```text
app/
  (auth)/login/
  api/products/
  components/
  products/[slug]/
  profile/
src/
  data/
  types/
  contexts/
  __tests__/
```

## Tecnologias

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- SASS (SCSS)
- CSS Modules
- Jest + Testing Library
- ESLint + Prettier

## Scripts

| Script | Descricao |
| --- | --- |
| `npm run dev` | Desenvolvimento |
| `npm run build` | Build de producao |
| `npm run start` | Execucao em producao |
| `npm run lint` | Lint com correcao |
| `npm run format` | Formatacao |
| `npm run format:check` | Checagem de formatacao |
| `npm run type-check` | Checagem de tipos |
| `npm run test` | Testes unitarios |
| `npm run test:coverage` | Cobertura de testes |

## Como Rodar

```bash
npm install
npm run dev
```

Para build de producao:

```bash
npm run build
npm run start
```

## Observacoes

- A rota `/products` nao existe como pagina de listagem separada no momento, pois a Home ja exibe todos os produtos.
- O projeto removeu a dependencia de Tailwind no estilo de interface e adotou SCSS Modules como padrao.

---

Ultima atualizacao: Marco de 2026
