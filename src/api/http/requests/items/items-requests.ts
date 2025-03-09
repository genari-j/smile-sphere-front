import { api } from '~/api/config'

export const itemsRequests = {
	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/items?${queryParams.toString()}`
		return api.get(url)
	},
}
