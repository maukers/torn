import { unimplemented } from '../helpers'

export type FactionResource = {
	basic: Basic
	territory: Territory
	chain: Chain
	currency: Currency
	weapons: Weapons
	armor: Armor
	temporary: Temporary
	medical: Medical
	drugs: Drugs
	boosters: Boosters
	cesium: Cesium
	mainnews: MainNews
	mainnewsfull: MainNewsFull
	attacknews: AttackNews
	attacknewsfull: AttackNewsFull
	fundsnews: FundsNews
	fundsnewsfull: FundsNewsFull
	armorynews: ArmoryNews
	armorynewsfull: ArmoryNewsFull
	crimenews: CrimeNews
	crimenewsfull: CrimeNewsFull
	membershipnews: MembershipNews
	membershipnewsfull: MembershipNewsFull
	crimes: Crimes
	attacks: Attacks
	attacksfull: AttacksFull
	revives: Revives
	revivesfull: RevivesFull
	upgrades: Upgrades
	stats: Stats
	donations: Donations
	chains: Chains
	timestamp: Timestamp
}

export type Basic = unimplemented
export type Territory = unimplemented
export type Chain = unimplemented
export type Currency = unimplemented
export type Weapons = unimplemented
export type Armor = unimplemented
export type Temporary = unimplemented
export type Medical = unimplemented
export type Drugs = unimplemented
export type Boosters = unimplemented
export type Cesium = unimplemented
export type MainNews = unimplemented
export type MainNewsFull = unimplemented
export type AttackNews = unimplemented
export type AttackNewsFull = unimplemented
export type FundsNews = unimplemented
export type FundsNewsFull = unimplemented
export type ArmoryNews = unimplemented
export type ArmoryNewsFull = unimplemented
export type CrimeNews = unimplemented
export type CrimeNewsFull = unimplemented
export type MembershipNews = unimplemented
export type MembershipNewsFull = unimplemented
export type Crimes = unimplemented
export type Attacks = unimplemented
export type AttacksFull = unimplemented
export type Revives = unimplemented
export type RevivesFull = unimplemented
export type Upgrades = unimplemented
export type Stats = unimplemented
export type Donations = unimplemented
export type Chains = unimplemented
export type Timestamp = {
	timestamp: number
}
