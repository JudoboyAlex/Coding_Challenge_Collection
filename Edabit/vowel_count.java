public class Vowels {
    public static int getCount(String str) {
      int vowelsCount = 0;
      // Your code here
      String strLow = str.toLowerCase();
      for(char c : strLow.toCharArray()) {
        // process c
        if (c == 'a' || 
        c == 'e' || 
        c == 'i' || 
        c == 'o' || 
        c == 'u'){
          vowelsCount++;
        }
      }
      return vowelsCount;
    }
  }

//   Better Solution#1
public class Vowels {
    public static int getCount(String str) {
      return str.replaceAll("[^aeiouAEIOU]", "").length();
    }
  }