import { unimplemented } from '../helpers'

export type MarketResource = {
	bazaar: Bazaar
	itemmarket: ItemMarket
	pointsmarket: PointsMarket
	timestamp: Timestamp
}

export type Bazaar = unimplemented
export type ItemMarket = unimplemented
export type PointsMarket = unimplemented
export type Timestamp = {
	timestamp: number
}
