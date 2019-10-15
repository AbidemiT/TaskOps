<template>
  <div>
    <Navbar @sidebarStatus="updateSidebar"/>
      <Sidebar v-if="status"/>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      status:false
    }
  },
  methods: {
    updateSidebar(value) {
      if (value === "sm-menu") {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  }
}
</script>

<style>

</style>
