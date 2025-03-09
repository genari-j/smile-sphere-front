import { useGetAppointmentsSummary } from '~/api/cache/queries'

import { pageTitle } from '~/utils'

import { Title } from '~/components'

export const Dashboard = () => {
	pageTitle('Dashboard')
	const appointmentsSummary = useGetAppointmentsSummary()

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Relatórios" />

				<div className="flex gap-2">
					<p>Agendado: {appointmentsSummary.data?.data.data.appointmentsStatus.Agendado}</p>
					<p>Atrasado: {appointmentsSummary.data?.data.data.appointmentsStatus.Atrasado}</p>
					<p>Cancelado: {appointmentsSummary.data?.data.data.appointmentsStatus.Cancelado}</p>
					<p>Concluído: {appointmentsSummary.data?.data.data.appointmentsStatus.Concluído}</p>
					<p>Em atendimento: {appointmentsSummary.data?.data.data.appointmentsStatus['Em atendimento']}</p>
					<p>Em espera: {appointmentsSummary.data?.data.data.appointmentsStatus['Em espera']}</p>
					<p>Tratamento pausado: {appointmentsSummary.data?.data.data.appointmentsStatus['Tratamento pausado']}</p>
				</div>
			</div>
		</main>
	)
}
