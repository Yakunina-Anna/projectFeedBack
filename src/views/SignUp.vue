<script setup lang="ts">
import { reactive } from 'vue'
import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import AppLayoutLogin from '@/components/layout/AppLayoutLogin.vue';
import UiInput from '@/components/ui-components/UiInput.vue';
import UiButton from '@/components/ui-components/UiButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;
    // Сохранение имени пользователя в Firestore
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: formData.name,
      email: user.email
    });
    console.log('User registered:', user);
    router.push('/signIn');
  } catch (err: any) {
    console.log(err);

  }
}
</script>

<template>
  <AppLayoutLogin title="Sign Up"
    subtitle="Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!">
    <form :class="$style.form" @submit.prevent="handleSubmit">
      <div :class="$style.input_container">
        <UiInput v-model="formData.name" type="text" id="name" label="Full Name" />
        <UiInput v-model="formData.email" type="email" id="email" label="Email Address" />
        <UiInput v-model="formData.password" type="password" id="password" label="Password" />
        <!-- <UiInput
          v-model="formData.password"
          type="password"
          id="password"
          label="Password"
        /> -->
      </div>
      <UiButton :class="$style.button" type="submit" text="Sign Up" />
    </form>
  </AppLayoutLogin>
</template>

<style lang="css" module>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input_container {
  display: flex;
  flex-direction: column;
  gap: 24px 0;
}

.button {
  margin-top: 56px;
  width: 100%;
}
</style>