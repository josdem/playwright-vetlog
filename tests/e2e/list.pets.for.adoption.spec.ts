import { test, expect } from "@playwright/test"

test("should list pets for adoption", async ({ page }) => {
    await page.goto("https://vetlog.org/")
    await page.keyboard.press("PageDown")
    await page.getByRole('button', { name: /Do it now/ }).first().click()
    await expect(page).toHaveTitle("Listing pets")
})