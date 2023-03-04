var furthestBuilding = function (heights, bricks, ladders) {
  const heap = new MaxPriorityQueue();

  let i;

  for (i = 0; i < heights.length - 1; i++) {
    if (heights[i] >= heights[i + 1]) continue;

    const diff = heights[i + 1] - heights[i];

    // if not enough bricks are left
    if (diff > bricks) {
      // if not enough ladders are left
      if (ladders === 0) break;

      // if the max bricks used at once > current jump
      // replace the max bricks with a ladder and use those bricks for current jump
      // else use ladder for the current jump
      if (!heap.isEmpty() && heap.front().element > diff) {
        bricks += heap.dequeue().element - diff;
        heap.enqueue(diff);
      }
      ladders--;
    } else {
      // greedly use bricks when possible
      bricks -= diff;
      heap.enqueue(diff);
    }
  }
  return i;
};

/*
Complexity Analysis

Let NNN be the length of the heights array. Unlike approach 1, it doesn't really make sense to analyze approach 2 in terms of the number of ladders or bricks we started with.

Time complexity : O(Nlog⁡N).

Same as Approach 1. In the worst case, we'll be adding and removing up to N−1N climbs from the heap. Heap operations are O(logN) in the worst case.

Space complexity : O(N).

Same as Approach 1. In the worst case, there'll be N−1N climbs in the heap.
*/