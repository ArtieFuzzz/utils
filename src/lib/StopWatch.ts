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

	public get duration() {
		return this.#end ? this.#end - this.#start! : performance.now() - this.#start!
	}

	public get isRunning() {
		return Boolean(!this.#end)
	}

	public stop() {
		this.#end = performance.now()

		return this.symbol()
	}

	public restart() {
		this.#start = performance.now()
		this.#end = null

		return this
	}

	public start() {
		if (!this.isRunning) {
			this.#start = performance.now() - this.duration
			this.#end = null
		}

		return this
	}

	private symbol() {
		const duration = this.duration

		if (duration >= 1000) return `${(duration / 1000).toFixed(this.digits)}s`
		if (duration >= 1) return `${duration.toFixed(this.digits)}ms`

		return `${(duration * 1000).toFixed(this.digits)}μs`
	}
}
