import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Pages/Home/Home";
import Team from "./components/Pages/Team/Team";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
