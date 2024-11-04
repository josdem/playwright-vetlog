import { test, expect } from "@playwright/test"
import { HomePage } from "../pages/home.page"
import { PrivacyPolicyPage } from "../pages/privacy.policy.page"
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
  let privacyPolicyPage = new PrivacyPolicyPage(page)
  await homePage.clickOnPrivacyPolicy()
  await expect(page).toHaveTitle(data.privacyPolicyTitle)
  await expect(privacyPolicyPage.getWelcomeTitle()).toBeVisible()
  await expect(privacyPolicyPage.getCollectTitle()).toBeVisible()
})
