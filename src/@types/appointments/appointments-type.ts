export interface Appointments {
	id: number
	appointment: Date
	doctor: {
		id: number
		name: string
		avatar: string | null
	}
	patient: {
		id: number
		name: string
		avatar: string | null
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
		}
	}
	status: {
		id: number
		name: string
	}
	active: boolean
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export interface CreateAppointmentFormBody {
	patient_id: number
	doctor_id: number
	appointment: Date
	time: string
}

export type GetAppointmentResponse = Appointments

export interface GetAppointmentsResponse {
	data: Appointments[]
	error: boolean
	limit: number
	currentPage: number
	pages: number
	total: number
}

export interface GetAppointmentsSummaryResponse {
	data: {
		appointments: number
		appointmentsStatus: {
			Agendado: number
			Atrasado: number
			Cancelado: number
			Concluído: number
			'Em atendimento': number
			'Em espera': number
			'Tratamento pausado': number
		}
	}
}
