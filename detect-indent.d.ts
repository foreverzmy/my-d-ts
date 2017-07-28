declare module "detect-indent" {

	function di(text: string): {
		/**
		 * Amount of indentation.
		 */
		amount: number;
		/**
		 * Type of indentation. Possible values are "tab", "space" or "null" if no indentation is detected.
		 */
		type: string;
		/**
		 * Actual indentation.
		 */
		indent: string;
	}

	namespace di { }
	export = di;
}
