import { api } from '~/api/config'
import type { RecoveryPswFormBody, SignInFormBody } from '~/@types'

export const usersRequests = {
	recoveryPSW: async (data: RecoveryPswFormBody) =>
		await api.post('/password/recovery', {
			...data,
		}),

	login: async (data: SignInFormBody) =>
		await api.post('/signin', {
			...data,
		}),

	listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/users?${queryParams.toString()}`
		return api.get(url)
	},

	getById: async (id: number) => await api.get(`/users/${id}`),
}
