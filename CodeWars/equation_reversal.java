// Was Not Able to Solve
import java.util.Collections;
import java.util.Arrays;
import java.util.List;

class Solution {    
    public static String solve(String eq) {
        List<String> list = Arrays.asList(eq.split("(?=\\b)"));
        Collections.reverse(list);
        return String.join("", list);
    }
}

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"