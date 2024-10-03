
import { DefaultLayout } from "../layout"
import { Login, Dashboard } from "../pages/"

const routes = [
  {
    path: '/',
    component: Login,
    layout: DefaultLayout
  },
  {
    path: '/Dashboard',
    component: Dashboard,
    layout: DefaultLayout
  },
]

export default routes