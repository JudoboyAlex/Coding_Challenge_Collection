import java.util.Arrays;
public class Solution {


public static boolean isAscOrder(int[] arr) {

        int[] copyArr = arr.clone();
        Arrays.sort(arr);
        boolean flag = true;

        for( int i = 0; i < copyArr.length; i++ ){
            if(copyArr[i] != arr[i]){

                flag = false;
                break;
            } else {
                flag = true;
            }
        }

        return flag;
    }

}

// Better Solution
public class Solution {

  public static boolean isAscOrder(int... arr) {
      for (int i = 1; i < arr.length; i++) {
          if (arr[i] < arr[i - 1]) return false;
      }
      return true;
  }

}

// Better Solution
import java.util.Arrays;

public class Solution {

    public static boolean isAscOrder(int[] arr) {
        int[] copyArr = Arrays.copyOf(arr, arr.length);
        Arrays.sort(copyArr);
        
        return Arrays.equals(copyArr, arr);
    }

}