<template>
  <div>
    <b-card
      no-body
      class="overflow-hidden justify-content-center"
      style="margin-top: 55px; max-width: 80%"
    >
      <b-row no-gutters>
        <b-col cols="12" md="6">
          <b-card-img :src="recipe.recipe.image" style="max-width: 70%;"></b-card-img>
        </b-col>
        <b-col cols="12" md="6">
          <b-card-body class="card-body" :title="recipe.recipe.label">
            <span class="source">{{recipe.recipe.source}}</span>
            <b-container style="padding: 10px 0;">
              <b-row>
                <b-col cols="3" md="4" class="ingredients">
                  <h2>{{recipe.recipe.ingredientLines.length}}</h2>
                  <p>Ingredients</p>
                </b-col>
                <b-col cols="3" md="4" class="totalTime" v-if="recipe.recipe.totalTime !== 0">
                  <h2>{{recipe.recipe.totalTime}}</h2>
                  <p>Minutes</p>
                </b-col>
                <b-col cols="3" md="4" class="yield" v-if="recipe.recipe.yield !== 0">
                  <h2>{{recipe.recipe.yield}}</h2>
                  <p>Servings</p>
                </b-col>
              </b-row>
            </b-container>
            <b-button variant="info">Read Directions</b-button>
            <br />
          </b-card-body>
        </b-col>
      </b-row>
      <hr />
    </b-card>
    <div class="second-container">
      <div class="health-tags">
        <h2 class="text-info">Health Tags</h2>
        <p
          style="display: inline;"
          v-for="label in recipe.recipe.healthLabels"
          :key="label"
        >{{label}} |</p>
      </div>
      <div class="ingredients-list">
        <h2 class="text-info">Ingredients</h2>
        <ul style="padding: 0">
          <p
            v-for="(ingredient, index) in recipe.recipe.ingredientLines"
            :key="index"
          >{{ingredient}}</p>
        </ul>
      </div>
      <hr />
    </div>
    <div class="container-fluid third-container" style="max-width: 80%">
      <b-row class="justify-content-center">
        <app-recipe tag="b-col" :recipe="this.$store.state.recipes[id+1].recipe" :index="id+1"></app-recipe>
        <app-recipe tag="b-col" :recipe="this.$store.state.recipes[id+2].recipe" :index="id+2"></app-recipe>
        <app-recipe tag="b-col" :recipe="this.$store.state.recipes[id+3].recipe" :index="id+3"></app-recipe>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { RecipeType } from "../../types/recipe";
import Recipe from "./Recipe.vue";

@Component({
  components: {
    appRecipe: Recipe
  }
})
export default class RecipeDetails extends Vue {
  recipe: RecipeType[] = [];
  id!: number;

  created() {
    this.id = +this.$route.params.id;
    this.recipe = this.$store.state.recipes[this.$route.params.id];
  }

  @Watch("$route.params.id")
  fetchData() {
    this.id = +this.$route.params.id;
    this.recipe = this.$store.state.recipes[this.$route.params.id];
  }
}
</script>

<style scoped>
.card {
  border: none;
  margin: 0 auto;
}

.card-body {
  text-align: left;
  padding: 0;
}

.card-img {
  border-radius: 15px;
}

.card-title {
  font-size: 3em;
}

.source {
  color: rgb(179, 178, 178);
  font-size: 1.5em;
  padding: 10px 0;
}

.ingredients,
.yield,
.totalTime {
  font-size: 1.3em;
}

.btn {
  border-radius: 35px;
  padding: 10px 25px;
}
.btn-info {
  font-weight: bold;
  font-size: 1.3em;
}

.second-container {
  margin: 0 auto;
  width: 70%;
  text-align: left;
}

.health-tags,
.ingredients-list {
  padding: 10px 0;
}

.health-tags p,
.ingredients-list p {
  font-size: 1.2em;
}

@media (max-width: 975px) {
  .card-title {
    font-size: 2em;
  }
  .source {
    font-size: 1em;
  }
  .ingredients,
  .yield,
  .totalTime {
    font-size: 1em;
  }
  .btn {
    padding: 5px 15px;
  }
  .btn-info {
    font-size: 1em;
  }
}

@media (max-width: 760px) {
  .card-img {
    width: 50%;
  }
  .card-body {
    text-align: center;
  }
  .card-title {
    margin: 0;
    padding: 5px 0;
  }
  .row {
    justify-content: center;
  }
  .ingredients p,
  .yield p,
  .totalTime p {
    font-size: 0.7em;
  }
  .btn-info {
    font-size: 0.8em;
  }
  .health-tags p,
  .ingredients-list p {
    font-size: 1em;
  }
  .text-info {
    font-size: 1.2em;
  }
}
</style>
