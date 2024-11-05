import { defineConfig } from "vite";
import vue from "rollup-plugin-vue";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    copy({
      targets: [
        {
          src: "./packages/scss/**",
          dest: "dist/assets/scss",
        },
        {
          src:"./packages/types/*",
          dest: "dist/types"
        }
      ],
      hook: "writeBundle",
    }),
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        {
          name: "vue:define-feature-flags",
          resolveId(source) {
            if (source === "vue") {
              return { id: require.resolve("vue/dist/vue.esm-bundler.js") };
            }
            return null;
          },
          load(id) {
            if (id.endsWith("vue.esm-bundler.js")) {
              return `
                ${fs.readFileSync(id, "utf-8")}
                window.__VUE_OPTIONS_API__ = true;
                window.__VUE_PROD_DEVTOOLS__ = true;
                window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
              `;
            }
            return null;
          },
        },
      ],
    },
    lib: {
      entry: "./packages/index.ts",
      name: "shui-ui",
    },
  },
});
