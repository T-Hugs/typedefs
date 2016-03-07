import koa = require("koa");

declare interface KoaOptions {

	/**
	 * Prefix for all routes
	 */
	prefix: string;

	routerPath: string;

	/**
	 * List of methods to support
	 */
	methods: string[];
}

declare class Router {
	/**
	 * Constructor
	 * @param opts: options for Router
	 */
	new(opts?: KoaOptions): Router;

	/**
	 * Route a GET request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public get(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a GET request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public get(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a HEAD request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public head(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a HEAD request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public head(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a OPTIONS request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public options(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a OPTIONS request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public options(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a PUT request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public put(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a PUT request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public put(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a POST request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public post(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a POST request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public post(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a PATCH request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public patch(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a PATCH request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public patch(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a DELETE request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public delete(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a DELETE request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public delete(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a DELETE request
	 * @param name: Name of this route
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public del(name: string, path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	/**
	 * Route a DELETE request
	 * @param path: Path to match
	 * @param middleware: middleware(s) for route
	 * @return Router
	 */
	public del(path: string, ...middleware: { (ctx: koa.Context, next: () => any): any }[]): Router;

	public param(param: any, middleware: any, ...params: any[]): Router;
}

export = Router;
