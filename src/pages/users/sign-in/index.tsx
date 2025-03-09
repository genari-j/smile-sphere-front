import { Link } from 'react-router-dom'
import { useGeneralStates, useSignIn } from '~/hooks'

import { Title, Textfield, Button, Spinner } from '~/components'
import { AiOutlineEyeInvisible, AiOutlineEye } from '~/assets'

export const SignIn = () => {
	const { passwordState, handleShowPassword } = useGeneralStates()
	const {
		signIn,
		onSubmit,
		handleSubmit,
		register,
		formState: { errors },
	} = useSignIn()

	return (
		<main className="w-full flex flex-1 justify-center items-center">
			<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[500px] flex flex-col items-center gap-5 px-4">
				<Title title="Entrar" />

				<Textfield
					id="user_code"
					type="text"
					label="Matrícula:"
					htmlFor="user_code"
					placeholder="Sua matrícula"
					register={register('user_code')}
					error={errors.user_code != null}
					message={errors?.user_code?.message}
				/>

				<Textfield
					id="password"
					type={passwordState ? 'text' : 'password'}
					label="Senha:"
					htmlFor="password"
					placeholder="Sua senha"
					register={register('password')}
					error={errors.password != null}
					message={errors?.password?.message}
				>
					<button type="button" onClick={handleShowPassword} className="flex text-2xl bg-none">
						{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
					</button>
				</Textfield>

				<Button disabled={signIn.isPending} className="w-full">
					{signIn.isPending ? <Spinner /> : 'Entrar'}
				</Button>

				<div className="flex flex-col items-center">
					<p className="flex gap-1">
						Ainda não tem uma conta?
						<Link to="/usuarios/cadastro" className="font-medium hover:underline">
							Cadastre-se
						</Link>
					</p>

					<p className="flex gap-1">
						Esqueceu sua senha?
						<Link to="/usuarios/recuperacao-de-senha" className="font-medium hover:underline">
							Clique aqui
						</Link>
					</p>
				</div>
			</form>
		</main>
	)
}
