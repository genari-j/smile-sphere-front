import { useQuery } from '@tanstack/react-query'
import { doctorsRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetDoctorsResponse } from '~/@types'

export const useGetDoctors = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetDoctorsResponse>>({
		queryKey: [`doctors-${JSON.stringify(params)}`, params],
		queryFn: async () => doctorsRequests.listAll(params),
	})
