<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-link class="nav-link" to="/categories" activeClass="active">Categories</b-link>
          <b-link class="nav-link" to="/random" activeClass="active">Random</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
