import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given("User has opened the Oracle Profile page", async function () {
  await tests.navigationTest.openOracleProfilePage();
});

When("User presses the sign in button", async function () {
  await tests.navigationTest.pressSignInButton();

  //used for testing
  //console.log("User presses the sign in button");
});

When("User presses the create account button", async function () {
  await tests.navigationTest.PressCreateAccountButton();
});

When("User presses the Sign Up button", async function () {
  await tests.navigationTest.PressSignUpButton();
});

Then("User is redirected to Check Your Email page", async function () {
  await tests.signUpTest.assertCheckEmailPage();
});
