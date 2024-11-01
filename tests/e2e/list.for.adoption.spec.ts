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
  let adoptionPage = new AdoptionPage(page)
  await adoptionPage.list()
  await expect(page).toHaveTitle(data.adoptionTitle)
  expect(adoptionPage.getPetName()).toBeDefined()
  expect(adoptionPage.getPetBirthdate()).toBeDefined()
  expect(adoptionPage.getPetBreed()).toBeDefined()
  expect(adoptionPage.getPetDeworming()).toBeDefined()
  expect(adoptionPage.getPetSterilized()).toBeDefined()
  expect(adoptionPage.getPetVaccinated()).toBeDefined()
  expect(adoptionPage.getPetAdoptionDescription()).toBeDefined()
})
