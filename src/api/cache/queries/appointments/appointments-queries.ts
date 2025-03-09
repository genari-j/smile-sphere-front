import { useQuery } from '@tanstack/react-query'
import { appointmentsRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetAppointmentsResponse, GetAppointmentsSummaryResponse } from '~/@types'

export const useGetAppointments = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetAppointmentsResponse>>({
		queryKey: [`appointments-${JSON.stringify(params)}`, params],
		queryFn: async () => appointmentsRequests.listAll(params),
	})

export const useGetAppointmentsSummary = () =>
	useQuery<AxiosResponse<GetAppointmentsSummaryResponse>>({
		queryKey: ['appointments-summary'],
		queryFn: async () => appointmentsRequests.listAppointmentsSummary(),
	})
