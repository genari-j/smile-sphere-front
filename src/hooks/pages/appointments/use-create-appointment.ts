import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useCreateAppointmentMutation } from '~/api/cache/mutations'
import type { CreateAppointmentFormBody } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateCreateAppointmentSchema } from '~/validators'

export const useCreateAppointment = () => {
	const navigate = useNavigate()

	const createAppointment = useCreateAppointmentMutation(navigate)

	const form = useForm<CreateAppointmentFormBody>({
		resolver: zodResolver(validateCreateAppointmentSchema),
	})

	const onSubmit: SubmitHandler<CreateAppointmentFormBody> = (data) => {
		createAppointment.mutate(data)
	}

	return {
		...form,
		onSubmit,
		createAppointment,
	}
}
