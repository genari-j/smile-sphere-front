import { Link } from 'react-router-dom'
import { useGeneralStates } from '~/hooks'

import { departments, profiles } from '~/utils'
import { Title, Textfield, Select, Button } from '~/components'
import { AiOutlineEyeInvisible, AiOutlineEye } from '~/assets'

export const SignUp = () => {
	const { passwordState, handleShowPassword } = useGeneralStates()

	return (
		<main className="w-full flex justify-center items-center">
			<div className="w-full max-w-[600px]">
				<Title title="Cadastro" />

				<Textfield
					id="name"
					type="text"
					label="Nome"
					htmlFor="name"
					placeholder="Seu nome"
					// register={register('name')}
					// error={(errors.name != null)}
					// message={errors?.name?.message}
				/>

				<Textfield
					id="contact"
					type="text"
					label="Contato"
					htmlFor="contact"
					placeholder="(11) 92222-3333"
					// register={register('contact')}
					// error={(errors.contact != null)}
					// message={errors?.contact?.message}
				/>

				<Textfield
					id="email"
					type="email"
					label="E-mail"
					htmlFor="email"
					placeholder="Seu e-mail"
					// register={register('email')}
					// error={(errors.email != null)}
					// message={errors?.email?.message}
				/>

				<Textfield
					id="password"
					type={passwordState ? 'text' : 'password'}
					label="Senha"
					htmlFor="password"
					placeholder="Sua senha"
					// register={register('password')}
					// error={errors.password != null}
					// message={errors?.password?.message}
				>
					<button type="button" onClick={handleShowPassword} className="flex text-2xl text-blue9 bg-none">
						{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
					</button>
				</Textfield>

				<Select
					id="department"
					label="Departamento"
					htmlFor="department"
					// data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
					data={departments || []}
					// register={register('department_id', { valueAsNumber: true })}
					// {...(errors.department_id != null && { error: true })}
					// message={errors?.department_id?.message}
				/>

				<Select
					id="profile"
					label="Perfil"
					htmlFor="profile"
					// data={!profiles.isLoading && profiles.isSuccess ? profiles.data?.data.data : []}
					data={profiles || []}
					// register={register('profile_id', { valueAsNumber: true })}
					// {...(errors.profile_id != null && { error: true })}
					// message={errors?.profile_id?.message}
				/>

				{/* disabled={isLoading} */}
				<Button className="w-full">
					{/* {isLoading ? <Bounce /> : 'Cadastrar'} */}
					Cadastrar
				</Button>

				<p>
					Já possui conta? <Link to="/entrar">Entrar</Link>
				</p>
			</div>
		</main>
	)
}
