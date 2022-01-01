import { promisify } from 'util'
import { PromisifiedTimeout } from './types'

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

export function mergeObjects<A extends object, B extends object>(objTarget: A, objSource: Readonly<B>): A & B {
  for (const [key, value] of Object.entries(objSource)) {
    const targetVal = Reflect.get(objTarget, key)

    if (isObject(value)) {
      Reflect.set(objTarget, key, isObject(targetVal) ? mergeObjects(targetVal, value as object) : value)
    } else {
      Reflect.set(objTarget, key, value)
    }
  }

  return objTarget as A & B
}

export const sleep: PromisifiedTimeout = promisify(setTimeout)

export const isArray = (val: any) => !!val && val.constructor === Array
