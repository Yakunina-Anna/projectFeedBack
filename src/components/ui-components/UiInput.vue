<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';

interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  placeholder: '',
  id: '',
  type: 'text'
});
const mdiEyeOn = ref(mdiEyeOutline);
const mdiEyeOff = ref(mdiEyeOffOutline);
const model = defineModel({ default: '' });

const isFocused = ref<boolean>(false);
const showPassword = ref<boolean>(false);

const handleBlur = () => {
  if (!model.value.length) {
    isFocused.value = false;
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

watch(model, (newValue) => {
  if (newValue) {
    isFocused.value = true;
  } else {
    isFocused.value = false;
  }
});

onMounted(() => {
  if (model.value.length) {
    isFocused.value = true;
  }
});

</script>

<template>
  <div :class="$style.floatingLabelInput">
    <input
      v-model="model"
      :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
      :id="id"
      @blur="handleBlur"
      @focus="isFocused = true"
    />
    <label :class="{ [$style.active]: isFocused || model }" for="input">{{ label }}</label>
    <button v-if="type === 'password'" type="button" :class="$style.togglePassword" @click="togglePasswordVisibility">
      <span v-if="showPassword">
        <svg-icon type="mdi" :path="mdiEyeOn"></svg-icon>
      </span>
      <span v-else>
        <svg-icon type="mdi" :path="mdiEyeOff"></svg-icon>
      </span>
    </button>
  </div>
</template>


<style module>
.floatingLabelInput {
  position: relative;
}

.floatingLabelInput input {
  height: 60px;
  width: 100%;
  background-color: none;
  padding: 0 18px;
  background: transparent;
  border: 1px solid #4D4D4D;
  border-radius: var(--border-radius);
  font-size: 22px;
  color: #FFFFFF;
}

.floatingLabelInput label {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  pointer-events: none;
}

.floatingLabelInput label.active {
  top: -10px;
  left: 10px;
  font-size: 12px;
  color: #FFFFFF;
  background-color: none;
}

.togglePassword {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: #FFFFFF;
}
</style>
