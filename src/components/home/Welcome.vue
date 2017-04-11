<template>
  <v-col xs12 sm7 class="text-container">
    <div class="text">
      <h1>Hi.</h1>
      <h3>I'm Evan Salter.</h3>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style lang="scss" scoped>
.text-container {
  padding-bottom: 0;
  padding-left: 25px;
  height: calc(100vh - 128px);
  background: linear-gradient(to right, rgba(33,150,243,1) 0%,rgba(33,150,243,1) 50%,rgba(33,150,243,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  * {
    color: white;
  }
}

@media(max-width: 575px) {
  .text-container {
    background: #2196F3;
  }
  .text {
    text-align: center;
  }
}
</style>
