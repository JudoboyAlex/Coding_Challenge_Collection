const fuzzySearch = function (str, query) {
  // convert the query and str
  // for case-insensitive search
  str = str.toLowerCase();
  query = query.toLowerCase();
  // use two variables to track the
  // current character
  // and last searched position in the string
  let i = 0,
    lastSearched = -1,
    current = query[i];
  while (current) {
    // if the character is not present
    // return false
    if (!~(lastSearched = str.indexOf(current, lastSearched + 1))) {
      return false;
    }
    current = query[++i];
  }
  // if the search completes
  // return true
  return true;
};

const strArr = [
  "Doomsayer",
  "Doomguard",
  "Doomhamer",
  "Bane of Doom",
  "Fearsome Doomguard",
  "Dr. Boom",
  "Majordomo",
  "Shadowbomber",
  "Shadowform",
  "Goldshire footman",
];
const query = "an";
fuzzySearch(strArr, query);
// ["Bane of Doom", "Goldshire footman"]
