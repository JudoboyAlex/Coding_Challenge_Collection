class Main {
 
    public static void main(String[] args) {
      System.out.println(Main.nameShuffle("Hello World"));
    };
  
      public static String nameShuffle(String s) {
          String firstWord = s.substring(0, s.indexOf(" "));
          String secondWord = s.substring(s.indexOf(" ") + 1); // + 1 to skip the space
          String swappedWords = secondWord + " " + firstWord;  //Add a comma and space
          return swappedWords;
      }
  }

//   Better Solution#1
public class Program {
    public static String nameShuffle(String s) {
      String[] names = s.split(" ");
      return names[1] + " " + names[0];
    }
}