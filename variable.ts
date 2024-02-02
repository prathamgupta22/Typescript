let greeting: string = "hello world";

// greeting = 6
// typescript wont allow datatype change

greeting.toLowerCase();
console.log(greeting);

//number
const n = 35.6664;
n.toFixed();
// work same as giving type
const isLoggedIn: boolean = false;

//function type checking and any
let hero: string;
function gethero() {
  return hero;
}
function gethero2() {
  return true;
}
hero = gethero();
// We can see hero is showing red line or error because herp is defined as string we cannot put BOOLEAN VALUE
hero = gethero2();

//as data type is defined any it will accept any data type we should not
// use any because it is a bad code practice
let hero2: any;
hero2 = gethero();
hero2 = gethero2();

export {};
