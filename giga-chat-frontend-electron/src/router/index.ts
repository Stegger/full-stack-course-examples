import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../views/CreateUser.vue";
import ChatView from "../views/ChatView.vue";
import JoinRoomView from "../views/JoinRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/room",
      name: "Room",
      component: JoinRoomView,
    },
    {
      path: "/chat",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/createUser",
      name: "CreateUser",
      component: CreateUser,
    },
  ],
});

export default router;
