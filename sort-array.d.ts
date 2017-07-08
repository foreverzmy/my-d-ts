declare module "sort-array" {

	interface IOptions {
		[prop: string]: string[];
	}

	/**
	 * Sort an array of objects by any property value, at any depth, in any custom order.
	 *
	 * @param recordset Input array of objects
	 * @param columnNames One or more property expressions to sort by, e.g. 'name' or 'name.first'
	 * @param customOrder Custom sort order definitions. An object where each key is the property expression and the value is an array specifying the sort order.
	 */
	function sortArray<T>(recordset: ArrayLike<T>, columnNames: string | string[], customOrder?: IOptions): T[];

	namespace sortArray { }

	export = sortArray;

}
