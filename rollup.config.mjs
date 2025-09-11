import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: false,
        exports: "named",
      },
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: false,
        exports: "named",
      },
    ],
    plugins: [commonjs(), typescript(), terser()],
    external: ["tailwindcss/plugin"],
  },
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [dts()],
  },
]
