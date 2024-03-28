import { nodeResolve } from "@rollup/plugin-node-resolve";

const bundle = {
  input: "dist/mod.js",
  output: {
    file: "../../www/sw.js",
    format: "es",
  },
  plugins: [nodeResolve()],
};

export default [bundle];
