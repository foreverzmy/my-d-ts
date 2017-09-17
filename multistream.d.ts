declare module "multistream" {

	import { Stream } from 'stream';

	type TLazyStream = () => Stream;
	type TFactory = (cb?: (err: Error, stream: Stream) => void) => void;

	function multistream(streams: (TLazyStream | Stream)[] | TFactory): Stream;

	namespace multistream {
		function obj(streams: (TLazyStream | Stream)[] | TFactory): Stream;
	}

	export = multistream;
}
