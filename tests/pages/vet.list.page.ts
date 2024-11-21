import { Page } from "@playwright/test"
import data from "../properties/data.json"

export class VetListPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  getPetName() {
    return this.page.getByTestId("petName")
  }

  getPetBirthdate() {
    return this.page.getByTestId("petBirthdate")
  }

  getPetBreed() {
    return this.page.getByTestId("petBreed")
  }

  getPetDewormed() {
    return this.page.getByTestId("petDewormed")
  }

  getPetSterilized() {
    return this.page.getByTestId("petSterilized")
  }

  getPetVaccinated() {
    return this.page.getByTestId("petVaccinated")
  }
}
