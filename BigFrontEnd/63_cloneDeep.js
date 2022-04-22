function cloneDeep(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const output = Array.isArray(obj) ? [] : {};
  map.set(obj, output);
  const keys = [...Object.getOwnPropertySymbols(obj), ...Object.keys(obj)];

  for (const key of keys) {
    const val = obj[key];
    output[key] = cloneDeep(val, map);
  }

  return output;
}

