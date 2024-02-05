"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "5";
var pratham = { user: "pg", id: 1 };
pratham = { username: "pk", id: 1 };
console.log(pratham);
// function getDBID(id: number | string) {
//   //making api calls
//   console.log(`Db id is ${id}`);
// }
// console.log(getDBID(3));
// console.log(getDBID("#"));
// function getDBID(id: number | string) {
//   //ts is smart as it will thorwo error because number cannt be lowercse
//   id.toLowerCase();
// }
function getDBID(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
}
console.log(getDBID("neha"));
