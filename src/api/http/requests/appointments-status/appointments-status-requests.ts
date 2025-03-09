import { api } from '~/api/config'

export const appointmentsStatusRequests = {
	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/appointments-status?${queryParams.toString()}`
		return api.get(url)
	},
}
