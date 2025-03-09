import { Logo } from '~/assets'

export const PublicHeader = () => {
	return (
		<div className="w-full flex justify-center bg-none mt-8">
			<img src={Logo} alt="Smile Sphere" title="Smile Sphere" className="w-full max-w-[100px] rounded-lg" />
		</div>
	)
}
