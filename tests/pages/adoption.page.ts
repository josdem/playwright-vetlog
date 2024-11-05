import { Locator, Page } from "@playwright/test"
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

  getPetName() {
    return this.page.getByTestId("petName")
  }

  getPetBirthdate() {
    return this.page.getByTestId("petBirhdate")
  }

  getPetBreed() {
    return this.page.getByTestId("petBreed")
  }

  getPetDeworming() {
    return this.page.getByTestId("petDeworming")
  }

  getPetSterilized() {
    return this.page.getByTestId("petSterilized")
  }

  getPetVaccinated() {
    return this.page.getByTestId("petVaccinated")
  }

  getPetAdoptionDescription() {
    return this.page.getByTestId("petAdoptionDescription")
  }
}
