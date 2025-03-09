import { z } from 'zod'

export const validateSignInSchema = z.object({
	user_code: z.string().min(1, 'Matrícula inválida').min(6, 'A matrícula deve conter no mínimo 6 caracteres'),
	password: z.string().min(1, 'Senha inválida').min(6, 'A senha deve conter no mínimo 6 caracteres'),
})

export const validateRecoveryPSWSchema = z.object({
	email: z
		.string()
		.min(1, 'Informe um e-mail válido para solicitar o Reset de Senha')
		.email('O e-mail deve conter um domínio válido'),
})
