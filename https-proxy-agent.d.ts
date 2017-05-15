declare module "https-proxy-agent" {
	import * as url from 'url';
	import * as tls from 'tls';
	import * as https from 'https';

	interface IHttpsProxyAgentOptions extends tls.ConnectionOptions {
		host: string;
		port: number;
		auth?: string;
		secureProxy?: boolean;
		headers?: { [key: string]: any };
	}

	function proxy(proxy: string | IHttpsProxyAgentOptions): https.Agent;

	namespace proxy { }

	export = proxy;
}
