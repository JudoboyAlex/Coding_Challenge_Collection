public class Program {
    public static String doubleChar(String s) {
      String doubleLetters = "";
      for(char c : s.toCharArray()) {
        doubleLetters = doubleLetters + String.valueOf(c) + String.valueOf(c); 
    }
    return doubleLetters;
    }
}

// Better Solution #1
public class Program {
    public static String doubleChar(String s) {
      return s.replaceAll("(.{1})", "$1$1");
    }
}

// Other Solution #1
public class Program {
    public static String doubleChar(String s) {
      StringBuilder ns = new StringBuilder();
      
      for( int i = 0; i<s.length();i++){
        ns.append(s.charAt(i)).append(s.charAt(i));
      }
      return ns.toString();
    }
}