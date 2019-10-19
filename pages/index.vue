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
        <div class="card" v-for="(card,i) in cards" :key="i">
          <div class="card_image"><img :src="`/${card.img}`" :alt="card.alter"></div>
          <div class="card_title"><h3>{{card.title}}</h3></div>
          <div class="card_content"><p>{{card.content}}</p></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cards:[
        {img:'list.svg',alter:'Add Task SVG',title:'Add Task',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!'},
        {img:'list-process.svg',alter:'Task in process SVG',title:'Track Task',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!'},
        {img:'list-completed.svg',alter:'Task Completed SVG',title:'Update Task',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non inventore, blanditiis qui repudiandae veritatis molestias doloremque dolorem vitae facilis!'},
        ]
    }
  }
}
</script>

<style>


</style>
