const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				plant: {
					50: '#f7f8f5',
					100: '#eff0eb',
					200: '#d7dacd',
					300: '#bfc4af',
					400: '#909874',
					500: '#606c38',
					600: '#566132',
					700: '#48512a',
					800: '#3a4122',
					900: '#2f351b'
				},
				skin: {
					50: '#fdfaf7',
					100: '#fcf6ef',
					200: '#f7e8d7',
					300: '#f1d9bf',
					400: '#e7bd8e',
					500: '#dda15e',
					600: '#c79155',
					700: '#a67947',
					800: '#856138',
					900: '#6c4f2e'
				},
				cream: {
					50: '#fffffd',
					100: '#fffffc',
					200: '#fffef7',
					300: '#fffdf3',
					400: '#fefce9',
					500: '#fefae0',
					600: '#e5e1ca',
					700: '#bfbca8',
					800: '#989686',
					900: '#7c7b6e'
				}
			},
			fontFamily: {
				sans: ["'Karla'", ...defaultTheme.fontFamily.sans],
				serif: ["'Lora'", ...defaultTheme.fontFamily.serif],
				display: ["'BhuTuka Expanded One'", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
