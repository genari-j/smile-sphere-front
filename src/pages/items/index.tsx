import { useState } from 'react'

import { useGetItems } from '~/api/cache/queries'
import { pageTitle, itemsHeadTB, reduceString } from '~/utils'

import { Title, Table, TableTreatments, Pagination } from '~/components'

export const Items = () => {
	pageTitle('Equipamentos')

	const [page, setPage] = useState(1)
	const itemsParams = {
		page: String(page),
	}
	const items = useGetItems(itemsParams)

	const renderTableBodyRows = () => (
		<>
			{items.data?.data.data.map((item) => (
				<Table.TR key={item.id}>
					<Table.TD>{reduceString(item.name, 20)}</Table.TD>
					<Table.TD>{reduceString(item.description, 40)}</Table.TD>
					<Table.TD>{reduceString(item.category.name, 25)}</Table.TD>
					<Table.TD>{item.quantity}</Table.TD>
				</Table.TR>
			))}
		</>
	)

	const TableBody = () => {
		if (items.isPending) return TableTreatments.renderPending(4)
		if (items.isError) return TableTreatments.renderError(4)
		if (items.data?.data.data.length === 0) return TableTreatments.renderNoData(4)
		return renderTableBodyRows()
	}

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Equipamentos" />

				<Table.Container>
					<Table.THead>
						<Table.TR>
							{itemsHeadTB.map((head) => (
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
					totalCount={items.data?.data.total as number}
					totalCountPage={items.data?.data.pages as number}
				/>
			</div>
		</main>
	)
}
