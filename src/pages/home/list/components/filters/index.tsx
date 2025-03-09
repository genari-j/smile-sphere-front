import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import type { UseQueryResult } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { GetDoctorsResponse, GetPatientsResponse, GetAppointmentsStatusResponse } from '~/@types'

import toast from 'react-hot-toast'

import { MdRefresh } from '~/assets'
import { Button, Textfield } from '~/components'

interface FiltersProps {
	doctor_id?: string
	patient_id?: string
	appointment?: string
	status_id?: string
}

interface FilterComponentProps {
	appointmentsDoctors: UseQueryResult<AxiosResponse<GetDoctorsResponse>>
	appointmentsPatients: UseQueryResult<AxiosResponse<GetPatientsResponse>>
	appointmentsStatus: UseQueryResult<AxiosResponse<GetAppointmentsStatusResponse>>
	filters: FiltersProps
	setFilters: Dispatch<SetStateAction<FiltersProps>>
}

interface FilterOption {
	id?: string | number
	name: string
}

export const Filters = ({
	appointmentsDoctors,
	appointmentsPatients,
	appointmentsStatus,
	filters,
	setFilters,
}: FilterComponentProps) => {
	const [doctorValue, setDoctorValue] = useState<string>('')
	const [patientValue, setPatientValue] = useState<string>('')
	const [statusValue, setStatusValue] = useState<string>('')

	const [isDoctorListVisible, setIsDoctorListVisible] = useState<boolean>(false)
	const [isPatientListVisible, setIsPatientListVisible] = useState<boolean>(false)
	const [isStatusListVisible, setIsStatusListVisible] = useState<boolean>(false)

	const handleClearFilters = () => {
		setFilters({})
		setDoctorValue('')
		setPatientValue('')
		setStatusValue('')
		toast.success('Filtros removidos.')
	}

	const prepareDataForFilters = (data: Array<{ id?: number; name: string }>) =>
		data.map(({ id, name }) => ({ id, name }))

	const mappedDoctors = prepareDataForFilters(appointmentsDoctors.data?.data.data ?? [])
	const mappedPatients = prepareDataForFilters(appointmentsPatients.data?.data.data ?? [])
	const mappedStatus = prepareDataForFilters(appointmentsStatus.data?.data.data ?? [])

	useEffect(() => {
		const getNameById = (list: Array<{ id: string | number; name: string }>, id: string | number) => {
			const item = list.find((i) => i.id === id)
			return item ? item.name : ''
		}

		if (filters.doctor_id) {
			const doctorName = getNameById(appointmentsDoctors.data?.data.data ?? [], filters.doctor_id)
			setDoctorValue(doctorName)
		}

		if (filters.patient_id) {
			const patientName = getNameById(appointmentsPatients.data?.data.data ?? [], filters.patient_id)
			setPatientValue(patientName)
		}

		if (filters.status_id) {
			const statusName = getNameById(appointmentsStatus.data?.data.data ?? [], filters.status_id)
			setStatusValue(statusName)
		}
	}, [filters, appointmentsDoctors.data, appointmentsPatients.data, appointmentsStatus.data])

	const handleSelectedItem = (item: { id?: number | string; name: string }, filterType: string) => {
		setFilters((filters) => ({
			...filters,
			[filterType]: item.id as string,
		}))

		if (filterType === 'doctor_id') {
			setDoctorValue(item.name)
			setIsDoctorListVisible(false)
		}
		if (filterType === 'patient_id') {
			setPatientValue(item.name)
			setIsPatientListVisible(false)
		}
		if (filterType === 'status_id') {
			setStatusValue(item.name)
			setIsStatusListVisible(false)
		}
	}

	const filteredList = (list: FilterOption[], query: string) =>
		list.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

	const renderFilter = (
		label: string,
		data: FilterOption[],
		filterType: string,
		value: string,
		isListVisible: boolean,
		setIsListVisible: (visible: boolean) => void,
		setValue: (value: string) => void,
	) => (
		<div className="w-full flex flex-col relative">
			<Textfield
				id={filterType}
				type="text"
				label={label}
				htmlFor={filterType}
				placeholder="Selecione uma opção"
				onFocus={() => setIsListVisible(true)}
				onBlur={() =>
					setTimeout(() => {
						setIsListVisible(false)
					}, 100)
				}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				autoComplete="off"
			/>
			{isListVisible && (
				<div className="w-full h-[205px] absolute top-[5rem] left-0 flex flex-col gap-1 overflow-hidden hover:overflow-auto no-scrollbar rounded-md bg-gray7">
					{filteredList(data, value).length > 0 ? (
						filteredList(data, value).map((item) => (
							<span
								key={item.id}
								onClick={() => handleSelectedItem(item, filterType)}
								className="text-sm py-2 px-4 cursor-pointer duration-150 hover:bg-gray8"
							>
								{item.name}
							</span>
						))
					) : (
						<span className="text-sm py-2 px-4 text-gray-500">Sem resultados na busca 💬</span>
					)}
				</div>
			)}
		</div>
	)

	return (
		<div className="w-full flex items-end gap-2">
			{renderFilter(
				'Doutor:',
				mappedDoctors,
				'doctor_id',
				doctorValue,
				isDoctorListVisible,
				setIsDoctorListVisible,
				setDoctorValue,
			)}
			{renderFilter(
				'Paciente:',
				mappedPatients,
				'patient_id',
				patientValue,
				isPatientListVisible,
				setIsPatientListVisible,
				setPatientValue,
			)}
			{renderFilter(
				'Status:',
				mappedStatus,
				'status_id',
				statusValue,
				isStatusListVisible,
				setIsStatusListVisible,
				setStatusValue,
			)}

			<Button type="button" className="p-1 mb-1 rounded-full" onClick={handleClearFilters}>
				<MdRefresh className="text-white9 text-3xl" />
			</Button>
		</div>
	)
}
