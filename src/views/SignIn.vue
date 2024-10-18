<script setup lang="ts">
import { reactive } from 'vue';
import { auth, db } from '@/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import AppLayoutLogin from '@/components/layout/AppLayoutLogin.vue';
import UiInput from '@/components/ui-components/UiInput.vue';
import UiButton from '@/components/ui-components/UiButton.vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = storeToRefs(useAuthStore());

interface AuthType {
  name: string;
  email: string;
  uid: string;
}


const formData = reactive({
  email: '',
  password: ''
})

const loginUser = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;
    const commentsQuery = query(collection(db, 'users'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(commentsQuery);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0].data();
      console.log(userDoc);
      authStore.authUser.value = userDoc as AuthType;
      localStorage.setItem('username', userDoc.name);
      router.push('/');
    }
  }
  catch (err: any) {
    console.log(err);
  }
}
</script>

<template>
  <AppLayoutLogin title="Sign In"
    subtitle="Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!">
    <form :class="$style.form" @submit.prevent="loginUser">
      <div :class="$style.input_container">
        <UiInput v-model="formData.email" type="email" id="email" label="Email Address" />
        <UiInput v-model="formData.password" type="password" id="password" label="Password" />
      </div>
      <UiButton :class="$style.button" type="submit" text="Sign In" />
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