public class Challenge {
	public static int triangle(int n) {
    int i;
    int j = 1;
		for(i = 2; i <= n; i ++){
      j = j + i;
    }
    return j;
  }
}

// Better Solution#1
public class Challenge {
	public static int triangle(int n) {
		return n*(1+n)/2;
  }
}