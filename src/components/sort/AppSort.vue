<template>
  <div id="sort">
    <select
      v-if="this.$store.state.recipes.length !== 0"
      class="custom-select"
      v-model="selected"
      @change="onSort"
    >
      <option class="select-item" disabled value>Sort by</option>
      <option class="select-item" value="calories">Calories</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AppSort extends Vue {
  selected: string = "";

  onSort() {
    this.$store.dispatch("sortRecipes", this.selected);
  }
}
</script>

<style scoped>
#sort {
  display: block;
}

.custom-select,
.select-item {
  font-size: 0.9em;
  margin: 0 0 15px 15px;
  color: grey;
  border: 0;
}
</style>
