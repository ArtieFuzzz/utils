import { performance } from 'perf_hooks'

// * Based off: @sapphire/stopwatch

export default class StopWatch {
	#start: number
	#end: number | null
	private digits: number
	constructor(digits = 1) {
		this.#start = performance.now()
		this.#end = null
		this.digits = digits
	}

	/**
	 * Returns this StopWatch's raw duration in milliseconds
	 */
	public get duration() {
		return this.#end ? this.#end - this.#start! : performance.now() - this.#start!
	}

	/**
	 * Returns a boolean indicating whether or not this StopWatch is running
	 */
	public get isRunning() {
		return Boolean(!this.#end)
	}

	/**
	 * Stops this StopWatch and returns with the human readable duration.
	 */
	public stop() {
		this.#end = performance.now()

		return this.symbol()
	}

	/**
	 * Restarts this StopWatch
	 */
	public restart() {
		this.#start = performance.now()
		this.#end = null

		return this
	}

	/**
	 * Starts this StopWatch
	 */
	public start() {
		if (!this.isRunning) {
			this.#start = performance.now() - this.duration
			this.#end = null
		}

		return this
	}

	/**
	 * Returns with the human readable duration.
	 */
	private symbol() {
		const duration = this.duration

		if (duration >= 1000) return `${(duration / 1000).toFixed(this.digits)}s`
		if (duration >= 1) return `${duration.toFixed(this.digits)}ms`

		return `${(duration * 1000).toFixed(this.digits)}μs`
	}
}
