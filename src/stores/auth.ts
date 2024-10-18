import { defineStore } from 'pinia'
import { ref } from 'vue'

interface AuthType {
  name: string;
  email: string;
  uid: string;
}

export const useAuthStore = defineStore('Auth', () => {
  const authUser = ref<AuthType>({
    name: '',
    email: '',
    uid: ''
  })

  return {
    authUser
  }
})