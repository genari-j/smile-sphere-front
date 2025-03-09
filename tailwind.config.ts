import type { Config } from 'tailwindcss'

const config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black9: '#000000',

				white9: '#FFFFFF',

				gray9: '#707070',
				gray8: '#DDDDDD',
				gray7: '#EEEEEE',
				gray6: '#B0BEC5',

				blue9: '#1A435A',
				blue8: '#2A6AC2',
				blue7: '#BFD2ED',
				blue6: '#ADD8E6',

				green9: '#33A561',
				green8: '#ADDBC0',

				red9: '#FF0000',
				red8: '#F44336',

				orange9: '#FF9800',

				yellow9: '#C6B523',
			},
			boxShadow: { '3xl': '3px 2px 2px #D1D1D1' },
			dropShadow: { '3xl': '3px 2px 2px #D1D1D1' },
		},
	},
	plugins: [],
} satisfies Config

export default config
