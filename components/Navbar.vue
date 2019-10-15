<template>
  <div class="navbar">
    <div class="logo"><nuxt-link exact to="/">TaskOps</nuxt-link></div>
    <ul class="menu">
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link class="cta-outline" to="/signup">Get Started</nuxt-link></li>
    </ul>
    <div class="sm-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style lang="scss" scoped>

</style>
