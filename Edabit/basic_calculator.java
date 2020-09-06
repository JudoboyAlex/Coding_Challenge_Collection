public class Challenge {
	public static int calculator(int num1, char operator, int num2) {
        int result = 0;
        if( operator == '+'){
           result = num1 + num2;
        } else if (
                operator == '-'
        ){
            result = num1 - num2;
        } else if (
                operator == '*'
        ){
            result = num1 * num2;
        } else if(
                operator == '/' && num2 == 0
        ){
            result = 0;
        } else if(
                operator == '/'
        ) {
            result = num1 / num2;
        }
        return result;
    }
}

// Better Solution#1
public class Challenge {
	public static int calculator(int num1, char operator, int num2) {
		switch(operator) {
			case '+': return num1 + num2;
			case '-': return num1 - num2;
			case '*': return num1 * num2;
			case '/': return (num2 == 0) ? 0 : num1/num2;
		}
		return 0;
  }
}