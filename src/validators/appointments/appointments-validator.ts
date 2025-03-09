import { z } from 'zod'

export const validateCreateAppointmentSchema = z.object({
	patient_id: z
		.number({
			coerce: true,
			errorMap: (issue, { defaultError }) => ({
				message: issue.code === 'invalid_type' ? 'Paciente não definido' : defaultError,
			}),
		})
		.positive('Paciente não definido'),
	doctor_id: z
		.number({
			coerce: true,
			errorMap: (issue, { defaultError }) => ({
				message: issue.code === 'invalid_type' ? 'Doutor não definido' : defaultError,
			}),
		})
		.positive('Doutor não definido'),
	appointment: z
		.string()
		.min(1, 'Data agendamento inválida')
		.transform((date) => new Date(date)),
	time: z.string().min(1, 'Horário inválido'),
})
