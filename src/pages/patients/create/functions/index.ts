import type { Dispatch, SetStateAction } from 'react'
import type { UseFormTrigger } from 'react-hook-form'
import toast from 'react-hot-toast'

import type { CreatePatientFormBody } from '~/@types'

export const goToNextStep = async (
	currentStep: number,
	setCurrentStep: Dispatch<SetStateAction<number>>,
	trigger: UseFormTrigger<CreatePatientFormBody>,
) => {
	let isValid = true

	if (currentStep === 1) {
		isValid = (await trigger(['name'])) && isValid
		isValid = (await trigger(['email'])) && isValid
		isValid = (await trigger(['contact'])) && isValid
		isValid = (await trigger(['treatment_id'])) && isValid
	}

	if (currentStep === 2) {
		isValid = (await trigger(['height'])) && isValid
		isValid = (await trigger(['weight'])) && isValid
		isValid = (await trigger(['birth'])) && isValid
		isValid = (await trigger(['gender'])) && isValid
		isValid = (await trigger(['civil'])) && isValid
		isValid = (await trigger(['occupation'])) && isValid
		isValid = (await trigger(['medicament'])) && isValid
		isValid = (await trigger(['comorbidity'])) && isValid
		isValid = (await trigger(['observation'])) && isValid
	}

	if (currentStep === 3) {
		isValid = (await trigger(['street'])) && isValid
		isValid = (await trigger(['number'])) && isValid
		isValid = (await trigger(['neighborhood'])) && isValid
		isValid = (await trigger(['city'])) && isValid
		isValid = (await trigger(['state'])) && isValid
		isValid = (await trigger(['cep'])) && isValid
		isValid = (await trigger(['complement'])) && isValid
	}

	if (isValid) {
		setCurrentStep((prevStep) => prevStep + 1)
	} else {
		toast.error('Algum dos campos pode conter dados não válidos')
	}
}

export const goToPrevStep = (setCurrentStep: Dispatch<SetStateAction<number>>) =>
	setCurrentStep((prevStep) => prevStep - 1)
