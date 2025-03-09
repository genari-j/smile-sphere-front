import { useParams } from 'react-router-dom'
import { useGetUserById } from '~/api/cache/queries'

export const useUserById = () => {
  const routeParams = useParams()
  const userById = useGetUserById(Number(routeParams?.id))

  return {
    userById
  }
}