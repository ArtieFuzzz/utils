export { default as StopWatch } from './lib/StopWatch'

/**
 * Checks to see if an Object is empty or not
 * @params obj Value to check
 */
export function isEmptyObject(obj: Record<string, unknown>) {
	return !Object.keys(obj).length ? false : true
}

/**
 * Checks if `obj` is an Object
 * @params obj Value to check
 */
export function isObject(obj: any) {
	return !Array.isArray(obj) && obj !== null && typeof obj === 'object' && !(obj instanceof Date)
}
