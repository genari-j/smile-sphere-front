import { api } from '~/api/config'

import type { CreatePatientFormBody } from '~/@types'

export const patientsRequests = {
	create: async (data: CreatePatientFormBody) =>
		await api.post('/patients', {
			...data,
		}),

	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/patients?${queryParams.toString()}`
		return api.get(url)
	},
}
