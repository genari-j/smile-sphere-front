export const phoneFormatter = (value: string) => {
	let phoneNumber = value.replace(/\D/g, '')

	if (phoneNumber.length > 11) {
		phoneNumber = phoneNumber.slice(0, 11)
	}

	if (phoneNumber.length > 0) {
		phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`
	}

	return phoneNumber
}
