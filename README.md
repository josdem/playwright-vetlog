## Playwright Vetlog

[![Playwright](https://img.shields.io/badge/playwright-tests-brightgreen.svg)](https://github.com/josdem/playwright-vetlog/actions)

This is an end-to-end testing for [Vetlog](https://vetlog.org/) using [Playwright](https://playwright.dev/) and [Applitools](https://applitools.com/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version `v18.18.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To run end-to-end tests

```bash
npx playwright test e2e
```

#### To run visual tests

```bash
npx playwright test visual --project chromium
```

#### To see integrated reports

```bash
npx playwright show-report
```

#### Setting up environment

```bash
export VETLOG_USERNAME=${USERNAME}
export VETLOG_PASSWORD=${PASSWORD}
export APPLITOOLS_API_KEY=${YOUR_APPLITOOLS_API_KEY}
```

where:

- `${USERNAME}` is your Vetlog username
- `${PASSWORD}` is your Vetlog password
- `${YOUR_APPLITOOLS_API_KEY}` is something like: `Ag4hfEVDIMykuCpWk61ppg3VJ9fkK0uht100HXnvGPlag220` (Check with your service provider if you do not have it)

**Note**

If you are using Windows based platform:

```bash
$Env:APPLITOOLS_API_KEY="YOUR_APPLITOOLS_API_KEY"
```

where:

- `${apiKey}` Is your Applitools api key

[Reporters Wiki](https://github.com/josdem/playwright-vetlog/wiki#reporters)