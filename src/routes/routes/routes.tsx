import { createBrowserRouter } from 'react-router-dom'

import * as Pages from '~/pages'
import { PrivateRoutes } from '~/routes'
import { AuthenticatedLayout, PublicLayout } from '~/templates'

export const router = createBrowserRouter([
	{
		errorElement: <Pages.NotFound />,
		children: [
			{
				element: <PublicLayout />,
				children: [
					{ path: '/entrar', element: <Pages.SignIn /> },
					{ path: '/usuarios/recuperacao-de-senha', element: <Pages.recoveryPsw /> },
					{ path: '/usuarios/definir-nova-senha', element: <Pages.setNewPsw /> },
				],
			},
			{
				element: <PrivateRoutes />,
				children: [
					{
						element: <AuthenticatedLayout />,
						children: [
							{ path: '/contas', element: <Pages.Accounts /> },
							{ path: '/dashboard', element: <Pages.Dashboard /> },
							{ path: '/doutores', element: <Pages.Doctors /> },
							{ path: '/', element: <Pages.Home /> },
							{ path: '/agendamentos/cadastro', element: <Pages.CreateAppointment /> },
							{ path: '/equipamentos', element: <Pages.Items /> },
							{ path: '/pacientes/cadastro', element: <Pages.CreatePatient /> },
							{ path: '/pacientes', element: <Pages.Patients /> },
							{ path: '/metodos-de-pagamento', element: <Pages.Payments /> },
							{ path: '/vendas', element: <Pages.Sales /> },
							{ path: '/compras', element: <Pages.Shopping /> },
							{ path: '/estoque', element: <Pages.Stock /> },
							{ path: '/usuarios/cadastro', element: <Pages.SignUp /> },
							{ path: '/usuarios', element: <Pages.Users /> },
						],
					},
				],
			},
		],
	},
])
