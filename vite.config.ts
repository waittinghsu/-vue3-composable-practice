import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
    AutoImport({
      // 配置您想自动导入的库
      imports: [
          'vue',
          '@vueuse/core',
          'pinia',
          {
              'await-to-js': [
                  ['default', 'to'], // 指定命名导入
              ],
          },
      ],
      // 指定生成类型声明的路径
      // dts: false,
      dts: resolve(pathSrc, 'types/auto-imports.d.ts'),
    }),
    Components({
        dirs: ["src/components", "src/**/components"],
        // dts: false,
        dts:resolve(pathSrc, 'types/components.d.ts'),
        // dts: "src/types/auto-imports.d.ts",
    })
  ],
    resolve: {
        alias: {
            '@': pathSrc,
        },
    },
})
