import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  target: 'es2020',
  treeshake: true,
  splitting: true,
  tsconfig: './tsconfig.build.json',
  entry: ['src/**/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: false,
  clean: true,
  ...options,
}));