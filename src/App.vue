<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";

@Component({
  components: {
    appNavbar: Navbar
  }
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("getRecipes", "pancakes");
  }
}
</script>

<style>
body {
  padding-top: 7%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
