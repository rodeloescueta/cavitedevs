import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      children: [
        // Dashboard
        {
          name: "Services",
          path: "",
          component: () => import("@/views/dashboard/Dashboard")
        },
        // Pages
        {
          name: "Web Development",
          path: "pages/webdev",
          component: () => import("@/views/dashboard/pages/WebDev")
        },
        // {
        //   name: "User Profile",
        //   path: "pages/user",
        //   component: () => import("@/views/dashboard/pages/UserProfile")
        // },
        // {
        //   name: "Notifications",
        //   path: "components/notifications",
        //   component: () => import("@/views/dashboard/component/Notifications")
        // },
        // {
        //   name: "Icons",
        //   path: "components/icons",
        //   component: () => import("@/views/dashboard/component/Icons")
        // },
        // {
        //   name: "Typography",
        //   path: "components/typography",
        //   component: () => import("@/views/dashboard/component/Typography")
        // },
        // Tables
        // {
        //   name: "Regular Tables",
        //   path: "tables/regular-tables",
        //   component: () => import("@/views/dashboard/tables/RegularTables")
        // },
        // Maps
        {
          name: "Location",
          path: "maps/google-maps",
          component: () => import("@/views/dashboard/maps/GoogleMaps")
        },
        // Upgrade
        {
          name: "Delo",
          path: "delo",
          component: () => import("@/views/dashboard/Upgrade")
        }
      ]
    }
  ]
});
