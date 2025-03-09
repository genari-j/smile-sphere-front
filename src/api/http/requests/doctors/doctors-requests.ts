import { api } from '~/api/config'

export const doctorsRequests = {
	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/doctors?${queryParams.toString()}`
		return api.get(url)
	},
}
