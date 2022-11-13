var floodFill = function (image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if (
    image[sr] === undefined ||
    image[sr][sc] === undefined ||
    image[sr][sc] !== oldColor ||
    image[sr][sc] === newColor
  )
    return image;
  image[sr][sc] = newColor;
  floodFill(image, sr + 1, sc, newColor, oldColor);
  floodFill(image, sr - 1, sc, newColor, oldColor);
  floodFill(image, sr, sc + 1, newColor, oldColor);
  floodFill(image, sr, sc - 1, newColor, oldColor);
  return image;
};

// Complexity Analysis

// Time Complexity: O(N), where N is the number of pixels in the image. We might process every pixel.

// Space Complexity: O(N), the size of the implicit call stack when calling dfs.