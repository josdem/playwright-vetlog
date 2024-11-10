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

  getMessage() {
    return this.page.getByTestId("petListMessage")
  }
}
