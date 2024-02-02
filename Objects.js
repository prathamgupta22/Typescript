var User = {
    name: "hitesh",
    email: "p@email.com",
    iActive: true,
};
function createUser(_a) {
    var name = _a.name, ispaid = _a.ispaid;
    return { name: name, ispaid: ispaid };
}
var newUser = { name: "Ggg", ispaid: true };
var example = createUser(newUser);
console.log(example);
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
