<template>
  <div style="margin-top: 50px;">
    <app-search></app-search>
    <b-container class="fluid">
      <b-row>
        <app-sort></app-sort>
      </b-row>
      <b-row class="justify-content-center">
        <app-recipe
          v-for="(recipe,index) in this.$store.state.recipes"
          :key="recipe.uri"
          :recipe="recipe.recipe"
          :index="index"
        ></app-recipe>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Recipe from "./recipe/Recipe.vue";
import Search from "./search/Search.vue";
import AppSort from "./sort/AppSort.vue";

@Component({
  components: {
    appRecipe: Recipe,
    appSearch: Search,
    appSort: AppSort
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
