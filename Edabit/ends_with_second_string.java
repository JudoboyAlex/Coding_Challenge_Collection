public class Challenge {
    public static boolean checkEnding(String str1, String str2) {
      if(str1.endsWith(str2)){
        return true;
      } else {
        return false;
      }
    }
  }

// Better Solution#1

public class Challenge {
    public static boolean checkEnding(String str1, String str2) {
      return str1.endsWith(str2);
    }
  }