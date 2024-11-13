import { Page } from "@playwright/test"

export class PetListPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async clickOnDeleteButton(): Promise<void> {
    const element = this.page.getByTestId("petDeleteButton")
    await element.click()
  }

  async clickOnDeleteModal(): Promise<void> {
    const element = this.page.getByTestId("petDeleteModal")
    await element.click()
  }

  getPetName() {
    return this.page.getByTestId("petName")
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

  getMessage() {
    return this.page.getByTestId("petListMessage")
  }
}
