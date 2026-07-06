Link Apresentação: https://canva.link/z6p8uiwqnefml0w

![alt text](image.png)# 🐾 ResgatAS - Plataforma de Adoção e Bem-Estar Felino

**ResgatAS** é uma aplicação web desenvolvida para facilitar a conexão entre gatos resgatados e potenciais adotantes. O projeto visa promover o bem-estar animal através de um sistema de adoção responsável, doação e gestão de eventos beneficentes, além de oferecer conteúdo informativo para a comunidade.

## 🎯 Objetivo do Projeto

Desenvolver uma plataforma que automatize e organize os processos da ONG **ResgatAS**, desde a divulgação dos animais para adoção até o gerenciamento de eventos e contribuições da comunidade. A solução visa aumentar o alcance da ONG, melhorar a experiência dos adotantes e facilitar o trabalho dos voluntários.

## 🛠️ Tecnologias Utilizadas

### Stack Principal

- **[Next.js](https://nextjs.org/) (App Router):** Framework React para renderização híbrida (SSG/SSR) e roteamento avançado.
- **[React](https://react.dev/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática ao código, garantindo mais segurança e manutenibilidade.
- **[Bootstrap](https://getbootstrap.com/):** Framework CSS para criação de componentes estilizados e responsivos de forma ágil.
- **[Supabase](https://supabase.com/):** Backend-as-a-Service (BaaS) com PostgreSQL para banco de dados, armazenamento de fotos e autenticação (OAuth).

## 📂 Estrutura do Projeto

```text
site-ong-gatos/
├── app/                   # Rotas e páginas da aplicação (Next.js App Router)
├── fotos/                 # Imagens e recursos visuais locais
├── lib/                   # Configurações de bibliotecas de terceiros
├── public/                # Arquivos estáticos servidos diretamente na raiz
├── types/                 # Definições de tipos e interfaces TypeScript
├── middleware.ts          # Proteção de rotas do painel admin
├── next.config.ts         # Configurações do Next.js
├── package.json           # Dependências e scripts do projeto
└── tsconfig.json          # Configuração do compilador TypeScript
```

## 🌐 Deploy (Produção)

A plataforma está disponível online e pode ser acessada através do link:
**[https://github-resgatas.vercel.app](https://github-resgatas.vercel.app)**

## 🗄️ Banco de Dados (Supabase)

O projeto utiliza o Supabase (PostgreSQL). Para popular o banco e criar as tabelas necessárias localmente ou em um novo projeto:
1. Crie um projeto no [Supabase](https://supabase.com/).
2. Acesse a aba **SQL Editor**.
3. Copie o conteúdo do arquivo `supabase-setup.sql` (localizado na raiz do projeto) e execute-o. Ele criará todas as tabelas (`cats`, `admins`, `contact_requests`), as políticas de segurança e configurará alguns gatos de exemplo. Há também instruções comentadas nele para a criação do bucket de imagens.

## 🔐 Credenciais de Demonstração (Painel Admin)

A autenticação da área restrita (`/admin`) é feita através de **Login com Google**. Por questões de segurança, apenas e-mails previamente autorizados podem acessar o sistema.

**Para que o avaliador consiga testar o painel administrativo:**
1. Após rodar o script SQL no Supabase, abra a tabela `admins`.
2. Insira o e-mail da sua conta Google pessoal como um novo registro na tabela `admins`.
3. Na tela de login da aplicação, clique em "Login com Google" e entre com essa mesma conta.

## 🚀 Como Executar

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd site-ong-gatos
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto (use o arquivo `.env.example` como modelo).
   - Adicione as variáveis necessárias para conectar-se ao Supabase (`NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação:
   - Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em funcionamento.

---

**Feito por integrantes do projeto: Hugo Bertoglio, João Guero , Fabricio ricardo e Mariah Bork**
