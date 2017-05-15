declare module "http-proxy-agent" {
	import * as url from 'url';
	import * as http from 'http';

	function proxy(options: string | url.URL): http.Agent;

	namespace proxy {}

	export = proxy;
}
