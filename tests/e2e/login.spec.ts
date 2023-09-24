import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"

test.beforeAll(async () => {
    test.info().annotations.push({
        type: 'story',
        description: 'https://github.com/josdem/vetlog-spring-boot/wiki/US3',
    });
})

test("should login as a user", async ({ page }) => {
    await page.goto(Constants.URL)
    await page.getByRole('link', { name: /Login/ }).first().click()
    await expect(page).toHaveTitle(Constants.LOGIN_TITLE)
    await page.getByPlaceholder(/username/).fill(`${process.env.USERNAME}`)
    await page.getByPlaceholder(/password/).fill(`${process.env.PASSWORD}`)
    await page.getByRole('button', { name: /Login/ }).click()
    await expect(page.getByRole('link', { name: /Logout/ }).first()).toBeVisible()
})