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
  const homePage = new HomePage(page)
  const privacyPolicyPage = new PrivacyPolicyPage(page)
  await homePage.clickOnPrivacyPolicy()
  await expect(page).toHaveTitle(data.privacyPolicyTitle)
  await expect(privacyPolicyPage.getWelcomeTitle()).toBeVisible()
  await expect(privacyPolicyPage.getCollectTitle()).toBeVisible()
  await expect(privacyPolicyPage.getUseTitle()).toBeVisible()
  await expect(privacyPolicyPage.getDisclosureTitle()).toBeVisible()
  await expect(privacyPolicyPage.getSecurityTitle()).toBeVisible()
})
