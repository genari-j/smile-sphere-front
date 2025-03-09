import { useState } from 'react'

import { useGetUsers } from '~/api/cache/queries'

import { pageTitle, usersHeadTB } from '~/utils'

import { Title, Table, TableTreatments, Pagination } from '~/components'

export const Users = () => {
	pageTitle('Usuários')

	const [page, setPage] = useState(1)
	const usersParams = {
		page: String(page),
	}
	const users = useGetUsers(usersParams)

	const renderTableBodyRows = () => (
		<>
			{users.data?.data.data.map((user) => (
				<Table.TR key={user.id}>
					<Table.TD>{user.id}</Table.TD>
					<Table.TD>{user.name}</Table.TD>
					<Table.TD>{user.department.name}</Table.TD>
					<Table.TD>{user.profile.name}</Table.TD>
				</Table.TR>
			))}
		</>
	)

	const TableBody = () => {
		if (users.isPending) return TableTreatments.renderPending(4)
		if (users.isError) return TableTreatments.renderError(4)
		if (users.data?.data.data.length === 0) return TableTreatments.renderNoData(4)
		return renderTableBodyRows()
	}

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Usuários" />

				<Table.Container>
					<Table.THead>
						<Table.TR>
							{usersHeadTB.map((head) => (
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
					totalCount={users.data?.data.total as number}
					totalCountPage={users.data?.data.pages as number}
				/>
			</div>
		</main>
	)
}
