<template>
  <b-card
    :img-src="category.image"
    :title="category.title"
    style="max-width: 45%;"
    class="mb-2"
    tag="b-col"
    md="4"
    sm="6"
    @click="showRecipes"
  ></b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Category extends Vue {
  @Prop() category!: {
    id: string;
    title: string;
    image: string;
  };

  showRecipes() {
    this.$store.dispatch("getRecipes", this.category.id);
    this.$router.push("/");
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
  .card-title {
    font-size: 0.9em;
  }
}
</style>
