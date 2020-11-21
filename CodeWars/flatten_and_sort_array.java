// My Solution
import java.util.*;

public static int[] flattenAndSort(int[][] array) {
  List<Integer> arr = new ArrayList<Integer>();
  for( int i = 0; i < array.length; i++){
      for(int j = 0; j < array[i].length; j++){
          arr.add(array[i][j]);
      }
  }
  Collections.sort(arr);
  int[] finalArr = arr.stream().mapToInt(i -> i).toArray();
  return finalArr;
}

// Better Solution#1
import java.util.Arrays;

public static int[] flattenAndSort(int[][] array) {   
  return Arrays.stream(array).flatMapToInt(Arrays::stream).sorted().toArray();    
}

// Better Solution#2
import java.util.stream.IntStream;
import java.util.stream.Stream;

public static int[] flattenAndSort(int[][] array) {   
  return Stream.of(array)
      .filter(it -> it.length > 0)
      .flatMapToInt(IntStream::of)
      .sorted().toArray();
}