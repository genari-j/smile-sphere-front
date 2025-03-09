export interface CreatePatientFormBody {
	// FORM - FIRST STEP
	name: string
	email: string
	contact?: string
	treatment_id: number

	// FORM - SECOND STEP
	height: number
	weight: number
	birth: string
	gender: string
	civil: string
	occupation: string
	medicament: string
	comorbidity: string
	observation?: string

	// FORM - THIRD STEP
	street: string
	number: string
	neighborhood: string
	city: string
	state: string
	cep: string
	complement?: string
}

export interface Patients {
	id: number
	name: string
	email: string
	contact: string
	treatment: {
		id: number
		name: string
		description: string
		created_at: Date
	}
	history: {
		id: number
		height: number
		weight: number
		birth: Date
		gender: string
		civil: string
		occupation: string
		medicament: string
		comorbidity: string
		observation: string
		created_at: Date
	}
	address: {
		id: number
		street: string
		neighborhood: string
		city: string
		state: string
		cep: string
		complement: string
		active: boolean
		created_at: Date
	}
	avatar: string | null
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export type GetPatientResponse = Patients

export interface GetPatientsResponse {
	data: Patients[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}
