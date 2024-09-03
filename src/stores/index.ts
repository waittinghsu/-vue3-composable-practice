import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();
const Composable = 1;
console.log(Composable)
// 全局注册 store
export function setupStore(app: App<Element>) {
    app.use(store);
}

// src/stores/index.ts
export * from './modules/app';
export { store };
// 继续导出其他 store...
