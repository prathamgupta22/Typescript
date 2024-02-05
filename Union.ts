let score: string | number = 33;

score = 44;
score = "5";

type User = {
  user: string;
  id: number;
};

type admin = {
  username: String;
  id: number;
};

let pratham: User | admin = { user: "pg", id: 1 };

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

function getDBID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  }
}
console.log(getDBID("neha"));

//ARRAY

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, "2", 3, true];

let pi: 3.14 = 3.14;
// pi = 3.145 //error as now you cant change the value

export {};
