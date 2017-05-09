declare module "p-locate" {
	type TesterFuntion = <T>(element: T) => Promise<boolean> | boolean;

	interface IOptions {
		/**
		 * Number of concurrently pending promises returned by tester.
		 */
		concurrency?: number;
		/**
		 * Disable this to improve performance if you don't care about the order.
		 */
		preserveOrder?: boolean;
	}

	function pLocate<T>(input: Iterable<T>, tester: TesterFuntion, options?: IOptions): any;

	namespace pLocate { }

	export = pLocate;
}
