## Smile Sphere - Frontend 🚀

<div align="center">

  ![Static Badge](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/typescript-0B88F7?style=for-the-badge&logo=typescript&logoColor=0B88F7&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/axios-000000?style=for-the-badge&logo=axios&logoColor=FFFFFF&labelColor=000000)
  ![Static Badge](https://img.shields.io/badge/ZOD-0822A2?style=for-the-badge&logo=zod&logoColor=%23000&labelColor=1481FC)
  ![Static Badge](https://img.shields.io/badge/tailwind-0B80BB?style=for-the-badge&logo=tailwind-css&logoColor=FFF&labelColor=000)
  ![Static Badge](https://img.shields.io/badge/npm-CA3337?style=for-the-badge&logo=yarn&logoColor=white&labelColor=000)

</div>

Este é o Frontend de uma aplicação Fullstack, que está comunicando com sua própria [API](https://github.com/genari-j/smile-sphere-api), desenvolvido utilizando **[React](https://react.dev/), [React-Query](https://tanstack.com/query/v4/docs/framework/react/devtools), [Typescript](https://www.typescriptlang.org/), [Axios](https://axios-http.com/), [Styled-components](https://styled-components.com/) e [ZOD](https://zod.dev/).** 

A Aplicação simula às funcionalidades de uma Clínica de Dentista. Usuários podem registrar agendamentos, cadastrar Doutores ou Pacientes. Está sendo implementado diversas outras funcionalidades (controle de estoque, dashboard para acompanhamento, controle de equipamentos e etc).

#### Tabela de conteúdo

- [Instalação](#instalação)
- [Usabilidade](#usabilidade)
- [Autenticação](#autenticação)

#### Instalação

1. Clone o repositório:

    - `git clone https://github.com/genari-j/smile-sphere-front.git`

2. Instale as dependências com npm

    - `npm i`

3. Configurando Variáveis de Ambiente

    - Note que há um arquivo .env.example na raiz
    - Apenas crie outro arquivo na raiz com o nome `.env` preenchendo às variáveis do .env.example

#### Usabilidade

1. Inicie a aplicação com yarn -> `npm run dev`

2. A Aplicação ficará acessível em `http://localhost:5173/`
    - Caso tenha colocado outra porta, apenas altere `5173` para sua porta;

#### Autenticação
O sistema está lidando com permissões de usuários. Ao clonar a API localmente e rodar às seeds para o Banco de dados, você terá acesso com alguns usuários default da aplicação. No readme da API, é possível coletar às credenciais de acesso;

  - `ADMIN` -> Consegue realizar todas operações do sistema;
  - `GESTOR` -> Consegue realizar parte das operações;
  - `FUNCIONÁRIO` -> Consegue realizar somente atividades de leitura;