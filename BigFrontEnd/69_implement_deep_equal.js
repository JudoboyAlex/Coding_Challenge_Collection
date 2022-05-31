function isEqual(a, b, seen = new Map()) {
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object") return a === b;
  if (seen.has(a)) return true;

  seen.set(a, true);
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const k of keys) {
    if (!isEqual(a[k], b[k], seen)) return false;
  }

  return true;
}
