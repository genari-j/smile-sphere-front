export interface Items {
	id: number
	name: string
	description: string
	quantity: number
	price: string
	category: {
		id: number
		name: string
		description: string
	}
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export interface GetItemsResponse {
	data: Items[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}
