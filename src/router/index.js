import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination-details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "destination-details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: "experiences/:experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experience-details" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      let slugExist = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );

      let experienceSlugExist =
        slugExist &&
        slugExist.experiences.find(
          (experience) => experience.slug === to.params.experienceSlug
        );

      if (!to.params.experienceSlug) {
        slugExist ? next() : next({ name: "NotFound" });
      } else {
        return slugExist && experienceSlugExist
          ? next()
          : next({
              name: "DestinationDetails",
              params: { slug: from.params.slug },
            });
      }
    },
  },
  {
    path: "/notFound",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
