import { parseGherkinMessageStream } from "@cucumber/cucumber";
import { pages } from "../support/pages";

export class NavigationTest {
  async openOracleProfilePage() {
    await browser.url("/");
    await pages.basePage
      .getCreateAccountButton()
      .waitForDisplayed({ timeout: 5000 });
  }

  async pressSignInButton() {
    await pages.basePage.getSignInButton().click();
  }

  async PressCreateAccountButton() {
    await pages.basePage.getCreateAccountButton().click();
    await browser.switchWindow("Oracle | Create Account");
  }

  async PressSignUpButton() {
    await pages.createAccountPage.getSignupButton().click();
  }
}
