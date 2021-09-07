<h1 align="center">Welcome to @templeio/eslint-config-templeio 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@templeio/eslint-config-templeio" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@templeio/eslint-config-templeio.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%5E12.22.0%20%7C%7C%20%5E14.17.0%20%7C%7C%20%3E%3D16.0.0-blue.svg" />
  <a href="https://github.com/andrei9669/templeio#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/andrei9669/templeio/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Base eslint conf for templeio projects

### 🏠 [Homepage](https://github.com/andrei9669/templeio)

## Prerequisites

- node ^12.22.0 || ^14.17.0 || >=16.0.0
- valid `tsconfig.json` in root directory

## Install

```sh
npm install @templeio/eslint-config-templeio
```

## Usage
### create-react-app
```js
// eslintrc.js
module.exports = {
  extends: ['@templeio/eslint-config-templeio/cra'],
};
```
### base
```js
// eslintrc.js
module.exports = {
  extends: ['@templeio/eslint-config-templeio'],
};
```
### nest
```js
// eslintrc.js
module.exports = {
  extends: ['@templeio/eslint-config-templeio/nest'],
};
```

## Author

👤 **Andrei Sirotin**

* Github: [@andrei9669](https://github.com/andrei9669)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/andrei9669/templeio/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
