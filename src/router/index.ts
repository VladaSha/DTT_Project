import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Categories from "../components/categories/Categories.vue";
import RandomRecipe from "../components/recipe/RandomRecipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories
  },
  {
    path: "/recipe-details/:id",
    name: "recipe-details",
    component: () => import("../components/recipe/RecipeDetails.vue"),
    props: true
  },
  {
    path: "/random",
    name: "random-recipe",
    component: RandomRecipe,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
