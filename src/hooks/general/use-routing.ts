import { useNavigate } from 'react-router-dom'

export const useRouting = () => {
	const navigate = useNavigate()

	const handleGoToLogin = () => navigate('/entrar')
	const handleGoToUserDetail = (id: number) => navigate(`/usuarios/${id}`)
	const handleGoToAppointmentDetail = (id: number) => navigate(`/agendamento/${id}`)

	return {
		handleGoToLogin,
		handleGoToUserDetail,
		handleGoToAppointmentDetail,
	}
}
