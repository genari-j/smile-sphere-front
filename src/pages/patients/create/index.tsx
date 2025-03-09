import { useState } from 'react'
import { useCreatePatient } from '~/hooks'
import { useGetPatientsTreatments } from '~/api/cache/queries'

import { pageTitle, genders, civils } from '~/utils'
import { goToNextStep, goToPrevStep } from './functions'
import { PersonalFields, HistoryFields, AddressFields } from './steps'

import { FormProgress, Title, Spinner, Button } from '~/components'

interface FiltersProps {
	id?: number
	name?: string
}

export const CreatePatient = () => {
	pageTitle('Novo Paciente')

	const [searchedTreatment, setSearchedTreatment] = useState<FiltersProps>({})

	const patientsTreatmentsParams = {
		page: String(1),
		limit: String(9999),
	}

	const patientsTreatments = useGetPatientsTreatments(patientsTreatmentsParams)

	const {
		createPatient,
		onSubmit,
		handleSubmit,
		register,
		formState: { errors },
		trigger,
		setValue,
	} = useCreatePatient()

	const [currentStep, setCurrentStep] = useState(1)

	return (
		<main className="w-full flex justify-center">
			<div className="w-full max-w-[600px] flex flex-col items-center gap-8 px-4">
				<Title title="Novo Paciente" />

				<FormProgress currentStep={currentStep} totalSteps={3} />

				<form className="w-full flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
					{currentStep === 1 && (
						<PersonalFields
							setValue={setValue}
							register={register}
							errors={errors}
							patientsTreatments={
								!patientsTreatments.isLoading && patientsTreatments.isSuccess ? patientsTreatments.data?.data.data : []
							}
							searchedTreatment={searchedTreatment}
							setSearchedTreatment={setSearchedTreatment}
						/>
					)}
					{currentStep === 2 && <HistoryFields register={register} errors={errors} genders={genders} civils={civils} />}
					{currentStep === 3 && <AddressFields register={register} errors={errors} />}

					<div className="w-full flex justify-center gap-4">
						{currentStep > 1 && (
							<Button type="button" onClick={() => goToPrevStep(setCurrentStep)} className="btn-prev">
								Voltar
							</Button>
						)}

						{currentStep < 3 ? (
							<Button
								type="button"
								onClick={() => goToNextStep(currentStep, setCurrentStep, trigger)}
								className="btn-next"
							>
								Próximo
							</Button>
						) : (
							<Button disabled={createPatient.isPending} className="w-full">
								{createPatient.isPending ? <Spinner /> : 'Cadastrar'}
							</Button>
						)}
					</div>
				</form>
			</div>
		</main>
	)
}
