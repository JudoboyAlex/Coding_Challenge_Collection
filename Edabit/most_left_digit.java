// Wasn't able to solve
class Main {
 
    public static void main(String[] args) {
      System.out.println(Main.leftDigit("vfvdf3vfd35"));
    };
  
        public static int leftDigit(String str) {	
          for(char c : str.toCharArray()){
              if(Character.isDigit(c))
                  return Character.getNumericValue(c);
          }
          return 0;
    }
  }

//   Alternative Solution#1
  public class Challenge {
	public static int leftDigit(String str) {
			for (char c : str.toCharArray()) {
					if (Character.isDigit(c)) 
						return Integer.parseInt(Character.toString(c));
			}
			return 0;		
  }
}

//   Alternative Solution#2
public class Challenge {
	public static int leftDigit(String str) {
	   return Integer.valueOf(str.replaceAll("\\D+","").substring(0,1));
  }
}