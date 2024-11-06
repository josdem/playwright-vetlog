import { Page } from "@playwright/test"
import { LoginPage } from "../pages/login.page"

export class Login {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }
}
