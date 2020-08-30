public class ReverseOrder {
    public static String reverse(final String str) {
              StringBuilder input1 = new StringBuilder(); 
    
          // append a string into StringBuilder input1 
          input1.append(str); 
    
          // reverse StringBuilder input1 
          input1 = input1.reverse(); 
    
          // print reversed String 
          return input1.toString();
    }
}


// Better Solution#1
public class ReverseOrder {
    public static String reverse(final String str) {
      return new StringBuilder(str).reverse().toString();
    }
  }