<template>
  <social-sharing :url="url"
                  :title="title"
                  :description="description"
                  :hashtags="hashtags"
                  :media="media"
                  twitterUser="_evansalter"
                  inline-template>
    <div>
      <network network="facebook">
        <icon name="facebook"></icon>
      </network>
      <network network="twitter">
        <icon name="twitter"></icon>
      </network>
      <network network="linkedin">
        <icon name="linkedin"></icon>
      </network>
      <network network="googleplus">
        <icon name="google-plus"></icon>
      </network>
      <network network="reddit">
        <icon name="reddit"></icon>
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  name: 'sharing',
  props: ['url', 'title', 'description', 'hashtags', 'media']
}
</script>

<style lang="scss">
svg.fa-icon {
  cursor: pointer;
}
</style>
