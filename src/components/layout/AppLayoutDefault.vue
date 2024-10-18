<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const links = reactive([
  {
    text: 'About',
    to: '/about'
  },
  {
    text: 'Projects',
    to: '/'
  },
  {
    text: 'Sign In',
    to: '/signIn'
  },
  {
    text: 'Contact',
    to: '/contact'
  }
])
</script>

<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <RouterLink
        v-for="(item, index) in links"
        :key="index" :to="item.to"
        :class="[$style.link, { [$style.link_active]: item.to === $route.path }]"
      >
        {{ item.text }}
      </RouterLink>
    </header>
    <main :class="$style.main">
      <slot />
    </main>
  </div>
</template>

<style lang="css" module>
.container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 0 32px;
  width: min-content;
  background: linear-gradient(to left, rgb(12, 14, 35) 16%, rgb(4, 7, 29) 75%);
  border: 1px solid rgba(105, 113, 162, 0.16);
  border-radius: 14px;
  padding: 25px 50px 15px 50px;
  margin-bottom: 95px;
}

.link {
  font-size: 16px;
  color: #C1C2D3;
  width: max-content;
  text-decoration: none;
  position: relative;
  padding-bottom: 10px;
}

.link_active {
  color: #FFFFFF;
}

.link_active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 7px;
  height: 7px;
  background-color: #FFFFFF;
  border-radius: 50%;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px 0;
}
</style>