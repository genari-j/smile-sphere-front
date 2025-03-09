import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import type { UseQueryResult } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { GetPatientsResponse } from '~/@types'

import toast from 'react-hot-toast'

import { MdRefresh } from '~/assets'
import { Button, Textfield } from '~/components'

interface FiltersProps {
	name?: string
}

interface FilterComponentProps {
	patients: UseQueryResult<AxiosResponse<GetPatientsResponse>>
	filters: FiltersProps
	setFilters: Dispatch<SetStateAction<FiltersProps>>
}

interface FilterOption {
	id?: string | number
	name: string
}

export const Filters = ({ patients, filters, setFilters }: FilterComponentProps) => {
	const [patientValue, setPatientValue] = useState<string>('')

	const [isPatientListVisible, setIsPatientListVisible] = useState<boolean>(false)

	useEffect(() => {
		if (setFilters.length) {
			setPatientValue(filters.name || '')
		}
	}, [filters, setFilters])

	const handleClearFilters = () => {
		setFilters({})
		setPatientValue('')
		toast.success('Filtros removidos.')
	}

	const prepareDataForFilters = (data: Array<{ id?: number; name: string }>) =>
		data.map(({ id, name }) => ({ id, name }))

	const mappedPatients = prepareDataForFilters(patients.data?.data.data ?? [])

	const handleSelectedItem = (item: { id?: number | string; name: string }, filterType: string) => {
		setFilters((filters) => ({
			...filters,
			[filterType]: item.name as string,
		}))

		if (filterType === 'name') {
			setPatientValue(item.name)
			setIsPatientListVisible(false)
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
				'Paciente:',
				mappedPatients,
				'name',
				patientValue,
				isPatientListVisible,
				setIsPatientListVisible,
				setPatientValue,
			)}

			<Button type="button" className="p-1 mb-1 rounded-full" onClick={handleClearFilters}>
				<MdRefresh className="text-white9 text-3xl" />
			</Button>
		</div>
	)
}
