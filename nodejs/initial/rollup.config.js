import { nodeResolve } from "@rollup/plugin-node-resolve";

const bundle = {
  input: "dist/mod.js",
  output: {
    file: "../../intial.js",
    format: "es",
  },
  plugins: [nodeResolve()],
};

export default [bundle];
