import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import "../css/app.css";
import Layout from "./Layouts/Layout.vue";
import { Link, Head } from "@inertiajs/vue3";
import { ZiggyVue } from '../../vendor/tightenco/ziggy';





createInertiaApp({
    title: (title) => `My app - ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
    progress: {
        color: "#29d",

        includeCSS: true,

        showSpinner: false,
    },
});
