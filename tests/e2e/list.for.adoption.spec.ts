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

import { test, expect } from "@playwright/test"
import { AdoptionPage } from "../pages/adoption.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US10",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should list all pets in adoption status", async ({ page }) => {
  const adoptionPage = new AdoptionPage(page)
  await adoptionPage.list()
  await expect(page).toHaveTitle(data.adoptionTitle)
  await expect(adoptionPage.getPetName().first()).toBeVisible()
  await expect(adoptionPage.getPetBirthdate().first()).toBeVisible()
  await expect(adoptionPage.getPetBreed().first()).toBeVisible()
  await expect(adoptionPage.getPetDewormed().first()).toBeVisible()
  await expect(adoptionPage.getPetSterilized().first()).toBeVisible()
  await expect(adoptionPage.getPetVaccinated().first()).toBeVisible()
  await expect(adoptionPage.getPetAdoptionDescription().first()).toBeVisible()
})
