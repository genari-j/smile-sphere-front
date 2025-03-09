import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { CreatePatientFormBody } from '~/@types'

import { Textfield, Select, Textarea } from '~/components'

interface HistoryFieldsProps {
	register: UseFormRegister<CreatePatientFormBody>
	errors: FieldErrors<CreatePatientFormBody>
	genders: Array<{ id: number; name: string }>
	civils: Array<{ id: number; name: string }>
}

export const HistoryFields = ({ register, errors, genders, civils }: HistoryFieldsProps) => (
	<div className="w-full flex flex-col gap-4">
		<div className="w-full flex gap-4">
			<Textfield
				id="height"
				type="text"
				label="Altura:"
				htmlFor="height"
				placeholder="Altura paciente"
				register={register('height')}
				error={errors.height != null}
				message={errors?.height?.message}
			/>
			<Textfield
				id="weight"
				type="text"
				label="Peso:"
				htmlFor="weight"
				placeholder="Peso paciente"
				register={register('weight')}
				error={errors.weight != null}
				message={errors?.weight?.message}
			/>
			<Textfield
				id="birth"
				type="text"
				label="Data de Nascimento:"
				htmlFor="birth"
				placeholder="Nascimento paciente"
				register={register('birth')}
				error={errors.birth != null}
				message={errors?.birth?.message}
			/>
		</div>

		<div className="w-full flex gap-4">
			<Select
				id="gender"
				label="Gênero:"
				htmlFor="gender"
				data={genders || []}
				register={register('gender', { valueAsNumber: true })}
				error={errors.gender != null}
				message={errors?.gender?.message}
			/>
			<Select
				id="civil"
				label="Estado civil:"
				htmlFor="civil"
				data={civils || []}
				register={register('civil', { valueAsNumber: true })}
				error={errors.civil != null}
				message={errors?.civil?.message}
			/>
		</div>

		<div className="w-full flex gap-4">
			<Textfield
				id="occupation"
				type="text"
				label="Profissão:"
				htmlFor="occupation"
				placeholder="Profissão"
				register={register('occupation')}
				error={errors.occupation != null}
				message={errors?.occupation?.message}
			/>
			<Textfield
				id="medicament"
				type="text"
				label="Medicamento:"
				htmlFor="medicament"
				placeholder="Medicamento"
				register={register('medicament')}
				error={errors.medicament != null}
				message={errors?.medicament?.message}
			/>
		</div>

		<Textfield
			id="comorbidity"
			type="text"
			label="Comorbidade:"
			htmlFor="comorbidity"
			placeholder="Comorbidade"
			register={register('comorbidity')}
			error={errors.comorbidity != null}
			message={errors?.comorbidity?.message}
		/>

		<Textarea
			id="observation"
			label="Observações:"
			htmlFor="observation"
			placeholder="Escreva qualquer informação que seja pertinente ao cadastro do paciente .."
			rows={5}
			register={register('observation')}
			error={errors.observation != null}
			message={errors?.observation?.message}
		/>
	</div>
)
