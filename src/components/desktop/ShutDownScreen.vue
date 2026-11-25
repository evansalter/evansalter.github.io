<template>
  <div class="shut-down-screen"
       ref="screen"
       role="dialog"
       aria-modal="true"
       aria-labelledby="shut-down-message"
       aria-describedby="shut-down-hint"
       tabindex="-1"
       @click="restart"
       @keydown="onKeydown">
    <p id="shut-down-message" class="message">It's now safe to turn off<br> your computer.</p>
    <p id="shut-down-hint" class="hint">Click or press any key to restart</p>
  </div>
</template>

<script>
const MODIFIERS = ['Shift', 'Control', 'Alt', 'Meta']

export default {
  name: 'shut-down-screen',
  mounted: function () {
    this.previousFocus = document.activeElement
    this.previousOverflow = document.documentElement.style.overflow
    // No scrollbars on a computer that's off
    document.documentElement.style.overflow = 'hidden'
    this.$refs.screen.focus()
  },
  beforeDestroy: function () {
    document.documentElement.style.overflow = this.previousOverflow
    if (this.previousFocus) {
      this.previousFocus.focus()
    }
  },
  methods: {
    onKeydown: function (event) {
      // Ignore the held-down key that opened this screen, and keyboard shortcuts
      if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || MODIFIERS.includes(event.key)) return
      event.preventDefault()
      this.restart()
    },
    restart: function () {
      this.$emit('restart')
    }
  }
}
</script>

<style lang="scss" scoped>
.shut-down-screen {
  position: fixed;
  inset: 0;
  // Above the taskbar, which 95CSS puts at 50
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--px) * 16);
  background-color: #000;
  text-align: center;
  outline: none;
}

.message {
  margin: 0;
  color: #ff8c1a;
  font-size: calc(var(--font-size) * 3);
  line-height: 1.2;
  font-weight: bold;
  text-wrap: balance;
}

// The original leaves you to find the power switch; give people a way back
.hint {
  position: absolute;
  inset: auto 0 calc(var(--px) * 24);
  margin: 0;
  color: var(--color-gray-300);
  opacity: 0;
  animation: show-hint 0s 2s forwards;
}

@keyframes show-hint {
  to { opacity: 1; }
}

@media (max-width: 767px) {
  .message {
    font-size: calc(var(--font-size) * 2);
  }
}
</style>
