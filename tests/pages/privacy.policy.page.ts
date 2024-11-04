import { Locator, Page } from "@playwright/test"

export class PrivacyPolicyPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  getWelcomeTitle() {
    return this.page.getByRole("heading", { name: "Welcome to Vetlog Privacy Policy" })
  }

  getCollectTitle() {
    return this.page.getByRole("heading", { name: "Information We Collect" })
  }
}
