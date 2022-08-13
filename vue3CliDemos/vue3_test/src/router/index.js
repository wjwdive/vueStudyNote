import { createRouter, createWebHashHistory} from "vue-router";

const home = () => import("../components/Home")
const about = () => import("../components/About")

const routes = [
    {   
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/about",
        name: "about",
        component: about
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})