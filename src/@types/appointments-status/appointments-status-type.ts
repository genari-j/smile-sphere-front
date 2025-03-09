export interface AppointmentsStatus {
	id: number
	name: string
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export interface GetAppointmentsStatusResponse {
	data: AppointmentsStatus[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}
