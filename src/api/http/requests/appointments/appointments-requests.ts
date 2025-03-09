import { api } from '~/api/config'
import type { CreateAppointmentFormBody } from '~/@types'

export const appointmentsRequests = {
	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/appointments?${queryParams.toString()}`
		return api.get(url)
	},

	listAppointmentsSummary: () => {
		const url = '/appointments-summary'
		return api.get(url)
	},

	create: async (data: CreateAppointmentFormBody) =>
		await api.post('/appointments', {
			...data,
		}),
}
