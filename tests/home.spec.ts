import { test, expect } from '@playwright/test'
const properties = require("../properties/test.properties")

test('has title', async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
})
