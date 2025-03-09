import { type Dispatch, type SetStateAction, useState } from 'react'
import type { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'

import type { CreatePatientFormBody, PatientsTreatments } from '~/@types'

import { Textfield } from '~/components'

interface FiltersProps {
	id?: number
	name?: string
}

interface PersonalFieldsProps {
	setValue: UseFormSetValue<CreatePatientFormBody>
	register: UseFormRegister<CreatePatientFormBody>
	errors: FieldErrors<CreatePatientFormBody>
	patientsTreatments: PatientsTreatments[]
	searchedTreatment: FiltersProps
	setSearchedTreatment: Dispatch<SetStateAction<FiltersProps>>
}

export const PersonalFields = ({
	setValue,
	register,
	errors,
	patientsTreatments,
	searchedTreatment,
	setSearchedTreatment,
}: PersonalFieldsProps) => {
	const filteredList = patientsTreatments.filter((item) =>
		item.name.toLowerCase().includes(searchedTreatment.name?.toLowerCase() || ''),
	)

	const [isTreatmentsListVisible, setIsTreatmentsListVisible] = useState<boolean>(false)

	const handleSelectedTreatment = (treatment: FiltersProps) => {
		setSearchedTreatment(treatment)
		setValue('treatment_id', treatment.id as number)
		setIsTreatmentsListVisible(false)
	}

	const handleFocus = () => setIsTreatmentsListVisible(true)

	const handleBlur = () =>
		setTimeout(() => {
			setIsTreatmentsListVisible(false)
		}, 100)

	return (
		<div className="w-full flex flex-col gap-4">
			<div className="w-full flex gap-4">
				<Textfield
					id="name"
					type="text"
					label="Nome:"
					htmlFor="name"
					placeholder="Nome paciente"
					register={register('name')}
					error={errors.name != null}
					message={errors?.name?.message}
				/>
				<Textfield
					id="email"
					type="text"
					label="E-mail:"
					htmlFor="email"
					placeholder="E-mail paciente"
					register={register('email')}
					error={errors.email != null}
					message={errors?.email?.message}
				/>
			</div>

			<Textfield
				id="contact"
				type="text"
				label="Contato:"
				htmlFor="contact"
				placeholder="Contato paciente"
				register={register('contact')}
				error={errors.contact != null}
				message={errors?.contact?.message}
			/>

			<div className="w-full flex flex-col relative">
				<Textfield
					type="text"
					label="Tratamento paciente:"
					id="patient_treatment"
					htmlFor="patient_treatment"
					value={searchedTreatment.name || ''}
					autoComplete="off"
					onChange={(e) => setSearchedTreatment({ ...searchedTreatment, name: e.target.value })}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder="Selecione uma opção"
					register={register('treatment_id', { valueAsNumber: true })}
					error={errors.treatment_id != null}
					message={errors?.treatment_id?.message}
				/>

				{isTreatmentsListVisible && (
					<div className="w-full h-[180px] absolute top-[5rem] left-0 flex flex-col gap-1 overflow-hidden hover:overflow-auto no-scrollbar rounded-md bg-gray7">
						{filteredList.length > 0 ? (
							filteredList.map((treatment) => (
								<span
									key={treatment.id}
									onClick={() => handleSelectedTreatment(treatment)}
									className="text-sm py-2 px-4 cursor-pointer duration-150 hover:bg-gray8"
								>
									{treatment.name}
								</span>
							))
						) : (
							<span className="text-sm py-2 px-4 text-gray-500">Sem resultados na busca 💬</span>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
