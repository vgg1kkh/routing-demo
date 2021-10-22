import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import Product from "../pages/Product";
import { Detail } from "../pages/Detail";

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
    /detail/:id

]