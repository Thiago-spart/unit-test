export const convertCurrency = (amount: number, currency: string = "USD") => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
	}).format(amount);
}
