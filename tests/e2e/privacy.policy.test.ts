import { test, expect } from "@playwright/test"
import { HomePage } from "../pages/home.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/issues/379",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should view privacy policy", async ({ page }) => {
  let homePage = new HomePage(page)
  await homePage.clickOnPrivacyPolicy()
  await expect(page).toHaveTitle(data.privacyPolicyTitle)
})
