import { useQuery } from '@tanstack/react-query'
import { appointmentsStatusRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetAppointmentsStatusResponse } from '~/@types'

export const useGetAppointmentsStatus = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetAppointmentsStatusResponse>>({
		queryKey: [`appointments-${JSON.stringify(params)}`, params],
		queryFn: async () => appointmentsStatusRequests.listAll(params),
	})
