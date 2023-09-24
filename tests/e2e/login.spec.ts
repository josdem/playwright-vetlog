import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"

test("should list pets for adoption", async ({ page }) => {
    await page.goto("https://vetlog.org/")
    await page.getByRole('link', { name: /Login/ }).first().click()
    await expect(page).toHaveTitle(Constants.LOGIN_TITLE)
    await page.getByPlaceholder(/username/).fill(`${process.env.USERNAME}`)
    await page.getByPlaceholder(/password/).fill(`${process.env.PASSWORD}`)
})