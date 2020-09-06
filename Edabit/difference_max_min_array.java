import java.util.Arrays;

public class Challenge {
    public static void main(String[] args){
        System.out.println(Challenge.differenceMaxMin(new int[] {10, 4, 1, 4, -10, -50, 32, 21}));
    }

    public static int differenceMaxMin(int[] arr) {
        int min = Arrays.stream(arr).min().getAsInt();
        int max = Arrays.stream(arr).max().getAsInt();
        return max - min;
    }
}

// Better Solution #1
import java.util.Arrays;

public class Challenge {
	public static int differenceMaxMin(int[] arr) {
		Arrays.sort(arr);
		return arr[arr.length-1]-arr[0];
	}
}