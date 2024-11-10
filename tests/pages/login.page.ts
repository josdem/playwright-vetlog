import { Page } from "@playwright/test"
import { Authenticator } from "../utils/authenticator"

export class LoginPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async login(): Promise<void> {
    const authenticator = new Authenticator(this.page)
    authenticator.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
  }
}
