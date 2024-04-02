import { nodeResolve } from "@rollup/plugin-node-resolve";

const bundle = {
  input: "dist/mod.js",
  output: {
    file: "../../dom_content_loaded.js",
    format: "es",
  },
  plugins: [nodeResolve()],
};

export default [bundle];
