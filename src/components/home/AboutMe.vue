<template>
  <div>
    <h2>About me.</h2>
    <p>
      I am a software developer based in Saskatoon, Saskachewan. I am currently working remotely at 
      <a href="https://rewind.com" target="_blank">Rewind</a> and hold a Bachelor of Science in Computer Science
      from the University of Saskatchewan.
    </p>
    <p>
      I am a full-stack developer with extensive experience building scalable, modern SaaS products.
      Currently I am working with Ruby on Rails and React to build a backup service for the world's most popular SaaS applications.
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
