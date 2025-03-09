import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useCreatePatientMutation } from '~/api/cache/mutations'
import type { CreatePatientFormBody } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateCreatePatientSchema } from '~/validators'

export const useCreatePatient = () => {
	const navigate = useNavigate()

	const createPatient = useCreatePatientMutation(navigate)

	const form = useForm<CreatePatientFormBody>({
		resolver: zodResolver(validateCreatePatientSchema),
	})

	const onSubmit: SubmitHandler<CreatePatientFormBody> = (data) => {
		console.log(data)
		// createPatient.mutate(data)
	}

	return {
		...form,
		onSubmit,
		createPatient,
	}
}
