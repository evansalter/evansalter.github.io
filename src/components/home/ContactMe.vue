<template>
  <div>
    <h1>Contact Me</h1>
    <v-grid s12 m6>
      <div class="image-container">
        <img class="contact-image" :src="contactImage"></img>
      </div>
    </v-grid>
    <v-grid s12 m6>
      <div class="contact-info">
        <p v-for="item in contactInfo">
          <icon :name="item.icon" :scale="item.scale"></icon>
          <a :href="item.url" target="_blank">{{ item.display }}</a>
        </p>
      </div>
    </v-grid>
  </div>
</template>

<script>
export default {
  name: 'contact-me',
  data: () => {
    return {
      contactImage: require('../../assets/headshot/crop.jpg'),
      contactInfo: [
        { icon: 'github', scale: '2', display: 'esalter-va', url: 'https://github.com/esalter-va/' },
        { icon: 'linkedin', scale: '2', display: 'evansalter', url: 'https://www.linkedin.com/in/evansalter/' },
        { icon: 'envelope', scale: '1.7', display: 'evan@evansalter.com', url: 'evan@evansalter.com' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-image {
  width: 215px;
  border-radius: 50%;
}

a {
  font-size: 21px;
  padding-left: 15px;
  color: white;
  text-decoration: underline;
}

svg {
  vertical-align: bottom;
}

.col {
  height: 215px;
}

.image-container {
  text-align: right;
}

.contact-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media(max-width: 600px) {
  .image-container, .contact-info {
    text-align: center;
  }
}
</style>
