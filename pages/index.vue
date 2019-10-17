<template>
  <div class="container">
    <div class="landing">
      <div class="content">
        <h2 class="landing-message">The Best Management tool, Let help you keep track of your Tasks</h2>
        <nuxt-link to="/signup" class="cta">Get Started</nuxt-link>
      </div>
      <div class="img-container">
        <img src="~/assets/images/task.png" alt="Task Png">
      </div>
    </div>
    <section id="process">
      <div class="heading"><h1>Due Process</h1></div>
      <div class="cards">
        <div class="card">
          <div class="card_image"><img src="../assets/icons/list.svg" alt="Add Task SVG"></div>
          <div class="card_title"><h3>Add Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!</p></div>
        </div>
        <div class="card">
          <div class="card_image"><img src="../assets/icons/list-process.svg" alt="Task in process SVG"></div>
          <div class="card_title"><h3>Track Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!</p></div>
        </div>
        <div class="card">
          <div class="card_image"><img src="../assets/icons/list-completed.svg" alt="Task Completed SVG"></div>
          <div class="card_title"><h3>Completed Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!</p></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

}
</script>

<style>


</style>
