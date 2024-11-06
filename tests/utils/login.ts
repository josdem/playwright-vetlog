import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class Login {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.goto(Constants.LOGIN_URL)
    await this.page.getByPlaceholder(/username/).fill(username)
    await this.page.getByPlaceholder(/password/).fill(password)
    await this.page.getByRole("button", { name: "LOGIN" }).click()
  }
}
