<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# Formula One API

Este é um projeto de API para fornecer informações sobre equipes e pilotos de Fórmula 1.

## 🚀 Tecnologias

Este código fonte foi desenvolvido com os seguintes itens:

### 📦 Dependências

- [typescript][typescript-npm] - Superset para desenvolvimento em escala de aplicação JavaScript
- [tsx][tsx-npm] - TypeScript Execute (tsx): Permite que o Node.js execute TypeScript
- [tsup][tsup-npm] - Empacote sua biblioteca TypeScript sem configuração, alimentado por esbuild
- [@types/node][@types/node-npm] - Definições de tipo para node
- [fastify][fastify-npm] - Framework web rápido e de baixo overhead para Node.js
- [@fastify/cors][fastify-cors-npm] - Plugin CORS para Fastify

## 📚 Endpoints

### Equipes

- `GET /teams` - Retorna a lista de todas as equipes de Fórmula 1.

### Pilotos

- `GET /drivers` - Retorna a lista de todos os pilotos de Fórmula 1.
- `GET /drivers/:id` - Retorna informações sobre um piloto específico com base no ID.

## 🛠️ Scripts

- `npm run dist` - Compila o código TypeScript para JavaScript.
- `npm run dev` - Inicia o servidor em modo de desenvolvimento.
- `npm run watch` - Observa mudanças no código e reinicia o servidor automaticamente.
- `npm run start:dist` - Compila o código e inicia o servidor a partir do código compilado.

## 📄 Licença

Este projeto está licenciado sob a licença ISC.

## Créditos

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[fastify-npm]: https://www.npmjs.com/package/fastify
[fastify-cors-npm]: https://www.npmjs.com/package/@fastify/cors