import { Page } from "playwright/test"
import data from "../properties/data.json"

export class PetCreatePage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillPetData(): Promise<void> {
    await this.page.getByPlaceholder(/name/).fill(data.petName)
    await this.page.getByTestId("birthDate").fill(data.petBirthDate)
  }
}
