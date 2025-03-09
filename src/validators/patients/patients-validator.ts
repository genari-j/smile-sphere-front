import { z } from 'zod'

export const validateCreatePatientSchema = z.object({
	// FORM - FIRST STEP
	name: z.string().min(1, 'Nome inválido'),
	email: z.string().email('O E-mail deve conter um domínio válido').min(1, 'E-mail inválido'),
	contact: z
		.string()
		.optional()
		.refine((contact) => contact === undefined || contact.length === 11, {
			message: 'O número de contato deve conter 11 dígitos + DDD',
		}),
	treatment_id: z
		.number({
			coerce: true,
			errorMap: (issue, { defaultError }) => ({
				message: issue.code === 'invalid_type' ? 'Adicione o tipo de tratamento ao paciente' : defaultError,
			}),
		})
		.positive('Adicione o tipo de tratamento ao paciente'),

	// FORM - SECOND STEP
	height: z.string().min(1, 'Altura inválida'),
	weight: z.string().min(1, 'Peso inválido'),
	birth: z.string().min(1, 'Data nascimento inválida'),
	gender: z.number().min(1, 'Gênero inválido'),
	civil: z.number().min(1, 'Estado civil inválido'),
	occupation: z.string().min(1, 'Profissão inválida'),
	medicament: z.string().min(1, 'Toma alguma medicação?'),
	comorbidity: z.string().min(1, 'Faz algum tratamento ou possui alguma comorbidade?'),
	observation: z.string().optional(),

	// FORM - THIRD STEP
	street: z.string().min(1, 'Endereço inválido'),
	number: z.string().min(1, 'Número inválido'),
	neighborhood: z.string().min(1, 'Bairro inválido'),
	city: z.string().min(1, 'Cidade inválida'),
	state: z.string().min(1, 'Estado inválido'),
	cep: z.string().min(8, 'CEP inválido'),
	complement: z.string().min(1, 'Opaa'),
})
