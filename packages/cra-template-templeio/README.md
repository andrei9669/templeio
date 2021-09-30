<h1 align="center">Welcome to @templeio/cra-template-templeio 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@templeio/cra-template-templeio" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@templeio/cra-template-templeio.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%5E12.22.0%20%7C%7C%20%5E14.17.0%20%7C%7C%20%3E%3D16.0.0-blue.svg" />
  <a href="https://github.com/andrei9669/templeio#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/andrei9669/templeio/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> template for create react app.
> Template is based on [react-starter-boilerplate](https://github.com/TheSoftwareHouse/react-starter-boilerplate)

### 🏠 [Homepage](https://github.com/andrei9669/templeio)

## Prerequisites

- node ^12.22.0 || ^14.17.0 || >=16.0.0

## Install

```sh
npx create-react-app my-app --template @templeio/cra-template-templeio
```

## Features
1. Typescript
2. [Opinionated style-guide](https://github.com/andrei9669/templeio/tree/main/packages/eslint-config-templeio)
3. Code structure to reference from.
4. Notable dependencies
   - i18next - for localization
   - Material ui(v5) - component library
   - react-router-dom - for routing
5. Notable dev dependencies
   - cypress - for E2E testing
   - commitizen, standard-version... - for conventional changelogs
   - npm-check - for interactive package update
   - react-app-rewired - for path aliasing but also for custom configuration

## TODO:
- storybook
- example app
- base testing in template

## Changelog generation
1. Make changes to your code
2. use `npm run commit` or [jetbrains plugin](https://plugins.jetbrains.com/plugin/7499-gittoolbox) to create [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
   - `npm run commit` uses [commitizen](https://github.com/commitizen/cz-cli) to generate commit.
3. use `npm run release` to generate release using [standard-version](https://www.npmjs.com/package/standard-version).
   standard-version uses conventional commits to generate changelog in `CHANGELOG.md` and also adds tag to the commit.

## Author

👤 **Andrei Sirotin**

* Github: [@andrei9669](https://github.com/andrei9669)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/andrei9669/templeio/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
