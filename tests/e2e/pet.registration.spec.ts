import { test, expect } from "@playwright/test"
import { Authenticator } from "../utils/authenticator"
import { HomePage } from "../pages/home.page"
import { PetCreatePage } from "../pages/pet.create.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US1",
  })
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US15",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

let homePage: HomePage

test("should registrer a pet", async ({ page }) => {
  let authenticator = new Authenticator(page)
  homePage = new HomePage(page)
  let petCreatePage = new PetCreatePage(page)
  authenticator.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
  await homePage.clickOnRegisterPet()
  await expect(page).toHaveTitle(data.petCreateTitle)
  await petCreatePage.fillPetData()
  await expect(petCreatePage.getMessage()).toBeVisible()
})

test("should delete a pet", async ({ page }) => {
  await homePage.clickOnRegisterPet()
  await expect(page).toHaveTitle(data.petListTitle)
})
