import { pageTitle } from '~/utils'

import { Title } from '~/components'

export const Accounts = () => {
	pageTitle('Contas')

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[1000px] flex flex-col items-start gap-8 px-4">
				<Title title="Contas" />

				<div>
					<p>Em construção!</p>
				</div>
			</div>
		</main>
	)
}
