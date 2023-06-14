// #1 async/await loop
const fetchListWithAmount = async (amount = 5) => {
  const result = [];

  while (result.length <= amount) {
    const lastItem = result[result.length - 1];
    const { items } = await fetchList(lastItem?.id);
    result.push(...items);
    if (!items.length) {
      break;
    }
  }

  return result.slice(0, amount);
};

/**
 * Using recursion and Promise
 */
function fetchListWithAmount(amount = 5) {
  return new Promise((resolve) => {
    const result = [];
    getItems();

    function getItems(cursor) {
      fetchList(cursor).then(({ items }) => {
        result.push(...items);
        if (items.length === 0 || items.length >= amount) {
          return resolve(result.slice(0, amount));
        }
        getItems(items[items.length - 1].id);
      });
    }
  });
}