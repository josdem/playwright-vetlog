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

  async clickOnEditButton(): Promise<void> {
    const element = this.page.getByTestId("petEditButton")
    await element.click()
  }

  getMessage() {
    return this.page.getByTestId("petListMessage")
  }

  getPetName() {
    return this.page.getByTestId("petName")
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
}
