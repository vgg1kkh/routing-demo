import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import Product from "../pages/Product";
import U
import { Detail } from "../pages/Detail";
import { Detail2 } from "../pages/Detail2";
import { Detail3 } from "../pages/Detail3";

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'user',
        component:Users
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/product',
        component:Product
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/detail2',
        component:Detail2
    },
    {
        path:'/detail3',
        component:Detail3
    },

]