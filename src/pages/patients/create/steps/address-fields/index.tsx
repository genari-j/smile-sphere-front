import { Textfield } from '~/components'

import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { CreatePatientFormBody } from '~/@types'

interface AddressFieldsProps {
	register: UseFormRegister<CreatePatientFormBody>
	errors: FieldErrors<CreatePatientFormBody>
}

export const AddressFields = ({ register, errors }: AddressFieldsProps) => (
	<div className="w-full flex flex-col gap-4">
		<div className="w-full flex gap-4">
			<Textfield
				id="street"
				type="text"
				label="Endereço:"
				htmlFor="street"
				placeholder="Endereço paciente"
				register={register('street')}
				error={errors.street != null}
				message={errors?.street?.message}
			/>
			<Textfield
				id="number"
				type="text"
				label="Número:"
				htmlFor="number"
				placeholder="Número paciente"
				register={register('number')}
				error={errors.number != null}
				message={errors?.number?.message}
			/>
		</div>

		<div className="w-full flex gap-4">
			<Textfield
				id="neighborhood"
				type="text"
				label="Bairro:"
				htmlFor="neighborhood"
				placeholder="Bairro paciente"
				register={register('neighborhood')}
				error={errors.neighborhood != null}
				message={errors?.neighborhood?.message}
			/>
			<Textfield
				id="city"
				type="text"
				label="Cidade:"
				htmlFor="city"
				placeholder="Cidade paciente"
				register={register('city')}
				error={errors.city != null}
				message={errors?.city?.message}
			/>
			<Textfield
				id="state"
				type="text"
				label="Estado:"
				htmlFor="state"
				placeholder="Estado paciente"
				register={register('state')}
				error={errors.state != null}
				message={errors?.state?.message}
			/>
		</div>

		<div className="w-full flex gap-4">
			<Textfield
				id="cep"
				type="text"
				label="CEP:"
				htmlFor="cep"
				placeholder="CEP paciente"
				register={register('cep')}
				error={errors.cep != null}
				message={errors?.cep?.message}
			/>
			<Textfield
				id="complement"
				type="text"
				label="Complemento:"
				htmlFor="complement"
				placeholder="Complemento paciente"
				register={register('complement')}
				error={errors.complement != null}
				message={errors?.complement?.message}
			/>
		</div>
	</div>
)
