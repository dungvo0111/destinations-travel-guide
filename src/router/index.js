import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [ 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/destination-details/:slug",
    name: "DestinationDetails",
    component: () =>
    import(/* webpackChunkName: "destination-details" */ "../views/DestinationDetails.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
