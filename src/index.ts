import { Resource, Selections, Data, DefaultSelection } from './resources'
import { TornAPIErrors, RequestError } from './errors'

export const API_URL = 'https://api.torn.com'

type RequestOptions<T extends Resource, U extends Selections<T>> = {
	key: string

	resource: T
	selections?: U[]
	ids?: string[] | number[]

	from?: number
	to?: number

	fetch?: typeof self.fetch
}

export function request<T extends Resource, U extends Selections<T> = DefaultSelection<T>>(
	options: RequestOptions<T, U>,
): Promise<Data<T, U>> {
	const start_time = Date.now()
	const ids = options.ids ? options.ids.join(',') : ''
	const selections = options.selections ? options.selections.join(',') : ''
	const fetch = options.fetch || self.fetch

	const path = `${options.resource}/${ids}`
	let query = `selections=${selections}&key=${options.key}&t=${Date.now()}`

	if (options.from !== undefined) {
		query += `&from=${options.from}`
	}

	if (options.to !== undefined) {
		query += `&to=${options.to}`
	}

	return fetch(`${API_URL}/${path}?${query}`)
		.catch(error => {
			throw new RequestError(
				'network-error',
				`Network error`,
				`There was a network problem contacting Torn's API server`,
				error,
			)
		})
		.then(response => {
			if (!response.ok) {
				throw new RequestError(
					'response-error',
					`Server error: ${response.status}`,
					`${response.statusText}`,
				)
			}

			return response.json().catch(error => {
				throw new RequestError(
					'server-error',
					`Server error`,
					`Torn's API server responded with garbled data`,
					error,
				)
			})
		})
		.then(data => {
			if (data.error) {
				const error = TornAPIErrors.get(data.error.code) || {
					title: `Unknown API error`,
					message: `Torn's API server responded with an unknown error code`,
				}

				throw new RequestError('api-error', error.title, error.message)
			}

			data.local_time_start = start_time
			data.local_time_end = Date.now()

			return data
		})
}

type ClientOptions<T extends Resource, U extends Selections<T>> =
	Omit<RequestOptions<T, U>, 'key' | 'fetch'>

export class Client {
	key: string
	fetch_impl: typeof self.fetch

	constructor(key: string, fetch?: typeof self.fetch) {
		this.key = key
		this.fetch_impl = fetch || self.fetch
	}

	request<T extends Resource, U extends Selections<T> = DefaultSelection<T>>(
		options: ClientOptions<T, U>,
	): Promise<Data<T, U>> {
		return request(Object.assign({}, options, { key: this.key, fetch: this.fetch_impl }))
	}
}
