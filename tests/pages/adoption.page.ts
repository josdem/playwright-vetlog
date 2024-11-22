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

export class AdoptionPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async list(): Promise<void> {
    await this.page.goto(Constants.HOME_URL)
    const element = this.page.getByTestId("listForAdoption")
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }

  getPetName() {
    return this.page.getByTestId("petName")
  }

  getPetBirthdate() {
    return this.page.getByTestId("petBirhdate")
  }

  getPetBreed() {
    return this.page.getByTestId("petBreed")
  }

  getPetDewormed() {
    return this.page.getByTestId("petDewormed")
  }

  getPetSterilized() {
    return this.page.getByTestId("petSterilized")
  }

  getPetVaccinated() {
    return this.page.getByTestId("petVaccinated")
  }

  getPetAdoptionDescription() {
    return this.page.getByTestId("petAdoptionDescription")
  }
}
