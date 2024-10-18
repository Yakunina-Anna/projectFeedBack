<script lang="ts" setup>
interface Props {
  text: string,
  type: 'submit' | 'button',
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'submit'
})

const emit = defineEmits(['click'])
</script>

<template>
  <button :type="type" :class="$style.button" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<style lang="css" module>
.button {
 width: 100%;
  height: 50px;
  font-size: 24px;
  border-radius: var(--border-radius);
  background: linear-gradient(to right, #F6B8FD, #316AD7);
  color: white;
  cursor: pointer;
}
</style>