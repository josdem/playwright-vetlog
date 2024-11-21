import { test, expect } from "@playwright/test"
import { Authenticator } from "../../utils/authenticator"
import { HomePage } from "../../pages/home.page"
import { VetSearchPage } from "../../pages/vet.search.page"
import { VetListPage } from "../../pages/vet.list.page"
import data from "../../properties/data.json"

const WAITING_TIME = 10000

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US14",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should search pets by user", async ({ page }) => {
  const authenticator = new Authenticator(page)
  const homePage = new HomePage(page)
  const vetSearchPage = new VetSearchPage(page)
  const vetListPage = new VetListPage(page)
  authenticator.login(`${process.env.ADMIN_USERNAME}`, `${process.env.ADMIN_PASSWORD}`)
  await homePage.clickOnSearch()
  await expect(page).toHaveTitle(data.searchTitle, { timeout: WAITING_TIME })
  await vetSearchPage.fillSearchByUser()
  await expect(page).toHaveTitle(data.petListTitle, { timeout: WAITING_TIME })
  await expect(vetListPage.getPetName().first()).toBeVisible()
  await expect(vetListPage.getPetBirthdate().first()).toBeVisible()
  await expect(vetListPage.getPetBreed().first()).toBeVisible()
  await expect(vetListPage.getPetDewormed().first()).toBeVisible()
  await expect(vetListPage.getPetSterilized().first()).toBeVisible()
  await expect(vetListPage.getPetVaccinated().first()).toBeVisible()
})
