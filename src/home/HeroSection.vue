<template>
  <div class="relative bg-blue-600 text-white py-16 flex items-center justify-center overflow-hidden">
    <!-- Dynamic Visual -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <!-- Add your background visuals or floating icons here -->
      <img src="/media/hero2.jpg" class="w-full h-full object-cover" alt="Coding Visual">
    </div>

    <!-- Text and CTA Section -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      class="relative z-10 text-center"
    >
      <h1 class="text-5xl font-extrabold mb-6">Welcome to MasterCode</h1>
      <p class="text-xl mb-8">Learn coding the right way, one language at a time.</p>
      <router-link to="/learn">
        <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Unlock Your Potential
        </button> 
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';
useMotion();
</script>

<style scoped>
/* Add styles for dynamic visuals if needed */
</style>
