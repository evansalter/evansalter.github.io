<template>
  <div class="contact-container">
    <h2>Get in touch.</h2>
    <v-row>
      <v-col xs12 sm6>
        <div class="image-container">
          <img class="contact-image" :src="contactImage"></img>
        </div>
      </v-col>
      <v-col xs12 sm6>
        <div class="contact-info">
          <p v-for="item in contactInfo">
            <icon :name="item.icon" :scale="item.scale"></icon>
            <a :href="item.url" target="_blank">{{ item.display }}</a>
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import contactInfo from '@/components/common/contact.js'

export default {
  name: 'contact-me',
  data: () => {
    return {
      contactImage: require('../../assets/headshot/crop.jpg'),
      contactInfo: contactInfo
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding-bottom: 15px;
  color: white;
}

.col {
  height: 215px;
}

.image-container {
  text-align: right;

  .contact-image {
    width: 215px;
    border-radius: 50%;
  }
}

.contact-container {
  width: 100%;
}

.contact-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    font-size: 21px;
    padding-left: 15px;
    color: white;
    text-decoration: underline;
  }

  svg {
    vertical-align: bottom;
  }
}

@media(max-width: 575px) {
  .image-container, .contact-info {
    text-align: center;
  }
  .contact-info {
    padding-top: 45px;
  }
}
</style>
