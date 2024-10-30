## Playwright Vetlog

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
