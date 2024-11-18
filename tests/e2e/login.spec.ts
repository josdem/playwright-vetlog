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

test("should not login due wrong username", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login("wrongUsername", `${process.env.VETLOG_PASSWORD}`)
  await expect(page.getByTestId("loginErrorMessage")).toBeVisible()
})

test("should not login due wrong password", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(`${process.env.VETLOG_USERNAME}`, "wrongPassword")
  await expect(page.getByTestId("loginErrorMessage")).toBeVisible()
})

test("should login as a user", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
  await expect(page.getByRole("link", { name: /Logout/ }).first()).toBeVisible()
})
