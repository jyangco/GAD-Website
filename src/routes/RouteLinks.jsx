import App from "../App"
import AboutPage from "../pages/AboutPage"

const routes = [
    { path: "/", exact: true, name: "Home", component: App },
    { path: "/About-Page", exact: true, name: "About", component: AboutPage },
]

export default routes
