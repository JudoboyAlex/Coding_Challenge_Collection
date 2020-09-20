public class Program {
	public static String intOrString(Object var) {
		String strTrue;
		if (var instanceof String)
			{
				strTrue = "str";
			} else {
			strTrue = "int";
		}
		return strTrue;
	}
}

// Other Solution#1
public class Program {
	public static String intOrString(Object var) {
		return var instanceof String ? "str" : "int";
	}
}