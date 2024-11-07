import { Page } from "@playwright/test"

export class PetListPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async clickOnDeleteButton(): Promise<void> {
    let element = this.page.getByTestId("petDeleteButton")
    await element.click()
  }

  async clickOnDeleteModal(): Promise<void> {
    let element = this.page.getByTestId("petDeleteModal")
    await element.click()
  }
}
