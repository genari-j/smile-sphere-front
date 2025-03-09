export const getStatusColor = (status: string) => {
	const statusColorMap: { [key: string]: string } = {
		Agendado: 'text-blue6',
		'Em espera': 'text-yellow9',
		'Em atendimento': 'text-blue8',
		Atrasado: 'text-red8',
		'Tratamento pausado': 'text-orange9',
		Concluído: 'text-green9',
		Cancelado: 'text-gray9',
	}

	return statusColorMap[status] || undefined
}
