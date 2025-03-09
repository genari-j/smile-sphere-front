export interface Doctors {
	id: number
	name: string
	user_code: string
	email: string
	contact: string
	specialty: {
		id: number
		name: string
		description: string
		active: boolean
		created_at: Date
	}
	address: {
		id: number
		street: string
		neighborhood: string
		city: string
		state: string
		cep: string
		complement: string | null
		active: boolean
		created_at: Date
	}
	profile: {
		id: number
		name: string
		description: string
		active: boolean
		created_at: Date
	}
	avatar: string | null
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export type GetDoctorResponse = Doctors

export interface GetDoctorsResponse {
	data: Doctors[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}
