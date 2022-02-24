import { NavigationTest } from "../testobjects/navigationTest";
import { LoginTest } from "../testobjects/loginTest";
import { SignUpTest } from "../testobjects/signUpTest";

class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.loginTest = new LoginTest();
    this.signUpTest = new SignUpTest();
  }
}

export const tests = new Tests();
