<template>
  <div class="container">
    <img src="../../assets/headshot/crop.jpg">
    <div class="contact-info">
      <h3>Evan Salter</h3>
      <div class="icons">
        <a v-for="i of contactInfo" :key="i" :href="i.url" :target="i.newTab === false ? '' : '_blank'">
          <icon :name="i.icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getContactInfo } from '../common/contact'

export default {
  name: 'resume-intro',
  data: () => {
    return {
      contactInfo: [
        getContactInfo('GitHub') || {},
        getContactInfo('LinkedIn') || {},
        getContactInfo('Email') || {}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  max-height: 25px;
  text-align: center;
}

img {
  width: 100px;
  border-radius: 90px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icons {
  width: 200px;
  display: flex;
  justify-content: space-between;

  svg {
      height: 30px;
      width: 30px;
  }
}
</style>
