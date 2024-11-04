import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class HomePage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async clickOnPrivacyPolicy(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    let element = this.page.getByRole("link", { name: "Privacy Policy" })
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }
}
