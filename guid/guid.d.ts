declare module Guid {
	export function raw(): string;
	export function create(): Guid;
	export function isGuid(guid: string | Guid): boolean;
	export var EMPTY: Guid;
}

declare class Guid {
	value: string;
	equals: (other: string | Guid) => boolean;
	isEmpty: () => boolean;
	toJSON: () => string;
	toString: () => string;
}

export = Guid;
