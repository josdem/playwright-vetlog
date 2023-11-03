import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"
import applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  applitools.setUpConfiguration(Constants.BATCH_NAME)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, Constants.APP, test.info().title)
})

test("should validate recovery password page", async ({ page }) => {
  await page.goto(Constants.RECOVERY_URL)
  await expect(page).toHaveTitle(Constants.RECOVERY_TITLE)
  await page.getByPlaceholder(/email/).fill(Constants.EMAIL)
  await applitools.checkWindowEyes("Recovery password page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})