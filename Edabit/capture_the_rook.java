public class Challenge {
	public static boolean canCapture(String[] rooks) {
		char letter1 = rooks[0].charAt(0);
    char letter2 = rooks[1].charAt(0);
    char num1 = rooks[0].charAt(1);
    char num2 = rooks[1].charAt(1);

    if ( letter1 == letter2 || num1 == num2 ){
      return true;
    } else {
      return false;
    }
	}
}


// canCapture(["A8", "E8"]) ➞ true

// canCapture(["A1", "B2"]) ➞ false

// canCapture(["H4", "H3"]) ➞ true

// canCapture(["F5", "C8"]) ➞ false

// Better Solution#1
public class Challenge {
	public static boolean canCapture(String[] rooks) {
		return ((rooks[0].charAt(0) == rooks[1].charAt(0)) || 
						(rooks[0].charAt(1) == rooks[1].charAt(1)));
	}
}