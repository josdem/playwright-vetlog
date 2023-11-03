import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"
import applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  applitools.setUpConfiguration(Constants.BATCH_NAME)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, Constants.APP, test.info().title)
})

test("should validate home page", async ({ page }) => {
  await page.goto(Constants.HOME_URL)
  await expect(page).toHaveTitle(Constants.HOME_TITLE)
  await applitools.checkWindowEyes("Home Page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})