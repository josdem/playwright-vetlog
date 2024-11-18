import { Page } from "@playwright/test"
import { Authenticator } from "../utils/authenticator"

export class LoginPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async login(username: string, password: string): Promise<void> {
    const authenticator = new Authenticator(this.page)
    authenticator.login(username, password)
  }
}
