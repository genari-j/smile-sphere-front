import type { AxiosError } from 'axios'
import type { NavigateFunction } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { api } from '~/api/config'
import { usersRequests } from '~/api/http/requests'
import type { SignInFormBody } from '~/@types'

import { config, responseStatus } from '~/utils'

export const useSignInMutation = (navigate: NavigateFunction) =>
	useMutation({
		mutationFn: async (data: SignInFormBody) => {
			const response = await usersRequests.login(data)
			return response
		},
		onSuccess: (data) => {
			const userToken = data?.data.data.token
			localStorage.setItem(config.LOCAL_STORAGE_TOKEN, JSON.stringify(userToken))
			api.defaults.headers.common.Authorization = `Bearer ${userToken}`

			navigate('/')
		},
		onError: (error: AxiosError) => responseStatus(error),
	})
