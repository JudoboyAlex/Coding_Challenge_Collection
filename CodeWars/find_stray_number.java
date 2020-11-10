import java.util.HashMap;
import java.util.Map;

class Solution {
    static int stray(int[] arr) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            if (m.containsKey(arr[i])) {
                m.put(arr[i], m.get(arr[i]) + 1);
            } else {
                m.put(arr[i], 1);
            }
        }
        int num = 0;
        // Traverse through map only and 
        // using for-each loop for iteration over Map.entrySet() 
        for (Map.Entry<Integer, Integer> x : m.entrySet()) {

            if (x.getValue() == 1) {
                num = x.getKey();
            }
        }

        return num;
    }
}

// Better Solution
import java.util.*;

class Solution {
  static int stray(int[] numbers) {
    Arrays.sort(numbers);
    return numbers[0] == numbers[1] ? numbers[numbers.length-1] : numbers[0];
  }
}