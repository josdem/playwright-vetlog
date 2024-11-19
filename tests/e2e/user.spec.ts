import { test, expect } from "@playwright/test"
import { UserPage } from "../pages/user.page"
import { Constants } from "../properties/test.constants"

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
  page.goto(Constants.USER_URL)
  userPage.fillPhoneNumber()
  await expect(page.getByTestId("usernameLabel")).toBeVisible()
})
