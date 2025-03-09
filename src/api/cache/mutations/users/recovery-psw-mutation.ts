import type { AxiosError } from 'axios'
import type { NavigateFunction } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { usersRequests } from '~/api/http/requests'
import type { RecoveryPswFormBody } from '~/@types'

import { responseStatus } from '~/utils'

export const useRecoveryPSWMutation = (navigate: NavigateFunction) =>
	useMutation({
		mutationFn: async (data: RecoveryPswFormBody) => {
			const response = await usersRequests.recoveryPSW({
				email: data.email,
			})
			return response
		},
		onSuccess: () => {
			toast.success('Um Link com instruções para redefinição foi enviado ao e-mail informado.')
			const handleChangeToLogin = () => {
				navigate('/entrar')
			}
			setTimeout(handleChangeToLogin, 2500)
		},
		onError: (error: AxiosError) => responseStatus(error),
	})
