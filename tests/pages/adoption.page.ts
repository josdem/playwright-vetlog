import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class AdoptionPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async list(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    await this.page.getByRole("link", { name: "DO IT NOW!" }).click()
  }
}
