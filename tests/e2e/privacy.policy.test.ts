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
import { HomePage } from "../pages/home.page"
import { PrivacyPolicyPage } from "../pages/privacy.policy.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/issues/379",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should view privacy policy", async ({ page }) => {
  const homePage = new HomePage(page)
  const privacyPolicyPage = new PrivacyPolicyPage(page)
  await homePage.clickOnPrivacyPolicy()
  await expect(page).toHaveTitle(data.privacyPolicyTitle)
  await expect(privacyPolicyPage.getWelcomeTitle()).toBeVisible()
  await expect(privacyPolicyPage.getCollectTitle()).toBeVisible()
  await expect(privacyPolicyPage.getUseTitle()).toBeVisible()
  await expect(privacyPolicyPage.getDisclosureTitle()).toBeVisible()
  await expect(privacyPolicyPage.getSecurityTitle()).toBeVisible()
})
