<template>
  <div>
    <h2>About me.</h2>
    <p>
      I am a software developer living and working in Saskatoon, Saskachewan. I am currently working at 
      <a href="https://vendasta.com/" target="_blank">Vendasta Technologies</a> and hold a Bachelor of Science in Computer Science
      from the University of Saskatchewan.
    </p>
    <p>
      I enjoy working both in the front and back-end stacks. I focus on Go and the Google Cloud Platform for the backend
      and various Javascript frameworks from the frontend. That said, I am always excited to learn new technologies and tools.
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
