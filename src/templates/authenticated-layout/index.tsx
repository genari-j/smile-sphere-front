import { Outlet } from 'react-router-dom'
import { AuthenticatedFooter } from '~/components'
import { Sidebar } from '~/templates'

export const AuthenticatedLayout = () => {
	return (
		<div className="w-full h-screen flex gap-4">
			<Sidebar />
			<div className="w-full flex flex-col overflow-hidden hover:overflow-auto no-scrollbar">
				<div className="flex flex-1 justify-center items-center px-4">
					<Outlet />
				</div>
				<AuthenticatedFooter />
			</div>
		</div>
	)
}
