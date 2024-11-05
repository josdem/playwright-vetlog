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
  await expect(adoptionPage.getPetName()).toBeVisible()
  await expect(adoptionPage.getPetBirthdate()).toBeVisible()
  await expect(adoptionPage.getPetBreed()).toBeVisible()
  await expect(adoptionPage.getPetDeworming()).toBeVisible()
  await expect(adoptionPage.getPetSterilized()).toBeVisible()
  await expect(adoptionPage.getPetVaccinated()).toBeVisible()
  await expect(adoptionPage.getPetAdoptionDescription()).toBeVisible()
})
