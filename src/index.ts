export { default as StopWatch } from './lib/StopWatch'

export function isEmptyObject(obj: any) {
	return !Object.keys(obj).length ? false : true
}

export function isObject(obj: any) {
	return !Array.isArray(obj) && obj !== null && typeof obj === 'object' && !(obj instanceof Date)
}
