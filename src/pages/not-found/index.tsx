import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<main className="w-full h-screen flex justify-center items-center">
			<div className="flex items-center gap-4">
				<Link to="/" className="border-2 px-4 rounded-lg duration-150 hover:bg-gray7 hover:translate-x-[-3px]">
					Voltar
				</Link>
				<span className="block text-3xl bold">404</span>
				<div className="w-1 h-12 bg-green9" />
				<span className="text-lg">Página não encontrada 💬</span>
			</div>
		</main>
	)
}
