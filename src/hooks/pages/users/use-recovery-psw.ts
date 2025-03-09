import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useRecoveryPSWMutation } from '~/api/cache/mutations'
import type { RecoveryPswFormBody } from '~/@types'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateRecoveryPSWSchema } from '~/validators'

export const useRecoveryPSW = () => {
	const navigate = useNavigate()

	const recoveryPSW = useRecoveryPSWMutation(navigate)

	const form = useForm<RecoveryPswFormBody>({
		resolver: zodResolver(validateRecoveryPSWSchema),
	})

	const onSubmit: SubmitHandler<RecoveryPswFormBody> = (data) => {
		console.log(data)
		// recoveryPSW.mutate(data)
	}

	return {
		...form,
		onSubmit,
		recoveryPSW,
	}
}
