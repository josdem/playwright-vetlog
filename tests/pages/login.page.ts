import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class LoginPage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page
      }

    async login() : Promise<void> {
        await this.page.goto(Constants.LOGIN_URL)
        await this.page.getByPlaceholder(/username/).fill(`${process.env.VETLOG_USERNAME}`)
        await this.page.getByPlaceholder(/password/).fill(`${process.env.VETLOG_PASSWORD}`)
        await this.page.getByRole('button', { name: /Login/ }).click()
    }

}