import { unimplemented } from '../helpers'

export type CompanyResource = {
	profile: Profile
	detailed: Detailed
	stock: Stock
	employees: Employees
	news: News
	newsfull: NewsFull
	timestamp: Timestamp
}

export type Profile = unimplemented
export type Detailed = unimplemented
export type Stock = unimplemented
export type Employees = unimplemented
export type News = unimplemented
export type NewsFull = unimplemented
export type Timestamp = {
	timestamp: number
}
