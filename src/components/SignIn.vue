<script setup>
import useUserStore from '@/stores/useUserStore'
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue'
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const email = ref("");
const password = ref("");
const errorMessage = ref('')
const signin = async() =>{
  console.log('CLick')
    try {
        await userStore.loginWithEmail(email.value, password.value)
        if(userStore.isLoggedIn){
            const redirect = route.query.redirect || '/home'
            router.replace(redirect)
        }
    } catch(error){
        errorMessage.value = userStore.error || 'Login failed. Please try again.'
    }
}
</script>
<template>
  <div class="mt-10 sm:mx-auto sm:w-full">
    <form class="space-y-6" @submit.prevent="signin">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm text-left font-medium text-gray-900"
          >Email</label
        >
        <div class="mt-2">
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            autocomplete="email"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>
      </div>
      <!-- Password Field -->
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium text-gray-900">
            Password
          </label>
          <div class="text-sm">
            <!-- Replace with Router Link Custome-->
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Forgot password</a
            >
          </div>
        </div>
        <div class="mt-2">
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            autocomplete="current-password"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>
      </div>
      <!-- Error Message Display -->
      <div v-if="errorMessage" class="mt-4 text-red-600 text-sm">
        <!-- {{ errorMessage }} --> Error
      </div>
      <!-- Button SignIn -->
      <div>
        <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
            Sign In
        </button>
      </div>
      

    </form>
  </div>
</template>