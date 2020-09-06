public class Challenge {
    public static void main(String[] args){
        System.out.println(Arrays.toString(Challenge.hashPlusCount("###++")));
    }

    public static int [] hashPlusCount(String s) {
        int countHash = 0;
        int countPlus = 0;
        int arr[] = new int[2];
        for(char c : s.toCharArray()) {
            if( c == '#'){
                countHash++;
            } else {
                countPlus++;
            }
        }
        arr[0] = countHash;
        arr[1] = countPlus;
        return arr;
    }
}

// Better Solution#1
public class Challenge {
	public static int[] hashPlusCount(String s) {
		return new int[] {s.replace("+","").length(),s.replace("#","").length()};
	}
}