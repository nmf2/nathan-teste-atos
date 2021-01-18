# Introdução
Este repositório implementa o **apenas** backend do projeto 2 da especificação.
# Pre-requisitos
Este projeto tem como requisitos de execução o [Docker](https://docs.docker.com/get-docker/) 
e o [Docker Compose](https://docs.docker.com/compose/install/).

# Primeiros Passos
Clonar o repositório: 
```
git clone https://github.com/nmf2/nathan-teste-atos.git
```

Executar o build:
```
docker-compose build
```

Rodar o projeto:
```
docker-compose up
```

Assim que o server estiver pronto o container `backend` emitirá a seguinte 
mensagem:
```
Server up and runnig on port 3000
```

# Utilização
Quando o server estiver pronto é possível testá-lo apenas acessando o seguinte 
endereço:
```
http://localhost:3000/api-explorer
```

Para testar os endpoints individualmente apenas é necessário clicar em 
"*Try it out*" e preencher as informações necessárias para cada endpoint e 
clicar em *Execute*.
Por exemplo: ![Exemplo](https://imgur.com/cYeQ6Tp.png)

# Descrição da estrutura do projeto

```
├── dist                        -- Pasta onde fica o resultado do build
│   ├── api.yaml
│   └── server.js
├── node_modules
├── public                      -- Pasta reservada para assets necessários para página de documentação "/api-explorer"
├── src                         -- Código fonte
│   ├── config                  -- Configurações em geral
│   │   └── database.js         -- Conexão com o banco de dados
│   ├── models                  -- Schemas e Modelos do Mongoose
│   │   ├── bot.model.js
│   │   └── message.model.js
│   ├── resources               -- Definição de recursos
│   │   ├── bots
│   │   │   ├── controller.js   -- CRUD de bots
│   │   │   └── router.js       -- Rotas dos endpoints de bots
│   │   └── messages
│   │       ├── controller.js   -- CRUD de bots
│   │       └── router.js       -- Rotas dos endpoints de bots
│   ├── api.yaml                -- Documentação da API seguindo o padrão OpenAPI 3
│   ├── index.js                -- Inicialização do server e dos recursos
│   └── routes.js               -- Definição de rotas base para os recursos
├── docker-compose.yaml
├── Dockerfile
├── jsconfig.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

# Pontos importantes
 * Utilizando o arquivo api.yaml é possível definir como as requisições devem ser
feitas e garantir que os parâmetros que virão no body/query/path da requisição 
estarão no formato esperado pelo controller (com a utilização do middleware openapi-validator).
 * Os controllers têm a lógica de manipular o banco e responder a requisição.
 * Os routers definem os parâmetros da rota atual e possíveis middlewares para endpoints específicos


