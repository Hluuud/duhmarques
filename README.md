# Luiz Eduardo Marques — Portfólio

Portfólio pessoal de **Luiz Eduardo Marques**, profissional de tecnologia especializado em automação de processos, DevOps, infraestrutura e IoT para Indústria 4.0.

🔗 [duhmarques.vercel.app](https://duhmarques.vercel.app)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animações
- Componentes de UI baseados em [shadcn/ui](https://ui.shadcn.com/) (Radix + `class-variance-authority`)

## Estrutura

```
app/
  page.tsx            # navegação fixa e composição das seções
  layout.tsx           # metadata, fontes (Rajdhani/Space Mono), JSON-LD
  opengraph-image.tsx   # imagem OG gerada dinamicamente
  robots.ts / sitemap.ts
components/
  hero.tsx              # hero com terminal simulado (efeito de digitação)
  terminal.tsx          # componente de terminal reutilizável
  about.tsx, skills.tsx, projects.tsx, contact.tsx, footer.tsx
  ui/                   # componentes shadcn/ui
```

O formulário de contato ([components/contact.tsx](components/contact.tsx)) não tem backend — ao enviar, monta um link `mailto:` com os dados preenchidos e abre o cliente de e-mail do visitante. Sem API, sem variável de ambiente.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Ambiente de desenvolvimento          |
| `npm run build` | Build de produção                    |
| `npm run start` | Sobe o build de produção             |
| `npm run lint`  | Lint do projeto                      |

## Deploy

Hospedado na [Vercel](https://vercel.com/). Qualquer push na branch `main` gera um novo deploy.

## Contato

- GitHub: [github.com/Hluuud](https://github.com/Hluuud)
- LinkedIn: [linkedin.com/in/luiz-eduardo-marques](https://www.linkedin.com/in/luiz-eduardo-marques/)
- E-mail: luizeduardom58@gmail.com
