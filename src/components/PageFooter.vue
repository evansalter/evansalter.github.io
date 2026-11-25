<template>
  <footer id="page-footer">
    (C) 2017 &dash; {{ currentYear }} Evan Salter / Hosted on <a href="https://github.io" target="_blank" rel="noopener">github.io</a>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  data: () => {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
#page-footer {
  padding: calc(var(--px) * 6);
  text-align: center;
  color: var(--color-white);

  a {
    color: var(--color-white);
  }
}
</style>
