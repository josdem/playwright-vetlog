import { Page } from "@playwright/test"
import data from "../properties/data.json"

export class PetEditPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async changePetData(): Promise<void> {
    const element = this.page.getByTestId("petName")
    await element.fill(data.petNewName)
    await this.page.getByRole("button", { name: "SUBMIT" }).click()
  }

  getMessage() {
    return this.page.getByTestId("petEditMessage")
  }
}
