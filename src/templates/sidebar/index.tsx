import { useState } from 'react'
import { NavLink, Button } from '~/components'

import { useLogout, useSession } from '~/hooks'

import {
	MdLogout,
	ArrowBack,
	FaHome,
	FaUserDoctor,
	FaUsersCog,
	FaUser,
	BsBank2,
	FaFileContract,
	FaShoppingBasket,
	FaCreditCard,
	FaBoxes,
	FaToolbox,
	MdDashboard,
} from '~/assets'

export const Sidebar = () => {
	const { userInfos } = useSession()
	const { handleLogout } = useLogout()

	const [controlSidebar, setControlSidebar] = useState(false)
	const handleControlSidebar = () => setControlSidebar(!controlSidebar)

	return (
		<aside
			className={`w-full max-w-[240px] h-screen flex flex-col items-end overflow-hidden duration-150 shadow-3xl bg-gray7 ${controlSidebar ? 'max-w-[50px]' : ''}`}
		>
			<button
				type="button"
				onClick={handleControlSidebar}
				className={`w-7 h-7 flex justify-center items-center text-2xl mt-2 mr-[10px] rounded-full duration-150 ${controlSidebar ? 'rotate-180' : ''}`}
			>
				<ArrowBack />
			</button>

			<span
				className={`min-w-[240px] font-semibold text-xl text-end mt-6 mb-2 px-4 duration-300 ${controlSidebar ? 'opacity-0' : ''}`}
			>
				Smile Sphere
			</span>

			<nav className="w-full flex-1 overflow-x-hidden overflow-y-auto">
				<ul className="flex flex-col">
					<li className="min-w-[240px] px-4 mb-1 select-none text-gray9 font-medium text-sm">CLÍNICA</li>
					<li>
						<NavLink
							to="/"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaHome size={18} />
							AGENDAMENTOS
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/doutores"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaUserDoctor size={18} />
							DOUTORES
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/usuarios"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaUsersCog size={18} />
							USUÁRIOS
						</NavLink>
					</li>
					<li className="mb-6">
						<NavLink
							to="/pacientes"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaUser size={18} />
							PACIENTES
						</NavLink>
					</li>

					<li className="min-w-[240px] px-4 mb-1 select-none text-gray9 font-medium text-sm">FINANÇAS</li>
					<li>
						<NavLink
							to="/contas"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<BsBank2 size={18} />
							CONTAS
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/vendas"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaFileContract size={18} />
							VENDAS
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/compras"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaShoppingBasket size={18} />
							COMPRAS
						</NavLink>
					</li>
					<li className="mb-6">
						<NavLink
							to="/metodos-de-pagamento"
							className="min-w-[240px] duration-300 whitespace-nowrap py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaCreditCard size={18} />
							MÉTODOS DE PAGAMENTO
						</NavLink>
					</li>

					<li className="min-w-[240px] px-4 mb-1 select-none text-gray9 font-medium text-sm">ATIVO FÍSICO</li>
					<li>
						<NavLink
							to="/estoque"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaBoxes size={18} />
							ESTOQUE
						</NavLink>
					</li>
					<li className="mb-6">
						<NavLink
							to="/equipamentos"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<FaToolbox size={18} />
							EQUIPAMENTOS
						</NavLink>
					</li>

					<li className="min-w-[240px] px-4 mb-1 select-none text-gray9 font-medium text-sm">RELATÓRIOS</li>
					<li>
						<NavLink
							to="/dashboard"
							className="min-w-[240px] duration-300 py-2 px-4 data-[current=true]:text-white9 data-[current=true]:bg-green9"
						>
							<MdDashboard size={18} />
							RELATÓRIOS
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="w-full flex justify-between items-center gap-2 p-2">
				<Button onClick={handleLogout} className="p-2">
					<MdLogout size={18} className="text-white9" />
				</Button>

				{userInfos?.name ? <span>{userInfos.name.split(' ')[0]}</span> : <span>{userInfos?.name}</span>}
			</div>
		</aside>
	)
}
