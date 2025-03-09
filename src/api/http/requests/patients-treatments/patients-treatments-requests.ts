import { api } from '~/api/config'

export const patientsTreatmentsRequests = {
	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/patients-treatments?${queryParams.toString()}`
		return api.get(url)
	},
}
