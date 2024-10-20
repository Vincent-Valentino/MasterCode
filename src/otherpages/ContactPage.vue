<template>
  <div class="relative min-h-screen bg-black text-white p-4 md:p-8 overflow-hidden">
    <FloatingElements />
    <OtherNavbar :first="'About'" :second="'FAQ'"/>
  </div>
</template>

<script setup>
import FloatingElements from './FloatingElements.vue';
import OtherNavbar from './OtherNavbar.vue';
</script>

<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}
</style>