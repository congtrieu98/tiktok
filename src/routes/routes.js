import config from "../config";

//Layout
import  DefaultLayout  from "../layouts";

//Page
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload";

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.upload, component: Upload, layout: DefaultLayout},
    {path: config.routes.search, component: Search, layout: null},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}