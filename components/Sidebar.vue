<template>
  <div class="sidebar">
    <ul class="sidebar-menu">
      <li v-for="(menu,i) in menus" :key="i"><nuxt-link :to='menu.route'>{{menu.name}}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        status: "",
        menus: [
          {route: '/login',name: 'Login'},
          {route: '/signup', name: 'Get Started'},
          {route: '/tasks', name: 'Tasks'}
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
