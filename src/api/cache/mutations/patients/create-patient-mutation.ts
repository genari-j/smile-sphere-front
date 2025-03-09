import type { AxiosError } from 'axios'
import type { NavigateFunction } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { patientsRequests } from '~/api/http/requests'

import type { CreatePatientFormBody } from '~/@types'
import { responseStatus } from '~/utils'

import toast from 'react-hot-toast'

export const useCreatePatientMutation = (navigate: NavigateFunction) =>
	useMutation({
		mutationFn: async (data: CreatePatientFormBody) => {
			const response = await patientsRequests.create(data)
			return response
		},
		onSuccess: () => {
			toast.success('Paciente criado com sucesso.')
			navigate('/pacientes')
		},
		onError: (error: AxiosError) => responseStatus(error),
	})
