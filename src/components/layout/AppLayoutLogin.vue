<script setup lang="ts">
import UiButton from '@/components/ui-components/UiButton.vue'
interface Props {
  title: string,
  subtitle: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: ''
})
</script>

<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="13.0001" r="9" fill="white"/>
        <path d="M25.0147 12.4881L43.7597 1.69507L43.7342 23.3252L25.0147 12.4881Z" fill="white"/>
      </svg>
    </header>
    <section :class="$style.content">
      <h1 :class="$style.title">{{ title }}</h1>
      <p :class="$style.subtitle">{{ subtitle }}</p>
      
      <slot />
      <!-- <a :class="$style.button">Get Started</a> -->
    </section>
  </div>
</template>

<style lang="css" module>
.container {
  background: url('@/assets/images/backgroundLogin.jpeg') no-repeat center center;
  height: 100dvh;
  padding: 43px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-bottom: 122px;
  align-self: start;
}

.title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 28px;
}

.subtitle {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 56px;
}

.content {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.button {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #F6B8FD, #316AD7);
}
</style>