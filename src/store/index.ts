import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { RecipeType } from "../types/recipe";
import { categories } from "../data/categories";

Vue.use(Vuex);

type RecipeApiResponse = {
  hits: RecipeType[];
};

export default new Vuex.Store({
  state: {
    recipes: [],
    categories
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes;
    }
  },
  actions: {
    getRecipes({ commit }, searchInput: string) {
      let from = Math.round(Math.random() * 50);
      axios
        .get<RecipeApiResponse>(
          `https://api.edamam.com/search?q=${searchInput}&app_id=${process.env.VUE_APP_ID}&app_key=${process.env.VUE_APP_KEY}&from=${from}`
        )
        .then(response => {
          console.log(response.data.hits);
          commit("setRecipes", response.data.hits);
        });
    },
    sortRecipes({ commit }, sortInput) {
      let sortedRecipes: RecipeType[] = [];
      if (sortInput === "") {
        return;
      }
      function compare(a: RecipeType, b: RecipeType) {
        let A: number = a.recipe.calories;
        let B: number = b.recipe.calories;
        let comparison = 0;
        if (A > B) {
          comparison = 1;
        } else if (A < B) {
          comparison = -1;
        }
        return comparison;
      }
      sortedRecipes = this.state.recipes.sort(compare);

      commit("setRecipes", sortedRecipes);
    }
  },
  modules: {}
});
