import App from "../App"
import AboutPage from "../pages/AboutPage"
import GFPSPage from "../pages/GFPSPage"
import PPA from "../pages/PPA"
import IECMaterials from "../pages/IECMaterials"

const routes = [
    { path: "/", exact: true, name: "Home", component: App },
    { path: "/About-Page", exact: true, name: "About", component: AboutPage },
    { path: "/GFPS-Committee", exact: true, name: "GFPS", component: GFPSPage },
    { path: "/PPAs", exact: true, name: "PPA", component: PPA },
    { path: "/IEC-Materials", exact: true, name: "IEC", component: IECMaterials },
]

export default routes
