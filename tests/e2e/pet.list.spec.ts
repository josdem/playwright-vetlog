import { test, expect, Page } from "@playwright/test";
import { Authenticator } from "../utils/authenticator";
import { PetListPage } from "../pages/pet.list.page";
import { HomePage } from "../pages/home.page";
import data from "../properties/data.json";

let page: Page
let homePage: HomePage
let authenticator: Authenticator
const WAITING_TIME = 5000

test.beforeAll(async ({ browser }) => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US7",
  });
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  });
  page = await browser.newPage()
  homePage = new HomePage(page)
  authenticator = new Authenticator(page)
  authenticator.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
});

test("should validate pet details are visible in adoption list", async ({ page }) => {
  const petListPage = new PetListPage(page);
  
  // Navigate to the List page by clicking the List main menu link
  await homePage.clickOnListPets();
  await expect(page).toHaveTitle(data.petListTitle)

  // Validate the pet details are visible
  await expect(petListPage.getPetName().first()).toBeVisible();
  await expect(petListPage.getPetBreed().first()).toBeVisible();
  await expect(petListPage.getPetDeworming().first()).toBeVisible();
  await expect(petListPage.getPetSterilized().first()).toBeVisible();
  await expect(petListPage.getPetVaccinated().first()).toBeVisible();
});
