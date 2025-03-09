import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { useGetPatients } from '~/api/cache/queries'
import { useGeneralStates } from '~/hooks'
import { pageTitle, patientsHeadTB, phoneFormatter } from '~/utils'

import { Filters } from './components/filters'
import { Title, Modal, Table, TableTreatments, Pagination, Button } from '~/components'

interface FiltersProps {
	name?: string
}

export const Patients = () => {
	pageTitle('Pacientes')

	const [filters, setFilters] = useState<FiltersProps>({})
	const [page, setPage] = useState(1)

	const [searchParams] = useSearchParams()
	const { selectedItem, setSelectedItem, openModal, closeModal } = useGeneralStates()

	const listToFiltersParams = {
		page: String(1),
		limit: String(9999),
	}
	const listToPageParams = {
		page: String(page),
		...filters,
	}

	const listToFilters = useGetPatients(listToFiltersParams, 'patients-filters')
	const listToPage = useGetPatients(listToPageParams)

	const renderTableBodyRows = () => (
		<>
			{listToPage.data?.data.data.map((patient) => (
				<Table.TR
					className="select-none cursor-pointer hover:bg-gray7"
					key={patient.id}
					onClick={() => openModal({ patient }, 'patient', patient.id)}
				>
					<Table.TD>{patient.name}</Table.TD>
					<Table.TD>{patient.email}</Table.TD>
					<Table.TD>{phoneFormatter(patient.contact)}</Table.TD>
					<Table.TD>{patient.history.medicament}</Table.TD>
				</Table.TR>
			))}
		</>
	)

	const TableBody = () => {
		if (listToPage.isPending) return TableTreatments.renderPending(4)
		if (listToPage.isError) return TableTreatments.renderError(4)
		if (listToPage.data?.data.data.length === 0) return TableTreatments.renderNoData(4)
		return renderTableBodyRows()
	}

	useEffect(() => {
		const patientId = searchParams.get('patient')

		if (patientId && !selectedItem?.patient) {
			const patient = listToPage.data?.data.data.find((patient) => patient.id === Number(patientId))
			if (patient) setSelectedItem({ patient })
		}
	}, [searchParams, listToPage, selectedItem, setSelectedItem])

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				{selectedItem && (
					<Modal title="Testando" onClose={closeModal}>
						{/* O conteúdo do modal pode ser criado aqui, ou um componente para chamar aqui */}
						<h2>Modal</h2>
					</Modal>
				)}

				<Title title="Pacientes" />

				<div className="w-full flex justify-between items-end gap-2">
					<Filters patients={listToFilters} filters={filters} setFilters={setFilters} />
					<Button className="mb-1">
						<Link to="/pacientes/cadastro">+ Novo</Link>
					</Button>
				</div>

				<Table.Container>
					<Table.THead>
						<Table.TR>
							{patientsHeadTB.map((head) => (
								<Table.TH key={head}>{head}</Table.TH>
							))}
						</Table.TR>
					</Table.THead>

					<Table.TBody>
						<TableBody />
					</Table.TBody>
				</Table.Container>

				<Pagination
					page={page}
					setPage={setPage}
					totalCount={listToPage.data?.data.total as number}
					totalCountPage={listToPage.data?.data.pages as number}
				/>
			</div>
		</main>
	)
}
