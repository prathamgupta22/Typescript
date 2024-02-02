const User = {
  name: "hitesh",
  email: "p@email.com",
  iActive: true,
};

function createUser({ name, ispaid }: { name: string; ispaid: boolean }) {
  return { name, ispaid };
}

let newUser = { name: "Ggg", ispaid: true };
let example = createUser(newUser);

console.log(example);

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
