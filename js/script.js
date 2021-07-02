"use strict";

let user = {
  userName: "Matt",
  userAge: 16,
  adress: "Port Dandre",
  compane: "Schimmel - Heaney",
  printData: (
    name = "Rollin",
    lastName = "Goldner",
    secondName = "Hector Treutel"
  ) => {
    console.log(`Name: ${name}, LastName: ${lastName}`);
  },
};

user.printData();
