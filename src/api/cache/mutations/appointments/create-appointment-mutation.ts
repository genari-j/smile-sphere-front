import type { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import type { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { appointmentsRequests } from '~/api/http/requests'
import type { CreateAppointmentFormBody } from '~/@types'

import { responseStatus } from '~/utils'

export const useCreateAppointmentMutation = (navigate: NavigateFunction) =>
	useMutation({
		mutationFn: async (data: CreateAppointmentFormBody) => {
			const response = await appointmentsRequests.create(data)
			return response
		},
		onSuccess: () => {
			const handleGoToAppointments = () => {
				navigate('/')
			}
			toast.success('Cadastro realizado. Você será redirecionado para a listagem de agendamentos.')
			setTimeout(handleGoToAppointments, 2500)
		},
		onError: (error: AxiosError) => responseStatus(error),
	})
