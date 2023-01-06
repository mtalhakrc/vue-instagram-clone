import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/direct",
      name: "direct",
      component: () => import("@/views/direct/index.vue"),
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("@/views/explore/index.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/profile/index.vue"),
      children: [
        {
          path: "post",
          name: "ProfilePosts",
          component: () => import("../views/profile/ProfilePost.vue"),
        },
        {
          path: "igtv",
          name: "ProfileIGTV",
          component: () => import("../views/profile/ProfileIgtv.vue"),
        },

        {
          path: "save",
          name: "ProfileSave",
          component: () => import("../views/profile/ProfileSave.vue"),
        },
        {
          path: "tag",
          name: "ProfileTag",
          component: () => import("../views/profile/ProfileTag.vue"),
        },
      ],
    },
  ],
});

export default router;
