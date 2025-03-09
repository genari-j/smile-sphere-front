export interface PatientsTreatments {
	id: number
	name: string
	description: string
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export interface GetPatientsTreatmentsResponse {
	data: PatientsTreatments[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}
