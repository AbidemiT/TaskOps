<template>
  <div class="container">
    <div class="login-container">
      <div class="heading">
        <h2>SIGNUP</h2>
      </div>
      <form @submit.prevent="validateForm">
        <div class="input-block">
          <label for="name">Full Name</label>
          <input type="text" placeholder="Enter your full name" required>
        </div>
        <div class="input-block">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" required>
        </div>
        <div class="input-block">
          <label for="password">Password</label>
          <input :class="{isErr:error}" type="password" placeholder="Enter password" v-model="password" @keyup="clear">
        </div>
        <div class="input-block">
          <label for="password">Confirm Password</label>
          <input type="password" placeholder="Confirm password" v-model="cpassword">
        </div>
        <small class="error" v-if="errMessage">Passwords doesn't match</small>
        <button>Signup</button>
      </form>
      <small>Already a user? <nuxt-link to="/login">Login</nuxt-link></small>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      password: "",
      cpassword: "",
      error: false,
      errMessage: false,
    }
  },
  methods: {
    validateForm() {
      if (!this.password) {
       return this.error = true;
      }

      if (this.password !== this.cpassword) {
        return this.errMessage = true;
      }
        this.$router.push('/user/me');
    },
    clear() {
      if (this.password) {
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
    /* font-size: .8rem; */
  }
</style>
