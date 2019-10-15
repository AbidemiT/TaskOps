<template>
  <div class="container">
    <div class="login-container">
      <div class="heading">
        <h2>SIGNUP</h2>
      </div>
      <form>
        <div class="input-block">
          <label for="name">Full Name</label>
          <input type="text" placeholder="Enter your fullname" required>
        </div>
        <div class="input-block">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" required>
        </div>
        <div class="input-block">
          <label for="password">Password</label>
          <input type="password" placeholder="Enter password" required>
        </div>
        <button>Signup</button>
      </form>
      <small>Already a user? <nuxt-link to="/login">Login</nuxt-link></small>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>


</style>
