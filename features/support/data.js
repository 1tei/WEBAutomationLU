import UserData from "./data/UserData";

class Data {
  constructor() {
    this.userData = new UserData();
  }
}

export const data = new Data();
