function waitForAll(promises) {
  // Start with an empty array.
  let arrayPromise = Promise.resolve([]);

  for (const promise of promises) {
    /* Build a new promise holding an array that contains all of the old
     * array elements, plus the one from this promise. */
    arrayPromise = arrayPromise.then((array) =>
      promise.then((value) => [...array, value])
    );
  }

  return arrayPromise;
}
