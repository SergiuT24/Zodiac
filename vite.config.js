import { resolve } from 'path'
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	plugins: [injectHTML()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				nested: resolve(__dirname, 'nested/Berbec.html'),
				nested: resolve(__dirname, 'nested/Taur.html'),
				nested: resolve(__dirname, 'nested/Gemeni.html'),
				nested: resolve(__dirname, 'nested/Rac.html'),
				nested: resolve(__dirname, 'nested/Leu.html'),
				nested: resolve(__dirname, 'nested/Fecioară.html'),
				nested: resolve(__dirname, 'nested/Balanță.html'),
				nested: resolve(__dirname, 'nested/Scorpion.html'),
				nested: resolve(__dirname, 'nested/Săgetător.html'),
				nested: resolve(__dirname, 'nested/Capricorn.html'),
				nested: resolve(__dirname, 'nested/Vărsător.html'),
				nested: resolve(__dirname, 'nested/Pește.html'),
			},
		},
	},
});