import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/login.page"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US3",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should login as a user", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login()
  await expect(page.getByRole("link", { name: /Logout/ }).first()).toBeVisible()
})
