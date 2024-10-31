import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class AdoptionPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async list(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    let element = this.page.getByTestId("listForAdoption")
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }
}
