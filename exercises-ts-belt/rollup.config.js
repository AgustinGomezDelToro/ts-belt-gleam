import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import nodeExternals from "rollup-plugin-node-externals";

export default {
  input: "src/index.ts", // Archivo de entrada principal
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
  },
  plugins: [
    // Plugins para manejar dependencias externas y resolver módulos de node_modules
    nodeExternals(),
    autoExternal(),
    resolve(), // Asegúrate de que resolve esté separado de typescript
    commonjs(),

    // Plugin para compilar TypeScript
    typescript({
      tsconfig: "./tsconfig.json",
      noEmitOnError: true, // No generar archivos si hay errores
    }),

    // Plugin para mostrar el tamaño de los archivos generados
    filesize(),
  ],
};
