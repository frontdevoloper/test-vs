"use strict";

const user = {
  name: "Judah",
  age: 22746.22222,
  userArrCharName: [],
  printData() {
    this.userArrCharName = this.name.split("");
    console.log(
      `Name: ${this.name} and age: ${this.age} And by letters name: ${this.userArrCharName}`
    );
  },
};

user.printData();
