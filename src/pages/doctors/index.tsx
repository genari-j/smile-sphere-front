import { useState } from 'react'

import { useGetDoctors } from '~/api/cache/queries'
import { pageTitle, doctorsHeadTB } from '~/utils'

import { Title, Table, TableTreatments, Pagination } from '~/components'

export const Doctors = () => {
	pageTitle('Doutores')

	const [page, setPage] = useState(1)
	const doctorsParams = {
		page: String(page),
	}
	const doctors = useGetDoctors(doctorsParams)

	const renderTableBodyRows = () => (
		<>
			{doctors.data?.data.data.map((doctor) => (
				<Table.TR key={doctor.id}>
					<Table.TD>{doctor.id}</Table.TD>
					<Table.TD>{doctor.name}</Table.TD>
					<Table.TD>{doctor.specialty.name}</Table.TD>
					<Table.TD>{doctor.profile.name}</Table.TD>
				</Table.TR>
			))}
		</>
	)

	const TableBody = () => {
		if (doctors.isPending) return TableTreatments.renderPending(4)
		if (doctors.isError) return TableTreatments.renderError(4)
		if (doctors.data?.data.data.length === 0) return TableTreatments.renderNoData(4)
		return renderTableBodyRows()
	}

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Doutores" />

				<Table.Container>
					<Table.THead>
						<Table.TR>
							{doctorsHeadTB.map((head) => (
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
					totalCount={doctors.data?.data.total as number}
					totalCountPage={doctors.data?.data.pages as number}
				/>
			</div>
		</main>
	)
}
