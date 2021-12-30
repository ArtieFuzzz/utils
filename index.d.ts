import type { PromisifiedTimeout } from './src/types'

declare namespace Utilities {
  export class StopWatch {
    #private
    private digits
    constructor(digits?: number)
    /**
     * Returns this StopWatch's raw duration in milliseconds
     */
    get duration(): number
    /**
     * Returns a boolean indicating whether or not this StopWatch is running
     */
    get isRunning(): boolean
    /**
     * Stops this StopWatch and returns with the human readable duration.
     */
    stop(): string
    /**
     * Restarts this StopWatch
     */
    restart(): this
    /**
     * Starts this StopWatch
     */
    start(): this
    /**
     * Returns with the human readable duration.
     */
    private symbol
  }

  /**
    * Checks to see if an Object is empty or not
    * @params obj Value to check
    */
  export function isEmptyObject(obj: Record<string, unknown>): boolean

  /**
   * Checks if `obj` is an Object
   * @params obj Value to check
   */
  export function isObject(obj: any): boolean

  export function mergeObjects<A extends object, B extends object>(objTarget: A, objSource: Readonly<B>): A & B

  export const sleep: PromisifiedTimeout
}

export = Utilities
export as namespace Utilities
