import { Locator, Page } from "@playwright/test"

export class PrivacyPolicyPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async getWelcomeTitle(): Promise<Locator> {
    return this.page.getByRole("heading", { name: "Welcome to Vetlog Privacy Policy" })
  }

  async getCollectTitle(): Promise<Locator> {
    return this.page.getByRole("heading", { name: "Information we Collect" })
  }
}
