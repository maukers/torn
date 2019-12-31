import { incomplete, unconfirmed } from '../helpers'

export type PropertyResource = {
	property: Property
	timestamp: Timestamp
}

export type Property = {
	owner_id: number
	property_type: incomplete<number>
	happy: number
	upkeep: number
	upgrades: incomplete<string[]>
	staff: incomplete<string[]>
	rented: {
		user_id: unconfirmed<'' | string>
		days_left: unconfirmed<'' | number>
		total_cost: unconfirmed<'' | number>
		cost_per_day: unconfirmed<'' | number>
	}

	/**
	 * When multiple players are on the property,
	 * it's a string with comma-separated numbers.
	 */
	users_living: number | string
}

export type Timestamp = {
	timestamp: number
}
