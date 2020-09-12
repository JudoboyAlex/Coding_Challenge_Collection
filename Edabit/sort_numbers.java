import java.util.Arrays;

public class Challenge {
    public static void main(String[] args){
        System.out.println(Arrays.toString(sortNumsAscending(new int[]{1, 2, 10, 50, 5})));
    }

    public static int[] sortNumsAscending(int[] nums) {
        Arrays.sort(nums);
        return nums;
    }

}

// Other Solution#1
import java.util.Arrays;

public class Program {
    public static int[] sortNumsAscending(int[] nums) {
        return Arrays.stream(nums).sorted().toArray();
    }
}