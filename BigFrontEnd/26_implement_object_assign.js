function objectAssign(target, ...sources) {
  if (target === undefined || target === null) {
    throw "err";
  }

  target = Object(target);

  sources.forEach((source) => {
    if (source === undefined || source === null) {
      return;
    }
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  });

  return target;
}

console.log(objectAssign({ b: 4 }, { a: 1, b: 2 }, { d: 9 }));
