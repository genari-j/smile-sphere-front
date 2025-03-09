import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { GetAppointmentResponse, GetPatientResponse } from '~/@types'

interface OpenModalProps {
	appointment?: GetAppointmentResponse
	patient?: GetPatientResponse
}

export const useGeneralStates = () => {
	const navigate = useNavigate()

	const [passwordState, setPasswordState] = useState(false)
	const handleShowPassword = () => setPasswordState((prevState) => !prevState)

	const [selectedItem, setSelectedItem] = useState<OpenModalProps | null | undefined>(null)
	const openModal = <T extends OpenModalProps>(item: T, key: string, itemId: number) => {
		setSelectedItem(item)
		navigate(`?${key}=${itemId}`)
	}

	const closeModal = () => {
		setSelectedItem(null)
		navigate('?')
	}

	return {
		passwordState,
		handleShowPassword,
		selectedItem,
		setSelectedItem,
		openModal,
		closeModal,
	}
}
