import type { Dispatch, SetStateAction } from 'react'

import { ArrowDLeft, ArrowDRight, ArrowLeft, ArrowRight } from '~/assets'

interface PaginationProps {
	totalCountPage: number
	totalCount: number
	page: number
	setPage: Dispatch<SetStateAction<number>>
}

export const Pagination = ({ totalCountPage, totalCount, page, setPage }: PaginationProps) => {
	const handleNextPage = () => {
		if (totalCountPage > page) {
			setPage(page + 1)
		}
	}
	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}
	const handleLastPage = () => setPage(totalCountPage)
	const handleFirstPage = () => setPage(1)

	return (
		<div className="w-full flex justify-between items-center">
			<span className="font-medium">Total de registros: {totalCount < 10 ? `0${+totalCount}` : totalCount}</span>

			<div className="flex items-center gap-1">
				<button
					type="button"
					onClick={handleFirstPage}
					disabled={page <= 1}
					className="flex justify-center items-center duration-150 text-xl p-1 rounded-full border-2 border-gray8 bg-transparent hover:bg-gray8 disabled:opacity-60 disabled:pointer-events-none"
				>
					<ArrowDLeft />
				</button>

				<button
					type="button"
					onClick={handlePreviousPage}
					disabled={page <= 1}
					className="flex justify-center items-center duration-150 text-xl p-1 rounded-full border-2 border-gray8 bg-transparent hover:bg-gray8 disabled:opacity-60 disabled:pointer-events-none"
				>
					<ArrowLeft />
				</button>

				<p className="font-medium">
					{page} de {totalCountPage}
				</p>

				<button
					type="button"
					onClick={handleNextPage}
					disabled={totalCountPage === page || totalCountPage < 1}
					className="flex justify-center items-center duration-150 text-xl p-1 rounded-full border-2 border-gray8 bg-transparent hover:bg-gray8 disabled:opacity-60 disabled:pointer-events-none"
				>
					<ArrowRight />
				</button>

				<button
					type="button"
					onClick={handleLastPage}
					disabled={totalCountPage === page || totalCountPage < 1}
					className="flex justify-center items-center duration-150 text-xl p-1 rounded-full border-2 border-gray8 bg-transparent hover:bg-gray8 disabled:opacity-60 disabled:pointer-events-none"
				>
					<ArrowDRight />
				</button>
			</div>
		</div>
	)
}
