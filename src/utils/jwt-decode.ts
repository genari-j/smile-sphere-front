import { jwtDecode } from 'jwt-decode'

interface User {
	sub: number
	name: string | null
	user_code: string
	email: string
	contact: number
	address: {
		id: number
		street: string
		neighborhood: string
		city: string
		state: string
		cep: string
		complement: string | null
		active: boolean
		created_at: Date
		updated_at: Date
		deleted_at: Date | null
	}
	departments: {
		id: number
		name: string
		active: boolean
		created_at: Date
		updated_at: Date
		deleted_at: Date | null
	}
	profiles: {
		id: number
		code: string
		description: string
		active: boolean
		profiles: string
		created_at: Date
		updated_at: Date
		deleted_at: Date | null
	}
	active: boolean
	avatar: string | null
	exp: number
	iat: number
	created_at: string
	updated_at: string
}

export const decodeAccessToken = (token: string): User | undefined => {
	try {
		return jwtDecode(token)
	} catch (error) {
		console.log('Autenticação não identificada:', error)
	}
}
