<template>
  <b-card
    :img-src="recipe.image"
    :title="recipe.label"
    style="width: 35%;"
    class="mb-2"
    @click="showDetails"
    tag="b-col"
    md="3"
    sm="6"
  >
    <b-card-text style="text-align: left; color: grey">
      <p>Total {{Math.floor(recipe.calories)}} Kcal</p>
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { RecipeType } from "../../types/recipe";

@Component
export default class Recipe extends Vue {
  @Prop() recipe!: RecipeType;
  @Prop() index!: number;

  showDetails() {
    const recipeIndex = this.index.toString();
    this.$router.push({
      name: "recipe-details",
      params: { id: recipeIndex }
    });
  }
}
</script>

<style scoped>
.mb-2 {
  border: none;
}

.mb-2:hover {
  opacity: 0.7;
}

img.card-img {
  border-radius: 15px;
}

.card-title {
  text-align: left;
}

@media (max-width: 400px) {
  .card-title,
  .card-text {
    font-size: 0.7em;
  }
  .card-body {
    padding: 0;
  }
}
</style>
