const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};

/*
Complexity Analysis
Let m,n be the lengthes of the two input strings str1 and str2.

Time complexity: O(m+n)

We need to compare the two concatenations of length O(m+n), it takes O(m+n) time.
We calculate the GCD using binary Euclidean algorithm, it takes log(m⋅n) time.
To sum up, the overall time complexity is O(m+n).
Space complexity: O(m+n)
We need to compare the two concatenations of length O(m+n).
*/
