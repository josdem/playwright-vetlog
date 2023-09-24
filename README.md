## Playwright Workshop

[![Playwright](https://img.shields.io/badge/playwright-reports-brightgreen.svg)](https://playwright.dev/)

This is an end-to-end testing for [Vetlog](https://vetlog.org/)

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
npx playwright test e2e --project chromium
```

#### To see integrated reports

```bash
npx playwright show-report
```

#### Setting up environment

```bash
export APPLITOOLS_API_KEY=${YOUR_APPLITOOLS_API_KEY}
```

where:

- `${YOUR_APPLITOOLS_API_KEY}` is something like: `Ag4hfEVDIMykuCpWk61ppg3VJ9fkK0uht100HXnvGPlag220` (Check with your service provider if you do not have it)

**Note**

If you are using Windows based platform:

```bash
$Env:APPLITOOLS_API_KEY="YOUR_APPLITOOLS_API_KEY"
```

where:

- `${apiKey}` Is your Applitools api key