export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
})

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
})
