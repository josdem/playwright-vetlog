/*
Copyright 2024 Jose Morales contact@josdem.io

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Page } from "@playwright/test"
import { Constants } from "../properties/test.constants"

export class HomePage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async clickOnPrivacyPolicy(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    const element = this.page.getByRole("link", { name: "Privacy Policy" })
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }

  async clickOnRegisterPet(): Promise<void> {
    const element = this.page.getByRole("link", { name: "Register a Pet" })
    await element.click()
  }

  async clickOnListPets(): Promise<void> {
    const element = this.page.getByRole("link", { name: "List" })
    await element.first().click()
  }

  async clickOnSearch(): Promise<void> {
    const element = this.page.getByRole("link", { name: "Search" })
    await element.click()
  }
}
