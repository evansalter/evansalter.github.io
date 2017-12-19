<template>
  <div>
    <h2>About me.</h2>
    <p>
      I am a computer science student at the University of Saskatchewan, currently finishing my final year.
      I recently completed a 16 month internship with Vendasta Technologies in Saskatoon, SK. During this time
      I gained experience working as a software developer in an agile environment, working mostly with various web
      technologies based on Google Cloud Platform.
    </p>
    <p>
      I love all things computer science, but my current passion is web development (both front and back-end).
      That said, I am always open to trying new things and learning new technologies whenever I have the chance.
    </p>
    <p>
      Check out the <a href="#languages-and-frameworks">languages and frameworks</a> that I use below, and
      browse through my <router-link to="/projects">projects page</router-link> to see what I've been up to.
      Please feel free to contact me with any sort of question, thought, concern, opportunity, or just to chat.
    </p>
  </div>
</template>

<script>
export default {
  name: 'about-me'
}
</script>

<style lang="scss" scoped>
h2 {
  color: white;
}
p {
  font-size: 25px;
}
a {
  color: white;
}
</style>
