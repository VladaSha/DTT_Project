<template>
  <div class="container">
    <div class="searchContainer">
      <i class="fa fa-search searchIcon"></i>
      <input
        class="searchBox"
        type="search"
        name="search"
        placeholder="Search a million recipes & more"
        @keyup.enter="onSubmit"
        v-model="userInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  userInput: string = "";

  onSubmit() {
    this.$store.dispatch("getRecipes", this.userInput);
  }
}
</script>

<style scoped>
.searchContainer {
  display: inline-flex;
  border: 1px solid rgb(243, 241, 241);
  border-radius: 45px;
  box-shadow: 5px 5px 25px rgb(214, 213, 213);
  width: 80%;
  margin-bottom: 20px;
}

.searchIcon {
  padding: 1.2em;
  color: rgb(99, 98, 98);
  font-size: 1.2em;
}

input.searchBox {
  background-color: white;
  width: 65%;
}

input:focus {
  outline: none;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

.searchBox {
  border: 0;
  font-size: 1.5em;
}

@media (max-width: 400px) {
  .searchBox {
    border: 0;
    font-size: 1em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .searchIcon {
    padding: 1em;
    font-size: 1em;
  }
}

::placeholder {
  color: rgb(180, 180, 180);
}
</style>
