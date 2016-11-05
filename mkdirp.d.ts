declare module "mkdirp" {

	function mkdirp(dir: string, callback: (err: Error, made: string) => void): void;
	function mkdirp(dir: string, options: mkdirp.IOptions, callback: (err: Error, made: string) => void): void;

	namespace mkdirp {
		interface IOptions {
			mode?: string;
		}

		function sync(dir: string, options?: mkdirp.IOptions): string;
	}

	export = mkdirp;
}
