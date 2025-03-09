import { Outlet } from 'react-router-dom'

import { PublicFooter, PublicHeader } from '~/components'

export const PublicLayout = () => {
	return (
		<div className="w-full h-screen flex flex-col gap-4">
			<PublicHeader />
			<Outlet />
			<PublicFooter />
		</div>
	)
}
