export async function safeAsync<T, E = Error>(promise: Promise<T>): Promise<[null, T] | [E, null]> {
	try {
		const result = await promise;
		return [null, result];
	} catch (err) {
		return [err as E, null];
	}
}

export function safeSync<T, E = Error>(func: () => T): [null, T] | [E, null] {
	try {
		const result = func();
		return [null, result];
	} catch (err) {
		return [err as E, null];
	}
}
