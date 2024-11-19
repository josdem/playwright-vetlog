import { Page } from "@playwright/test"
import data from "../properties/data.json"

export class UserPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillPhoneNumber(): Promise<void> {
    await this.page.getByTestId("mobileInput").fill(data.mobile)
    await this.page.getByRole("button", { name: "SUBMIT" }).click()
  }
}
