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

export class PrivacyPolicyPage {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  getWelcomeTitle() {
    return this.page.getByRole("heading", { name: "Welcome to Vetlog Privacy Policy" })
  }

  getCollectTitle() {
    return this.page.getByRole("heading", { name: "Information We Collect" })
  }

  getUseTitle() {
    return this.page.getByRole("heading", { name: "Use of Your Information" })
  }

  getDisclosureTitle() {
    return this.page.getByRole("heading", { name: "Disclosure of Your Information" })
  }

  getSecurityTitle() {
    return this.page.getByRole("heading", { name: "Security of Your Information" })
  }
}
