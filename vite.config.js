import { resolve } from 'path'
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	plugins: [injectHTML()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				// HOROSCOPE PAGES
				day: resolve(__dirname, 'horoscope-html/Zilnic.html'),
				// HOROSCOPE DAILY
				berbecZilnic: resolve(__dirname, 'horoscop-zilnic/Berbec-zilnic.html'),
				// SIGNS PAGES
				berbec: resolve(__dirname, 'signs-html/Berbec.html'),
				taur: resolve(__dirname, 'signs-html/Taur.html'),
				gemeni: resolve(__dirname, 'signs-html/Gemeni.html'),
				rac: resolve(__dirname, 'signs-html/Rac.html'),
				leu: resolve(__dirname, 'signs-html/Leu.html'),
				fecioara: resolve(__dirname, 'signs-html/Fecioară.html'),
				balanata: resolve(__dirname, 'signs-html/Balanță.html'),
				scorpion: resolve(__dirname, 'signs-html/Scorpion.html'),
				sagetator: resolve(__dirname, 'signs-html/Săgetător.html'),
				capricorn: resolve(__dirname, 'signs-html/Capricorn.html'),
				varsator: resolve(__dirname, 'signs-html/Vărsător.html'),
				peste: resolve(__dirname, 'signs-html/Pește.html'),
			},
		},
	},
});