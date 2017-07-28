declare module "got" {
	import * as stream from 'stream';
	import * as http from 'http';

	namespace got {
		export type GotRetryFunction = (retry: number, error: Error) => number;

		export interface IOptions extends http.RequestOptions {
			body?: string | Buffer | stream.Stream;
			encoding?: string;
			form?: boolean;
			json?: boolean;
			query?: string | object;
			retries?: number | GotRetryFunction;
			timeout?: number;
			followRedirect?: boolean;
			decompress?: boolean;
			useElectronNet?: boolean;
		}

		export interface IGotStream extends stream.Stream {
			on(event: 'request', listener: (req: http.ClientRequest) => void): this;
			on(event: 'response', listener: (res: http.IncomingMessage) => void): this;
			on(event: 'redirect', listener: (res: http.IncomingMessage) => void, nextOptions?: IOptions): this;
			on(event: 'error', listener: (err: Error, data: object, res: http.IncomingMessage) => void): this;
		}

		export interface Api {
			(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>

			stream(url: string | IOptions, options?: IOptions): IGotStream;

			get(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
			post(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
			put(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
			patch(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
			head(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
			delete(url: string | IOptions, options?: IOptions): Promise<http.IncomingMessage>;
		}
	}

	const got: got.Api;

	export = got;
}
