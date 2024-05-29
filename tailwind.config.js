import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			md: '480px',
			// => @media (min-width: 480px) { ... },

			lg: '834px',
			// => @media (min-width: 834px) { ... }

			laptop: '1440px',
			// => @media (min-width: 1440px) { ... }

			desktop: '1500px'
			// => @media (min-width: 1500px) { ... }
		},

		extend: {
			// our extendeds colors for project
			colors: {
				primary: '#3362f1',
				secondary: '#ad1f1f'
			}
		}
	},

	plugins: [
		plugin(function ({ addUtilities, theme, addComponents }) {
			// utilities:  you can use this classes look like helpers

			// Example if your text is overflowed, you can add global style for this and where text is overflow you can give this style

			addUtilities({
				'.hide': {
					display: 'none'
				},
				'.show': {
					display: 'block'
				}
			})

			// components: it is default custom styles for your components
			addComponents({
				// default style for button
				'.btn': {
					background: theme('backgroundColor.green'),
					padding: theme('')
				},

				// primary color style button
				'.btn-primary': {},

				// secondary color style button
				'.btn-secondary': {},

				// warning color style button
				'.btn-warning': {},

				// info color style button
				'.btn-info': {},

				// dark color style button
				'.btn-dark': {}
			})
		})
	]
}
