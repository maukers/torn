import sucrase from '@rollup/plugin-sucrase'
import { terser } from 'rollup-plugin-terser'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

export default {
	input: 'src/index.ts',

	output: [{
		name: 'torn',
		file: 'dist/index.js',
		format: 'umd',
		sourcemap: dev,
	}, {
		file: 'dist/index.mjs',
		format: 'esm',
		sourcemap: dev,
	}],

	plugins: [
		sucrase({ transforms: ['typescript'] }),
		!dev && terser(),
	],
}
