import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../components/NavigationTabs.vue";
import DashboardPagina from "../views/DashboardPagina.vue";
import InspectieDetail from "../views/InspectieDetail.vue";
import OpenstaandeInspecties from "../views/OpenstaandeInspecties.vue";
import UitgevoerdeInspecties from "../views/UitgevoerdeInspecties.vue";
import InstellingenPagina from "../views/InstellingenPagina.vue";
import KnowledgeBase from "../views/KnowledgeBase.vue";
import UserLogin from "../views/UserLogin.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "dashboard",
      },
      {
        path: "dashboard",
        name: "DashboardPagina",
        component: DashboardPagina,
      },
      {
        path: "openstaande-inspecties",
        name: "OpenstaandeInspecties",
        component: OpenstaandeInspecties,
      },
      {
        path: "/inspectiedetail/:id",
        name: "InspectieDetail",
        component: InspectieDetail,
      },
      {
        path: "uitgevoerde-inspecties",
        name: "UitgevoerdeInspecties",
        component: UitgevoerdeInspecties,
      },
      {
        path: "instellingen",
        name: "InstellingenPagina",
        component: InstellingenPagina,
      },
      {
        path: "knowledge-base",
        name: "KnowledgeBase",
        component: KnowledgeBase,
      },
      {
        path: "/login",
        name: "UserLogin",
        component: UserLogin,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
