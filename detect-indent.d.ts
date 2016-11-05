declare module "detect-indent" {

	function di(text: string): { 
		amount: number;
		type: string;
		indent: string;
	}

	namespace di { }
	export = di;
}
