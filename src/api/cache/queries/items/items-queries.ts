import { useQuery } from '@tanstack/react-query'
import { itemsRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetItemsResponse } from '~/@types'

export const useGetItems = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetItemsResponse>>({
		queryKey: [`items-${JSON.stringify(params)}`, params],
		queryFn: async () => itemsRequests.listAll(params),
	})
