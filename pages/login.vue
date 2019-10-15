<template>
  <div class="container">
    <div class="login-container">
      <div class="heading">
        <h2>LOGIN</h2>
      </div>
      <form>
        <div class="input-block">
          <label for="email">Email:</label>
          <input type="email" placeholder="Enter your email" required>
        </div>
        <div class="input-block">
          <label for="password">Password:</label>
          <input type="password" placeholder="Enter password" required>
        </div>
        <button>Login</button>
      </form>
      <small>Not a user? <nuxt-link to="/signup">SignUp</nuxt-link></small>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>


</style>
