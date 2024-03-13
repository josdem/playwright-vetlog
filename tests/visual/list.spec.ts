import { test, Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"
import { LoginPage } from "../pages/login.page"

import applitools from "../utils/applitools.util"

let page: Page

test.beforeAll(async () => {
  applitools.setUpConfiguration(Constants.BATCH_NAME)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, Constants.APP, test.info().title)
  let loginPage = new LoginPage(page)
  await loginPage.login()
})

test("should list my pets", async ({ page }) => {
  await page.getByRole('link', { name: "LIST" }).first().click()
  await applitools.checkWindowEyes("List pets page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})