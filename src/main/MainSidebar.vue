<template>
  <!-- Full-height sidebar for larger screens and drawer for mobile -->
  <div 
    v-if="isDrawerVisible || !isMobile"
    :class="{
      'fixed inset-0 z-50 bg-white p-4 w-full h-full': isDrawerVisible && isMobile,  // Mobile drawer
      'md:sticky md:h-auto md:m-5 md:ml-0 md:w-11/12 md:p-0 md:pt-8 md:mb-28 md:rounded-lg top-0 z-40': !isMobile // Desktop sidebar
    }"
    >
    
    <!-- Close button for mobile -->
    <button v-if="isDrawerVisible" @click="toggleSidebar" class="absolute top-2 md:hidden right-2 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Sidebar Content -->
    <div class="md:w-full md:bg-blue-900 rounded-t-lg">
      <h2 class="text-lg font-semibold pb-4 text-black md:text-white md:p-2">{{ selectedCourse }} Subcourses</h2>
    </div>
    <ul class="flex flex-col md:block md:space-x-0  pt-3 pb-4 bg-white">
      <li v-for="(subcourse, index) in subcourses" :key="subcourse.title" class="mb-2">
        <!-- Link to select subcourse and trigger content change -->
        <a 
          href="#" 
          class="text-blue-600 hover:text-blue-800 pl-2 p-1 mb-1"
          @click="toggleSidebar"
          @click.prevent="selectSubcourse(index)"
        >
          {{ subcourse.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';
import { courses } from '@/course/data.js';

const emit = defineEmits(['selectSubcourse']);
const props = defineProps({
  selectedCourse: String,
  isDrawerVisible: Boolean, // Pass drawer visibility state from the parent
  toggleSidebar: Function,   // Pass toggleDrawer method from the parent
});

// Detect mobile size
const isMobile = ref(window.innerWidth < 768);

// Update `isMobile` on window resize
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});

// Computed subcourses for the selected course
const subcourses = computed(() => {
  return courses[props.selectedCourse]?.subcourses || [];
});

function selectSubcourse(index) {
  emit('selectSubcourse', index); 
}
</script>

<style scoped>
</style>
