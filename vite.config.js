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
				day: resolve(__dirname, 'horoscope-html/zilnic.html'),
				// HOROSCOPE DAILY
				berbecZilnic: resolve(__dirname, 'horoscop-zilnic/berbec-zilnic.html'),
				taurZilnic: resolve(__dirname, 'horoscop-zilnic/taur-zilnic.html'),
				gemeniZilnic: resolve(__dirname, 'horoscop-zilnic/gemeni-zilnic.html'),
				racZilnic: resolve(__dirname, 'horoscop-zilnic/rac-zilnic.html'),
				leuZilnic: resolve(__dirname, 'horoscop-zilnic/leu-zilnic.html'),
				fecioaraZilnic: resolve(__dirname, 'horoscop-zilnic/fecioara-zilnic.html'),
				balantaZilnic: resolve(__dirname, 'horoscop-zilnic/balanta-zilnic.html'),
				scorpionZilnic: resolve(__dirname, 'horoscop-zilnic/scorpion-zilnic.html'),
				sagetatorZilnic: resolve(__dirname, 'horoscop-zilnic/sagetator-zilnic.html'),
				capricornZilnic: resolve(__dirname, 'horoscop-zilnic/capricon-zilnic.html'),
				varsatorZilnic: resolve(__dirname, 'horoscop-zilnic/varsator-zilnic.html'),
				pesteZilnic: resolve(__dirname, 'horoscop-zilnic/pesti-zilnic.html'),
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