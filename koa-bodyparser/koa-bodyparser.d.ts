import koa = require("koa");

declare module "koa" {
	interface Request {
		body: string;
	}
}

declare var bodyParser: () => any;

export = bodyParser;
