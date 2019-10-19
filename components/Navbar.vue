<template>
  <div class="navbar">
    <div class="logo"><nuxt-link exact to="/">TaskOps</nuxt-link></div>
    <ul class="menu">
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link class="cta-outline" to="/signup">Get Started</nuxt-link></li>
    </ul>
    <div :class="tog" @click="toggle()">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data(){
      return {
        sm: "sm-menu",
        cancel: "cancel",
        tog: "sm-menu"
      }
    },
    methods: {
      toggle(){
        if(this.tog === "sm-menu") {
          this.tog = this.cancel;
          this.$emit('sidebarStatus',this.tog);
        } else {
          this.tog = this.sm;
          this.$emit('sidebarStatus',this.tog);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
