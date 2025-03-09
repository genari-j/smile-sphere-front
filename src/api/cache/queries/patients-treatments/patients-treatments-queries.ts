import { useQuery } from '@tanstack/react-query'
import { patientsTreatmentsRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetPatientsTreatmentsResponse } from '~/@types'

export const useGetPatientsTreatments = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetPatientsTreatmentsResponse>>({
		queryKey: [`patients-treatments-${JSON.stringify(params)}`, params],
		queryFn: async () => patientsTreatmentsRequests.listAll(params),
	})
