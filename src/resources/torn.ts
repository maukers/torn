import { unimplemented, incomplete } from '../helpers'

export type TornResource = {
	items: Items
	medals: Medals
	honors: Honors
	organisedcrimes: OrganisedCrimes
	gyms: Gyms
	companies: Companies
	properties: Properties
	education: Education
	stats: Stats
	stocks: Stocks
	factiontree: FactionTree
	territory: Territory
	rackets: Rackets
	bank: Bank
	timestamp: Timestamp
}

export type Items = {
	[id: number]: {
		name: string
		description: string
		effect: string | ''
		requirement: string | ''
		type: incomplete<string>
		weapon_type: incomplete<string | null>
		buy_price: number
		sell_price: number
		market_value: number
		circulation: number
		image: string
	}
}

export type Medals = {
	[id: number]: {
		name: string
		description: string
		type: incomplete<string>
		circulation: number
		rarity: incomplete<string>
	}
}

export type Honors = {
	[id: number]: {
		name: string
		description: string
		type: incomplete<number>
		circulation: number
		rarity: incomplete<string>
	}
}

export type OrganisedCrimes = {
	[id: number]: {
		name: string
		members: number
		time: number
		min_cash: number
		max_cash: number
		min_respect: number
		max_respect: number
	}
}

export type Gyms = {
	[id: number]: {
		name: string
		stage: number
		cost: number
		energy: number
		strength: number
		speed: number
		defense: number
		dexterity: number
		note: string | ''
	}
}

export type Companies = unimplemented
export type Properties = unimplemented
export type Education = unimplemented
export type Stats = unimplemented
export type Stocks = unimplemented
export type FactionTree = unimplemented
export type Territory = unimplemented
export type Rackets = unimplemented
export type Bank = unimplemented
export type Timestamp = {
	timestamp: number
}
