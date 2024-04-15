import { resolve } from 'path'
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	plugins: [injectHTML()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				sitemap: resolve(__dirname, 'public/sitemap.xml'),
				// HOROSCOPE DAILY
				zilnic: resolve(__dirname, 'horoscop/zilnic.html'),
				berbecZilnic: resolve(__dirname, 'horoscop/zilnic/berbec.html'),
				taurZilnic: resolve(__dirname, 'horoscop/zilnic/taur.html'),
				gemeniZilnic: resolve(__dirname, 'horoscop/zilnic/gemeni.html'),
				racZilnic: resolve(__dirname, 'horoscop/zilnic/rac.html'),
				leuZilnic: resolve(__dirname, 'horoscop/zilnic/leu.html'),
				fecioaraZilnic: resolve(__dirname, 'horoscop/zilnic/fecioara.html'),
				balantaZilnic: resolve(__dirname, 'horoscop/zilnic/balanta.html'),
				scorpionZilnic: resolve(__dirname, 'horoscop/zilnic/scorpion.html'),
				sagetatorZilnic: resolve(__dirname, 'horoscop/zilnic/sagetator.html'),
				capricornZilnic: resolve(__dirname, 'horoscop/zilnic/capricorn.html'),
				varsatorZilnic: resolve(__dirname, 'horoscop/zilnic/varsator.html'),
				pesteZilnic: resolve(__dirname, 'horoscop/zilnic/pesti.html'),
				// CHINESE ZODIAC PAGES
				chineseZodiac: resolve(__dirname, 'zodiac/chinez/zodii.html'),
				bivol: resolve(__dirname, 'zodiac/chinez/bivol.html'),
				caine: resolve(__dirname, 'zodiac/chinez/caine.html'),
				cal: resolve(__dirname, 'zodiac/chinez/cal.html'),
				capra: resolve(__dirname, 'zodiac/chinez/capra.html'),
				cocos: resolve(__dirname, 'zodiac/chinez/cocos.html'),
				dragon: resolve(__dirname, 'zodiac/chinez/dragon.html'),
				iepure: resolve(__dirname, 'zodiac/chinez/iepure.html'),
				maimuta: resolve(__dirname, 'zodiac/chinez/maimuta.html'),
				mistret: resolve(__dirname, 'zodiac/chinez/mistret.html'),
				sarpe: resolve(__dirname, 'zodiac/chinez/sarpe.html'),
				sobolan: resolve(__dirname, 'zodiac/chinez/sobolan.html'),
				tigru: resolve(__dirname, 'zodiac/chinez/tigru.html'),
				// SIGNS PAGES
				berbec: resolve(__dirname, 'zodii/berbec.html'),
				taur: resolve(__dirname, 'zodii/taur.html'),
				gemeni: resolve(__dirname, 'zodii/gemeni.html'),
				rac: resolve(__dirname, 'zodii/rac.html'),
				leu: resolve(__dirname, 'zodii/leu.html'),
				fecioara: resolve(__dirname, 'zodii/fecioara.html'),
				balanata: resolve(__dirname, 'zodii/balanta.html'),
				scorpion: resolve(__dirname, 'zodii/scorpion.html'),
				sagetator: resolve(__dirname, 'zodii/sagetator.html'),
				capricorn: resolve(__dirname, 'zodii/capricorn.html'),
				varsator: resolve(__dirname, 'zodii/varsator.html'),
				peste: resolve(__dirname, 'zodii/pesti.html'),
			},
		},
	},
});