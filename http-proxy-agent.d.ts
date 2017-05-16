declare module "http-proxy-agent" {
	import * as url from 'url';
	import * as http from 'http';

	class HttpProxyAgent extends http.Agent {
		constructor(proxy: string);
		constructor(options: url.Url);
	}

	namespace HttpProxyAgent { }

	export = HttpProxyAgent;
}
