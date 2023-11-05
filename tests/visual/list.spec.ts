import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"
import { LoginPage } from "../pages/login.page"

import applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  applitools.setUpConfiguration(Constants.BATCH_NAME)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, Constants.APP, test.info().title)
})

test("should list my pets", async ({ page }) => {
  let loginPage = new LoginPage(page)
  await loginPage.login()
  await page.getByRole('link', { name: "LIST" }).click()
  await applitools.checkWindowEyes("List pets page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})