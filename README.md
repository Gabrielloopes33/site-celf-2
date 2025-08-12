# CELF - Serviços de Conservação e Manutenção

Site institucional da CELF, empresa especializada em soluções completas para conservação e manutenção de espaços condominiais, comerciais e industriais.

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [Radix UI](https://www.radix-ui.com/) - Biblioteca de componentes de interface acessíveis
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [TypeScript](https://www.typescriptlang.org/) - Linguagem tipada baseada em JavaScript

## Mapa do Site

- **Home** (`/`) - Página inicial com visão geral da empresa e serviços
- **Serviços**
  - Overview (`/servicos`) - Visão geral dos serviços
  - Conservação Condominial (`/servicos/conservacao-condominial`) - Serviços para condomínios
  - Conservação Comercial (`/servicos/conservacao-comercial`) - Serviços para espaços comerciais
  - Implantação Industrial (`/servicos/implantacao-industrial`) - Serviços para indústrias
  - Obras (`/servicos/obras`) - Reformas e construções
- **Como Funciona** (`/como-funciona`) - Fluxo operacional e papéis
- **Área do Cliente** (`/area-do-cliente`) - Benefícios para moradores e síndicos
- **Transparência Financeira** (`/transparencia-financeira`) - Prestação de contas
- **Vem Aí** (`/vem-ai/cameras`) - Módulos em validação
- **Sobre** (`/sobre`) - Informações institucionais
- **Contato** (`/contato`) - Solicitação de proposta/demonstração
- **FAQ** (`/faq`) - Perguntas frequentes

## Jornada do Usuário

O site foi estruturado seguindo a jornada do usuário:
1. **Descobrir** - Apresentação da empresa e serviços
2. **Confiar** - Demonstração de credibilidade e experiência
3. **Solicitar Proposta** - Conversão do visitante em lead/cliente

## Executando o Projeto

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Desenvolvimento

### Estrutura de Arquivos

- `src/app/` - Rotas e páginas da aplicação
- `src/components/` - Componentes reutilizáveis
  - `layout/` - Componentes de layout (header, footer)
  - `ui/` - Componentes de interface (botões, formulários)
- `public/` - Arquivos estáticos (imagens, fontes)

### Personalização

Para personalizar cores, tipografia e outros aspectos visuais, edite:
- `src/app/globals.css` - Estilos globais e variáveis CSS
- `src/components/ui/` - Componentes de interface personalizados
