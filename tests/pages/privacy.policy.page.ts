import { Page } from "@playwright/test"

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

  getUseTitle() {
    return this.page.getByRole("heading", { name: "Use of Your Information" })
  }

  getDisclosureTitle() {
    return this.page.getByRole("heading", { name: "Disclosure of Your Information" })
  }

  getSecurityTitle() {
    return this.page.getByRole("heading", { name: "Security of Your Information" })
  }
}
