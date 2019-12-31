import { unconfirmed, unimplemented } from '../helpers'

export type UserResource = {
	networth: Networth
	bazaar: Bazaar
	display: Display
	inventory: Inventory
	hof: Hof
	travel: Travel
	events: Events
	messages: Messages
	education: Education
	medals: Medals
	honors: Honors
	notifications: Notifications
	personalstats: PersonalStats
	workstats: WorkStats
	crimes: Crimes
	icons: Icons
	cooldowns: Cooldowns
	money: Money
	perks: Perks
	battlestats: BattleStats
	bars: Bars
	profile: Profile
	basic: Basic
	attacks: Attacks
	attacksfull: AttacksFull
	revives: Revives
	revivesfull: RevivesFull
	stocks: Stocks
	properties: Properties
	jobpoints: JobPoints
	merits: Merits
	refills: Refills
	discord: Discord
	gym: Gym
	timestamp: Timestamp
}

export type Networth = {
	networth: {
		pending: unconfirmed<number>
		wallet: unconfirmed<number>
		bank: unconfirmed<number>
		points: unconfirmed<number>
		cayman: unconfirmed<number>
		vault: unconfirmed<number>
		piggybank: number | null
		items: unconfirmed<number>
		displaycase: number | null
		bazaar: unconfirmed<number>
		properties: unconfirmed<number>
		stockmarket: unconfirmed<number>
		auctionhouse: unconfirmed<number>
		company: unconfirmed<number>
	}
}

export type Bazaar = unimplemented
export type Display = unimplemented
export type Inventory = unimplemented
export type Hof = unimplemented
export type Travel = unimplemented
export type Events = unimplemented
export type Messages = unimplemented
export type Education = unimplemented
export type Medals = unimplemented
export type Honors = unimplemented
export type Notifications = unimplemented
export type PersonalStats = unimplemented
export type WorkStats = unimplemented
export type Crimes = unimplemented
export type Icons = unimplemented
export type Cooldowns = unimplemented
export type Money = unimplemented
export type Perks = unimplemented
export type BattleStats = unimplemented
export type Bars = unimplemented
export type Profile = unimplemented
export type Basic = unimplemented
export type Attacks = unimplemented
export type AttacksFull = unimplemented
export type Revives = unimplemented
export type RevivesFull = unimplemented
export type Stocks = unimplemented
export type Properties = unimplemented
export type JobPoints = unimplemented
export type Merits = unimplemented
export type Refills = unimplemented
export type Discord = unimplemented
export type Gym = unimplemented
export type Timestamp = {
	timestamp: number
}
