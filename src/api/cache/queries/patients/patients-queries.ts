import { useQuery } from '@tanstack/react-query'
import { patientsRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetPatientsResponse } from '~/@types'

export const useGetPatients = (params: Record<string, string> = {}, queryKey?: string) =>
	useQuery<AxiosResponse<GetPatientsResponse>>({
		queryKey: [`${queryKey ? `${queryKey}-${JSON.stringify(params)}` : `patients-${JSON.stringify(params)}`}`, params],
		queryFn: async () => patientsRequests.listAll(params),
	})
