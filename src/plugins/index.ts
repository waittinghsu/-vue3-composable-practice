import type { App } from "vue";
import { setupStore } from "@/stores";
import { setupRouter } from "@/router";

export default {
    install(app: App<Element>) {
        setupStore(app),
        setupRouter(app)
    },
};
