import { equal } from 'assert'
import { promisify } from 'util'
import { isEmptyObject, isObject, StopWatch } from '../src/index'

export async function stopWatch() {
	const watch = new StopWatch()

	// Sleep for 5 seconds
	await sleep(5000)

	watch.stop()

	equal(watch.duration > 4990, true)
	equal(watch.stop().startsWith('5') && watch.stop().endsWith('s'), true)
}

export function Objects() {
	const empty = isEmptyObject({})
	const notEmpty = isEmptyObject({ notEmpty: true })

	const isNotObject = isObject('String!')
	const object = isObject({ object: true })

	equal(empty, false)
	equal(notEmpty, true)

	equal(isNotObject, false)
	equal(object, true)
}

const sleep = promisify(setTimeout)
