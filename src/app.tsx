import './themes/tailwind-config.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { client } from '~/api/config'

export const App = () => {
	return (
		<QueryClientProvider client={client}>
			<Toaster position="bottom-right" />

			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}
