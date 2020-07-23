<template>
  <div>
      {{ topLanguages }}
  </div>
</template>

<script>
const axios = require('axios').default

const corsProxyURL = 'https://cors-anywhere.herokuapp.com'
const wakatimeTopLanguagesURL = 'https://wakatime.com/share/@f088a47b-db50-441d-b317-5706454b2818/e888cbe5-de3f-4352-b3c7-cf3610080fc9.json'

export default {
  name: 'wakatime',
  data: () => {
    return {
      topLanguages: []
    }
  },
  mounted () {
    const url = `${corsProxyURL}/${wakatimeTopLanguagesURL}`
    axios.get(url).then(resp => {
      this.topLanguages = resp.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
