import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"
import data from "../properties/data.json"

export class RecoveryPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async submitEmail(): Promise<void> {
    await this.page.goto(Constants.RECOVERY_URL)
    await this.page.getByPlaceholder(/email/).fill(data.email)
    await this.page.getByRole("button", { name: "SUBMIT" }).click()
  }
}
