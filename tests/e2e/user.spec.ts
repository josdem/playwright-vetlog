import { test, expect } from "@playwright/test"
import { UserPage } from "../pages/user.page"
import { Constants } from "../properties/test.constants"
import data from "../properties/data.json"

const WAITING_TIME = 10000

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

test("should not register due to wrong information", async ({ page }) => {
  const userPage = new UserPage(page)
  await page.goto(Constants.USER_URL)
  await expect(page).toHaveTitle(data.userRegistrationTitle, { timeout: WAITING_TIME })
  userPage.fillPhoneNumber()
  await expect(page.getByTestId("usernameErrorLabel")).toBeVisible()
  await expect(page.getByTestId("passwordErrorLabel")).toBeVisible()
  await expect(page.getByTestId("passwordErrorConfirmation")).toBeVisible()
  await expect(page.getByTestId("firstnameErrorLabel")).toBeVisible()
  await expect(page.getByTestId("lastnameErrorLabel")).toBeVisible()
  await expect(page.getByTestId("emailErrorLabel")).toBeVisible()
})
