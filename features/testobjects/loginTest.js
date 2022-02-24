import { pages } from "../support/pages";

export class LoginTest {
  async fillEmailField(email) {
    await pages.basePage.getEmailInputField().setValue(email);
  }

  async fillPasswordField(password) {
    await pages.basePage.getPasswordInputField().setValue(password);
    //await browser.pause(3000)
  }

  async assertInvalidCredentials() {
    await pages.basePage
      .getInvalidCredentialMsg()
      .waitForDisplayed({ timeout: 5000 });
    //await expect(await pages.basePage.getInvalidCredentialMsg()).toHaveText("Invalid username and/or password.")
    expect(await pages.basePage.getInvalidCredentialMsg().getText()).toEqual(
      "Invalid username and/or password."
    );
  }
}
