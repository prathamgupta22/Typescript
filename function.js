"use strict";
// //function
// function addTwo(a: number) {
//   return a + 2;
// }
// function getUpper(s: string) {
//   return s.toUpperCase();
// }
// function signUpuser(name: String, email: string, ispaid: boolean) {
//   console.log("nanana");
// }
// console.log(addTwo(2));
// // console.log(getUpper());
Object.defineProperty(exports, "__esModule", { value: true });
// // console.log(signUpuser("pg", "p@")); //it will throw error as in ts we have to show all fields
// function Loginuser(name: String, email: string, ispaid: boolean = false) {
//   // in ts we can pass values by default hence the all arguments error get solved
//   console.log("nanana");
// }
// console.log(Loginuser("p", "g"));
// function getVaule(myval: number): boolean {
//   if (myval > 2) {
//     return true;
//   }
//   return false;
//   // return "ok"; //it will give error as return is set to boolean
// }
// const getHello = (s: string): string => {
//   return "";
// };
// //better way of defining type of return from function
// const heroes = ["iron man", "thor", "spidey"];
// let name = heroes.map((hero): string => {
//   return `our hero is ${hero}`;
// });
// console.log(name);
function consoleerror(errmsg) {
  console.log(errmsg);
}
console.log(consoleerror("na"));
function handleerror(errormsg) {
  throw new Error(errormsg);
}
console.log(handleerror("hey"));
