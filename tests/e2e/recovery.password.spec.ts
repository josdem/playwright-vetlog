import { test, expect } from "@playwright/test"
import { RecoveryPage } from "../pages/recovery.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US5",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should validate recovery password page", async ({ page }) => {
  let recoveryPage = new RecoveryPage(page)
  recoveryPage.submitEmail()
  await expect(page).toHaveTitle(data.loginTitle)
  await expect(recoveryPage.getMessage()).toBeVisible()
})
