type ErrorType = 'network-error' | 'response-error' | 'server-error' | 'api-error'

export class RequestError extends Error {
	type: ErrorType
	title: string
	original?: Error

	constructor(type: ErrorType, title: string, message: string, original?: Error) {
		super(message)
		this.type = type
		this.name = 'RequestError'
		this.title = title
		this.original = original
	}

	toJSON() {
		return {
			name: this.name,
			type: this.type,
			title: this.title,
			message: this.message,
			stack: this.stack,
			original: this.original ? { ...this.original } : undefined,
		}
	}
}

export const TornAPIErrors = new Map([
	[0, {
		title: 'Unknown error',
		message: `Unhandled error, should not occur.`,
	}],

	[1, {
		title: 'Key is empty',
		message: `Private key is empty in current request.`,
	}],

	[2, {
		title: 'Incorrect Key',
		message: `Private key is wrong/incorrect format.`,
	}],

	[3, {
		title: 'Wrong type',
		message: `Requesting an incorrect basic type.`,
	}],

	[4, {
		title: 'Wrong fields',
		message: `Requesting incorrect selection fields.`,
	}],

	[5, {
		title: 'Too many requests',
		message: `Current private key is banned for a small period of time because of too many requests (max 100 per minute).`,
	}],

	[6, {
		title: 'Incorrect ID',
		message: `Wrong ID value.`,
	}],

	[7, {
		title: 'Incorrect ID-entity relation',
		message: `A requested selection is private (For example, personal data of another user / faction).`,
	}],

	[8, {
		title: 'IP block',
		message: `Current IP is banned for a small period of time because of abuse.`,
	}],

	[9, {
		title: 'API disabled',
		message: `Api system is currently disabled.`,
	}],

	[10, {
		title: 'Key owner is in federal jail',
		message: `Current key can't be used because owner is in federal jail.`,
	}],

	[11, {
		title: 'Key change error',
		message: `You can only change your API key once every 60 seconds.`,
	}],

	[12, {
		title: 'Key read error',
		message: `Error reading key from Database.`,
	}],
])
