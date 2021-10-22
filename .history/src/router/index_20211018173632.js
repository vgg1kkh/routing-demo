import { Home } from "../pages/Home";
import { About, Contact, Culture, Join } from "../pages/About";
import { Profile } from "../pages/Profile";
import Product from "../pages/Product";
import { Users } from "../pages/Users";
import { Login } from "../pages/Login";
import { Detail } from "../pages/Detail";
import { Detail2 } from "../pages/Detail2";
import { Detail3 } from "../pages/Detail3";

export const routes = [
  {
    path: "/about",
    component: About,
    routes: [{ path: "/about/contact", component: Contact },
    { path: "/about/culture", component: Culture },
    { path: "/about/join", component: Join },
    ]
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "user",
    component: Users,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/detail2",
    component: Detail2,
  },
  {
    path: "/detail3",
    component: Detail3,
  },
  {
    path: "/",
    component: Home,
  },
];
