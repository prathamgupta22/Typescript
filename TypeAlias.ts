// Basic type alias
// Creating a type alias for string
type MyString = string;

// Using the type alias
let myVar: MyString = "Hello, TypeScript!";
console.log(myVar);

// Union type alias
// Creating a type alias for a union type
type Status = "success" | "error" | "pending";

// Using the type alias
let currentStatus: Status = "success";
console.log(currentStatus);

//object alias type

type Point = {
  x: number;
  y: number;
};
// Using the type alias
let myPoint: Point = { x: 10, y: 20 };

// FUNCTION TYPE ALIAS
// Creating a type alias for a function
type GreetFunction = (name: string) => string;

// Using the type alias
let greet: GreetFunction = (name) => `Hello, ${name}!`;

export {};
