import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { useGetAppointments, useGetDoctors, useGetPatients, useGetAppointmentsStatus } from '~/api/cache/queries'
import { useGeneralStates } from '~/hooks'
import { pageTitle, getStatusColor, reduceString, timeFormatter, dateFormatter } from '~/utils'

import { FaUserDoctor, FaUser, FaClock, FaCalendarAlt, PiSealWarningFill } from '~/assets'

import { AppointmentById } from '../by-id'
import { Filters } from './components/filters'
import { Spinner, Title, Button, Pagination, Modal } from '~/components'

interface FiltersProps {
	doctor_id?: string
	patient_id?: string
	appointment?: string
	status_id?: string
}

export const Home = () => {
	pageTitle('Seja bem-vindo(a)')

	const [filters, setFilters] = useState<FiltersProps>({})
	const handleResetFilters = () => setFilters({})

	const [page, setPage] = useState(1)

	const listToPageParams = {
		page: String(page),
		...filters,
	}

	const filtersParams = {
		page: String(1),
		limit: String(9999),
	}

	const appointments = useGetAppointments(listToPageParams)
	const appointmentsDoctors = useGetDoctors(filtersParams)
	const appointmentsPatients = useGetPatients(filtersParams)
	const appointmentsStatus = useGetAppointmentsStatus(filtersParams)

	const [searchParams] = useSearchParams()
	const { selectedItem, setSelectedItem, openModal, closeModal } = useGeneralStates()

	useEffect(() => {
		const appointmentId = searchParams.get('appointment')

		if (appointmentId && !selectedItem?.appointment) {
			const appointment = appointments.data?.data.data.find((appointment) => appointment.id === Number(appointmentId))
			if (appointment) setSelectedItem({ appointment })
		}
	}, [searchParams, appointments, selectedItem, setSelectedItem])

	if (appointments.isPending) {
		return (
			<main className="w-full flex flex-col items-start gap-8 px-4">
				<Title title="Agendamentos:" />
				<Spinner className="w-16 h-16" />
			</main>
		)
	}

	if (appointments.isError) {
		return (
			<main className="w-full flex flex-col items-start gap-8 px-4">
				<Title title="Agendamentos:" />
				<p>Houve um erro ao carregar os dados 💬</p>
				<Button type="button" onClick={handleResetFilters}>
					Resetar
				</Button>
			</main>
		)
	}

	if (appointments.isSuccess && !appointments.isPending) {
		return (
			<main className="w-full flex justify-center pt-4">
				<div className="w-full max-w-[1000px] flex flex-col items-start gap-8">
					{selectedItem && (
						<Modal title="Agendamento" onClose={closeModal}>
							<AppointmentById appointment={selectedItem.appointment} />
						</Modal>
					)}

					<Title title="Agendamentos" />

					<div className="w-full flex justify-between items-end gap-2">
						<Filters
							appointmentsDoctors={appointmentsDoctors}
							appointmentsPatients={appointmentsPatients}
							appointmentsStatus={appointmentsStatus}
							filters={filters}
							setFilters={setFilters}
						/>
						<Button className="mb-1">
							<Link to="/agendamentos/cadastro">+ Novo</Link>
						</Button>
					</div>

					<div className="w-full flex flex-col gap-4">
						{appointments.data?.data.data.length !== 0 ? (
							<>
								{appointments.data?.data.data.map((appointment) => {
									return (
										<div
											key={appointment.id}
											onClick={() => openModal({ appointment }, 'appointment', appointment.id)}
											className="w-full flex gap-8 border-2 p-4 rounded-lg cursor-pointer duration-150 hover:bg-gray7"
										>
											<div className="w-full max-w-[32.5%] flex flex-col">
												<strong className="flex items-center gap-1 font-semibold">
													<FaUserDoctor className="text-green9" /> Doutor(a):
												</strong>
												<span>{reduceString(appointment.doctor.name, 28)}</span>
											</div>

											<div className="w-full max-w-[32.5%] flex flex-col">
												<strong className="flex items-center gap-1 font-semibold">
													<FaUser className="text-green9" /> Paciente:
												</strong>
												<span>{reduceString(appointment.patient.name, 28)}</span>
											</div>

											<div className="w-full max-w-[15%] flex flex-col">
												<strong className="flex items-center gap-1 font-semibold">
													<PiSealWarningFill className={getStatusColor(appointment.status.name)} size={19} /> Status:
												</strong>
												<span>{appointment.status.name}</span>
											</div>

											<div className="w-full max-w-[10%] flex flex-col">
												<strong className="flex items-center gap-1 font-semibold">
													<FaClock className={getStatusColor(appointment.status.name)} /> Horário:
												</strong>
												<span>{timeFormatter.format(new Date(appointment.appointment))}</span>
											</div>

											<div className="w-full max-w-[10%] flex flex-col">
												<strong className="flex items-center gap-1 font-semibold">
													<FaCalendarAlt className="text-green9" /> Data:
												</strong>
												<span>{dateFormatter.format(new Date(appointment.appointment))}</span>
											</div>
										</div>
									)
								})}
							</>
						) : (
							<p>Sem resultados encontrados 💬</p>
						)}
					</div>

					<Pagination
						page={page}
						setPage={setPage}
						totalCount={appointments.data?.data.total as number}
						totalCountPage={appointments.data?.data.pages as number}
					/>
				</div>
			</main>
		)
	}
}
