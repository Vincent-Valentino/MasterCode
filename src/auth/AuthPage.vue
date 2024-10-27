<template>
  <div class="min-h-screen bg-gradient-to-r from-white via-stone-200 to-slate-300 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to MasterCode
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Unlock your coding potential with our e-learning platform
        </p>
      </div>
      
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <div class="flex justify-center mb-4">
            <button
              @click="activeSection = 'login'"
              :class="['px-4 py-2 text-sm font-medium', activeSection === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500']"
            >
              Login
            </button>
            <button
              @click="activeSection = 'signup'"
              :class="['px-4 py-2 text-sm font-medium', activeSection === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500']"
            >
              Sign Up
            </button>
          </div>
          
          <transition name="fade" mode="out-in">
            <component :is="activeSection === 'login' ? LoginSection : SignUpSection" />
          </transition>
        </div>
      </div>
      
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          By using MasterCode, you agree to our
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Terms of Service</a>
          and
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginSection from './LoginSection.vue';
import SignUpSection from './SignUpSection.vue';

const activeSection = ref("login");


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>