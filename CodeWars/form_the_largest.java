// My Solution
import java.util.Arrays;
import java.util.Collections;

public static long maxNumber(long n) {
  String str = String.valueOf(n);

  String[] arr = str.split("");
  Long finalArr[] = new Long[arr.length];

  for (int i = 0; i < arr.length; i++) {
      finalArr[i] = Long.valueOf(arr[i]);
  }
  Arrays.sort(finalArr, Collections.reverseOrder());
  String strArr[] = new String[finalArr.length];
  for (int i = 0; i < finalArr.length; i++) {
      strArr[i] = String.valueOf(finalArr[i]);
  }
  String res = String.join("", strArr);
  Long ans = Long.valueOf(res);
  return ans;
}

// Better Solution#1
import java.util.stream.Collectors;
import java.util.Arrays;

public class Solution {
    public static long maxNumber(long n) {
    return Long.parseLong(
            Arrays.stream((n + "")
                    .split(""))
                    .sorted((x,y)->y.compareTo(x))
                    .collect(Collectors.joining())
                    );
    }
}

// Better Solution#2
import java.util.*;

public class Solution {
    public static long maxNumber(long n) {
        char[] ary = (""+n).toCharArray();  
        Arrays.sort(ary); 
        return new Long(new StringBuilder(new String(ary)).reverse().toString());
    }
}