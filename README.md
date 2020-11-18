# Transaction App [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Aplicação para gerenciamento de transações.

> Publicado em : [https://transaction-app-test.netlify.app/](https://transaction-app-test.netlify.app/ 'https://https://transaction-app-test.netlify.app/')

## Instalação

Para correta instalação do projeto é necessário as seguintes ferramentas instaladas:

- node >= 12.16.3
- yarn >= 1.22.4
- git >= 2.24.1

### Instalação local

Para instalar uma cópia local do projeto:

```shell
git clone git@github.com:ozeas/transaction-app.git
cd transaction-app
yarn
```

## Desenvolvimento

Principais libs e frameworks utilizados no projeto:

- react-scripts@4.0.0
- @testing-library/react
- react-hook-form
- @storybook/react
- styled-components
- styled-system
- rebass
- recoil

### Ambiente de desenvolvimento

Para configurar o projeto em modo de desenvolvimento, obtenha uma cópia e instalale as dependências:

json-server api

```shell
cd transaction-app/
yarn server
```

aplicação web

```shell
cd transaction-app/
yarn dev
```

OBS: crie o arquivo .env em seu repositório local com o host que o serviço json-server api foi configurado

```yaml
REACT_APP_API_URL=http://localhost:3000
```

Componentes

```shell
cd transaction-app/
yarn storybook
```

### Build

Build geral dos pacotes do projeto:

```shell
yarn build
```

### Publicação

Este projeto está configurado para publicação automática no netlify, veja mais detalhes:
[https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/ 'https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/')

## Testes

Para executar os testes de todos os pacotes:

```shell
yarn test
```

Para executar os testes com watching:

```shell
yarn test:watch
```

## Style guide

Este projeto faz uso das seguintes ferramentas opinativas de estilo de código:

- prettier
- eslint

Para checar as regras do style guide:

```shell
yarn lint
```

Veja mais em: [Eslint configuration](https://github.com/ozeas/transaction-app/blob/master/.eslintrc 'Eslint configuration')

## Licença

Este projeto utiliza o modelo de licença MIT.
