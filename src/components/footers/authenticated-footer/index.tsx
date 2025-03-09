export const AuthenticatedFooter = () => {
	return (
		<footer className="w-full flex justify-center mt-auto py-8">
			<div className="flex flex-col items-center">
				<span className="font-medium">Smile Sphere, {new Date().getFullYear()}</span>
				<p>Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}
