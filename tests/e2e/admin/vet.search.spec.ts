import { test, expect } from "@playwright/test"
import { Authenticator } from "../../utils/authenticator"
import { HomePage } from "../../pages/home.page"
import data from "../../properties/data.json"

const WAITING_TIME = 10000

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US14",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should search pets by user", async ({ page }) => {
  const authenticator = new Authenticator(page)
  const homePage = new HomePage(page)
  authenticator.login(`${process.env.ADMIN}`, `${process.env.ADMIN_PASSWORD}`)
  await homePage.clickOnSearch()
  await expect(page).toHaveTitle(data.searchTitle, { timeout: WAITING_TIME })
})
