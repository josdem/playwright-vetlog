import { Page } from "@playwright/test"
import data from "../properties/data.json"

export class VetSearchPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillSearchByUser(): Promise<void> {
    const element = this.page.getByTestId("usernameInput")
    await element.fill(data.username)
    await this.page.getByRole("button", { name: "SUBMIT" }).click()
  }
}
