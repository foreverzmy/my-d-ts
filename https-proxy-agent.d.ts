declare module "https-proxy-agent" {
	import * as url from 'url';
	import * as https from 'https';

	function proxy(options: string | url.URL): https.Agent;

	namespace proxy {}

	export = proxy;
}
