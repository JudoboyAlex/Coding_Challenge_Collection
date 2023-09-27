const objA = {
    type: "A",
    foo(){console.log(this.type)}
}

const objB = {
    type: "B",
    foo: objA.foo,
    bar: () => objA.foo(),
    baz(){ objA.foo() }
}

objB.foo(); //B
objB.bar(); //A
objB.baz(); //A