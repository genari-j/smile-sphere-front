import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetDoctors, useGetPatients } from '~/api/cache/queries'
import { useCreateAppointment } from '~/hooks'

import { pageTitle } from '~/utils'

import { Title, Button, Textfield, Spinner } from '~/components'

interface SelectedItem {
	id?: number
	name?: string
}

export const CreateAppointment = () => {
	pageTitle('Novo Agendamento')

	const {
		createAppointment,
		onSubmit,
		handleSubmit,
		register,
		formState: { errors },
		setValue,
	} = useCreateAppointment()

	const filtersParams = {
		page: String(1),
		limit: String(9999),
	}

	const appointmentsPatients = useGetPatients(filtersParams)
	const appointmentsDoctors = useGetDoctors(filtersParams)

	const [searchedPatient, setSearchedPatient] = useState<SelectedItem>({})
	const [searchedDoctor, setSearchedDoctor] = useState<SelectedItem>({})

	const [isPatientsListVisible, setIsPatientsListVisible] = useState<boolean>(false)
	const [isDoctorsListVisible, setIsDoctorsListVisible] = useState<boolean>(false)

	const filteredPatientsList = appointmentsPatients.data?.data.data.filter((item) =>
		item.name.toLowerCase().includes(searchedPatient.name?.toLowerCase() || ''),
	)

	const filteredDoctorsList = appointmentsDoctors.data?.data.data.filter((item) =>
		item.name.toLowerCase().includes(searchedDoctor.name?.toLowerCase() || ''),
	)

	const handleSelectedPatient = (patient: SelectedItem) => {
		setSearchedPatient(patient)
		setValue('patient_id', patient.id as number)
		setIsPatientsListVisible(false)
	}

	const handleSelectedDoctor = (doctor: SelectedItem) => {
		setSearchedDoctor(doctor)
		setValue('doctor_id', doctor.id as number)
		setIsDoctorsListVisible(false)
	}

	const handleFocus = (listName: string) => {
		listName === 'patients' ? setIsPatientsListVisible(true) : setIsDoctorsListVisible(true)
	}

	const handleBlur = (listName: string) => {
		listName === 'patients'
			? setTimeout(() => {
					setIsPatientsListVisible(false)
				}, 100)
			: setTimeout(() => {
					setIsDoctorsListVisible(false)
				}, 100)
	}

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[580px] flex flex-col items-center gap-8 px-4">
				<div className="flex flex-col gap-2">
					<Title title="Novo Agendamento" />

					<p className="flex gap-1 text-[15px]">
						Após um agendamento cadastrado, será listado na
						<Link to="/" className="font-medium italic text-blue8 hover:underline">
							página principal.
						</Link>
					</p>
				</div>

				<form className="w-full flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="w-full flex flex-col relative">
						<Textfield
							type="text"
							label="Paciente:"
							id="patient_id"
							htmlFor="patient_id"
							value={searchedPatient.name || ''}
							autoComplete="off"
							onChange={(e) => setSearchedPatient({ ...searchedPatient, name: e.target.value })}
							onFocus={() => handleFocus('patients')}
							onBlur={() => handleBlur('patients')}
							placeholder="Selecione uma opção"
							register={register('patient_id', { valueAsNumber: true })}
							error={errors.patient_id != null}
							message={errors?.patient_id?.message}
						/>

						{isPatientsListVisible && (
							<div className="w-full h-[180px] absolute top-[5rem] left-0 z-10 flex flex-col gap-1 overflow-hidden hover:overflow-auto no-scrollbar rounded-md bg-gray7">
								{filteredPatientsList && filteredPatientsList.length > 0 ? (
									filteredPatientsList.map((patient) => (
										<span
											key={patient.id}
											onClick={() => handleSelectedPatient(patient)}
											className="text-sm py-2 px-4 cursor-pointer duration-150 hover:bg-gray8"
										>
											{patient.name}
										</span>
									))
								) : (
									<span className="text-sm py-2 px-4 text-gray-500">Sem resultados na busca 💬</span>
								)}
							</div>
						)}
					</div>

					<div className="w-full flex flex-col relative">
						<Textfield
							type="text"
							label="Doutor:"
							id="doctor_id"
							htmlFor="doctor_id"
							value={searchedDoctor.name || ''}
							autoComplete="off"
							onChange={(e) => setSearchedDoctor({ ...searchedDoctor, name: e.target.value })}
							onFocus={() => handleFocus('doctors')}
							onBlur={() => handleBlur('doctors')}
							placeholder="Selecione uma opção"
							register={register('doctor_id', { valueAsNumber: true })}
							error={errors.doctor_id != null}
							message={errors?.doctor_id?.message}
						/>

						{isDoctorsListVisible && (
							<div className="w-full h-[180px] absolute top-[5rem] z-10 left-0 flex flex-col gap-1 overflow-hidden hover:overflow-auto no-scrollbar rounded-md bg-gray7">
								{filteredDoctorsList && filteredDoctorsList.length > 0 ? (
									filteredDoctorsList.map((doctor) => (
										<span
											key={doctor.id}
											onClick={() => handleSelectedDoctor(doctor)}
											className="text-sm py-2 px-4 cursor-pointer duration-150 hover:bg-gray8"
										>
											{doctor.name}
										</span>
									))
								) : (
									<span className="text-sm py-2 px-4 text-gray-500">Sem resultados na busca 💬</span>
								)}
							</div>
						)}
					</div>

					<div className="flex gap-6">
						<Textfield
							id="appointment_date"
							type="date"
							label="Data agendamento:"
							htmlFor="appointment_date"
							placeholder="Data agendamento"
							register={register('appointment')}
							error={errors.appointment != null}
							message={errors?.appointment?.message}
						/>

						<Textfield
							id="appointment_time"
							type="time"
							label="Horário agendamento:"
							htmlFor="appointment_time"
							placeholder="Horário agendamento"
							register={register('time')}
							error={errors.time != null}
							message={errors?.time?.message}
						/>
					</div>

					<Button className="w-full" disabled={createAppointment.isPending}>
						{createAppointment.isPending ? <Spinner /> : 'Cadastrar'}
					</Button>
				</form>
			</div>
		</main>
	)
}
