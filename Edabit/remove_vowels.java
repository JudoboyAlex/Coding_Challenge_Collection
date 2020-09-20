public static String removeVowels(String s) {
    String[] arr = s.split("");
    for(int i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase().equals("a") || arr[i].toLowerCase().equals("e") || arr[i].toLowerCase().equals("i") || arr[i].toLowerCase().equals("o") || arr[i].toLowerCase().equals("u")     ) {
            arr[i] = "";
        }
    }
    return String.join("", arr);
}

// Better Solution#1
public class Program {
    public static String removeVowels(String s) {
      return s.replaceAll("[aAeEiIoOuU]","");
    }
}