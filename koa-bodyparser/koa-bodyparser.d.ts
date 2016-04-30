import koa = require("koa");

/**
 * Augment the koa Request to include the parsed body
 */
declare module "koa" {
	interface Request {
		body: any;
	}
}

interface BodyParserOptions {
	/**
	 * Requested encoding. Default is utf-8
	 */
	encode: string;

	/**
	 * limit of the urlencoded body. If the body ends up being larger, a 413 error is returned. Default is 56kb
	 */
	formLimit: string;

	/**
	 * limit of the json body. Default is 1mb.
	 */
	jsonLimit: string;

	/**
	 * when set to true, JSON parser will only accept arrays and objects. Default is true.
	 */
	strict: boolean;

	/**
	 * custom json request detection function. Default is null.
	 */
	detectJSON: (ctx: koa.Context) => boolean;

	/**
	 * Support additional content types.
	 */
	extendTypes: {[type: string]: string[]};

	/**
	 * custom error handler.
	 */
	onerror: (err: any, ctx: koa.Context) => void;
}

declare var bodyParser: (options?: BodyParserOptions) => (ctx: koa.Context, next: Function) => any;

export = bodyParser;
