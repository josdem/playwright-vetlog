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

  async getPetName(): Promise<Locator> {
    return this.page.getByTestId("petName")
  }

  async getPetBirthdate(): Promise<Locator> {
    return this.page.getByTestId("petBirhdate")
  }

  async getPetBreed(): Promise<Locator> {
    return this.page.getByTestId("petBreed")
  }

  async getPetDeworming(): Promise<Locator> {
    return this.page.getByTestId("petDeworming")
  }

  async getPetSterilized(): Promise<Locator> {
    return this.page.getByTestId("petSterilized")
  }

  async getPetVaccinated(): Promise<Locator> {
    return this.page.getByTestId("petVaccinated")
  }

  async getPetAdoptionDescription(): Promise<Locator> {
    return this.page.getByTestId("petAdoptionDescription")
  }
}
