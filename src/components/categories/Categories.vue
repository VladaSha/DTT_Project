<template>
  <div>
    <b-container class="fluid" style="margin-top: 55px">
      <h1 style="display: block; text-align: left">Choose some yummy category</h1>
      <b-row class="justify-content-center" style="padding: 10px 0;">
        <app-category v-for="category in categories" :key="category.id" :category="category"></app-category>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Category from "./Category.vue";

@Component({
  components: {
    appCategory: Category
  }
})
export default class Categories extends Vue {
  categories = this.$store.state.categories;
}
</script>

<style scoped>
@media (max-width: 400px) {
  .fluid h1 {
    font-size: 1.2em;
  }
}
</style>
