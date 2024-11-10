## Playwright Vetlog
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Playwright](https://img.shields.io/badge/playwright-tests-brightgreen.svg)](https://github.com/josdem/playwright-vetlog/actions)

This is an end-to-end testing for [Vetlog](https://vetlog.org/) using [Playwright](https://playwright.dev/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version `v18.20.4`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To run end-to-end tests

```bash
npx playwright test e2e
```

#### To see integrated reports

```bash
npx playwright show-report
```

```bash
npx playwright test tests/e2e/${test-file-name}
```

Where:

- `${test-file-name}` is the spec you want to run

#### Setting up environment

```bash
export VETLOG_USERNAME=${USERNAME}
export VETLOG_PASSWORD=${PASSWORD}
```

where:

- `${USERNAME}` is your Vetlog username
- `${PASSWORD}` is your Vetlog password

**Note**

If you are using Windows based platform:

```bash

$Env:VETLOG_USERNAME="VetlogUser"
$Env:VETLOG_PASSWORD="VetlogPassword"
```

#### To format the project

```bash
npx prettier --write .
```

[Reporters Wiki](https://github.com/josdem/playwright-vetlog/wiki#reporters)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ahmedhalac"><img src="https://avatars.githubusercontent.com/u/38500014?v=4?s=100" width="100px;" alt="Ahmed Halac"/><br /><sub><b>Ahmed Halac</b></sub></a><br /><a href="https://github.com/josdem/playwright-vetlog/commits?author=ahmedhalac" title="Code">💻</a> <a href="#infra-ahmedhalac" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!