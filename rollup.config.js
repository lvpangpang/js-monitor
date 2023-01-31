import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist",
      format: "iife",
      name: "monitor",
    },
    {
      dir: "es",
      format: "es",
      preserveModules: true, // 保留模块结构，这样不会把所有方法都打包到一个文件
    },
  ],
  plugins: [resolve(), babel({ babelHelpers: "bundled" })],
}
