import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import TodoList from "./views/TodoList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      alias: '/company-info' 
    },
    {
    path: "/about-us",
    redirect: {
      name: "about"
    }
    },
    {
      path: "/todo-List",
      name: "todo-List",
      component: TodoList
     
    },
  ]
});
