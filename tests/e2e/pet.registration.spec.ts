import { test, expect, Page } from "@playwright/test"
import { Authenticator } from "../utils/authenticator"
import { HomePage } from "../pages/home.page"
import { PetCreatePage } from "../pages/pet.create.page"
import { PetListPage } from "../pages/pet.list.page"
import { Constants } from "../properties/test.constants"
import data from "../properties/data.json"
import { time } from "console"

test.describe.configure({ mode: "serial" })

let page: Page
let homePage: HomePage
let authenticator: Authenticator
const WAITING_TIME = 10000

test.beforeAll(async ({ browser }) => {
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
  page = await browser.newPage()
  homePage = new HomePage(page)
  authenticator = new Authenticator(page)
  authenticator.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
})

test("should registrer a pet", async () => {
  const petCreatePage = new PetCreatePage(page)
  await homePage.clickOnRegisterPet()
  await expect(page).toHaveTitle(data.petCreateTitle, { timeout: WAITING_TIME })
  await petCreatePage.fillPetData()
  await expect(petCreatePage.getMessage()).toBeVisible()
})

test("should delete a pet", async () => {
  let petListPage = new PetListPage(page)
  await page.goto(Constants.HOME_URL)
  await homePage.clickOnListPets()
  await expect(page).toHaveTitle(data.petListTitle, { timeout: WAITING_TIME })
  await petListPage.clickOnDeleteButton()
  await petListPage.clickOnDeleteModal()
  await expect(petListPage.getMessage()).toBeVisible()
})
