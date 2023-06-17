// Solution#1
function undefinedToNull(arg) {
  if (Array.isArray(arg)) {
    return arg.map(undefinedToNull);
  }

  if (typeof arg !== "object") {
    return arg === undefined ? null : arg;
  }

  for (let key in arg) {
    arg[key] = undefinedToNull(arg[key]);
  }

  return arg;
}

// Solution#2
function undefinedToNull(arg) {
  if (typeof arg !== "object" || arg === null) {
    return arg ?? null;
  }

  for (const [key, value] of Object.entries(arg)) {
    if (value === undefined) {
      arg[key] = null;
    } else {
      arg[key] = undefinedToNull(value);
    }
  }

  return arg;
}