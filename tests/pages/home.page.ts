import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class HomePage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async clickOnPrivacyPolicy(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    const element = this.page.getByRole("link", { name: "Privacy Policy" })
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }

  async clickOnRegisterPet(): Promise<void> {
    const element = this.page.getByRole("link", { name: "Register a Pet" })
    await element.click()
  }

  async clickOnListPets(): Promise<void> {
    const element = this.page.getByRole("link", { name: "List" })
    await element.first().click()
  }
}
