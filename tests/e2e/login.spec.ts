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
import { LoginPage } from "../pages/login.page"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US3",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should not login due to wrong username", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login("wrongUsername", `${process.env.VETLOG_PASSWORD}`)
  await expect(page.getByTestId("loginErrorMessage")).toBeVisible()
})

test("should not login due to wrong password", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(`${process.env.VETLOG_USERNAME}`, "wrongPassword")
  await expect(page.getByTestId("loginErrorMessage")).toBeVisible()
})

test("should login as a user", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
  await expect(page.getByRole("link", { name: /Logout/ }).first()).toBeVisible()
})
