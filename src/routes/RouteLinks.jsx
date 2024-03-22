import App from "../App"
import AboutPage from "../pages/AboutPage"
import GFPSPage from "../pages/GFPSPage"
import PPA from "../pages/PPA"
import IECMaterials from "../pages/IECMaterials"
import Gallery from "../pages/Gallery"
import NWMC from "../pages/NWMC"
import VAW from "../pages/VAW"
import Memo_SO from "../pages/Memo_SO"

const routes = [
    { path: "/", exact: true, name: "Home", component: App },
    { path: "/About-Page", exact: true, name: "About", component: AboutPage },
    { path: "/GFPS-Committee", exact: true, name: "GFPS", component: GFPSPage },
    { path: "/PPAs", exact: true, name: "PPA", component: PPA },
    { path: "/IEC-Materials", exact: true, name: "IEC", component: IECMaterials },
    { path: "/IEC-Materials/Gallery", exact: true, name: "IEC Gallery", component: Gallery },
    { path: "/IEC-Materials/Gallery/NWMC", exact: true, name: "NWMC", component: NWMC },
    { path: "/IEC-Materials/Gallery/VAW", exact: true, name: "VAW", component: VAW },
    { path: "/IEC-Materials/Memorandums&SpecialOders", exact: true, name: "Memo_SO", component: Memo_SO },
]

export default routes
