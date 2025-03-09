import { pageTitle } from '~/utils'

import { Title } from '~/components'

export const Sales = () => {
	pageTitle('Vendas')

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Vendas" />

				<div>
					<p>Em construção!</p>
				</div>
			</div>
		</main>
	)
}
