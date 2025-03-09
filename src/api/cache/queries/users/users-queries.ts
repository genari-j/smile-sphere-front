import { useQuery } from '@tanstack/react-query'
import { usersRequests } from '~/api/http/requests'

import type { AxiosResponse } from 'axios'

import type { GetUsersResponse, GetUserResponse } from '~/@types'

export const useGetUsers = (params: Record<string, string> = {}) =>
	useQuery<AxiosResponse<GetUsersResponse>>({
		queryKey: [`users-${JSON.stringify(params)}`, params],
		queryFn: async () => usersRequests.listAll(params),
	})

export const useGetUserById = (id: number) =>
	useQuery<AxiosResponse<GetUserResponse>>({
		queryKey: [`user-${id}`],
		queryFn: async () => usersRequests.getById(id),
	})
