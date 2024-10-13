<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Mobile Menu Button (fixed only on mobile) -->
        <div 
          class="flex-shrink-0 flex items-center fixed w-full top-0 left-0 bg-white z-10 h-16 md:relative md:w-auto">
          <h2 class="font-black text-xl md:text-3xl ml-4 ">MasterCode</h2>

          <!-- Mobile menu button (show only when a course is selected) -->
          <button 
            v-if="isMobile && selectedCourse"
            @click="toggleSidebar"
            class="ml-auto p-1 bg-black text-white rounded-md focus:outline-none fixed top-4 right-4 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Course buttons for larger screens (not part of the fixed navbar) -->
    <div class="py-4 bg-gray-100">
      <Swiper
        :slides-per-view="'auto'"
        :space-between="10"
        :free-mode="true"
        :modules="[FreeMode]"
        class="mySwiper p-5"
      >
        <SwiperSlide v-for="course in courses" :key="course" class="!w-auto">
          <button @click="selectCourse(course)" 
                  class="bg-stone-950 text-white m-1 px-3 py-2 rounded-full text-xs md:text-base whitespace-nowrap">
            {{ course }}
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const courses = ref([
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Ruby', 'PHP', 'SQL',
  'MongoDB', 'HTML', 'CSS', 'TailwindCSS', 'React', 'Vue', 'Angular', 'Firebase', 'Next.js'
]);

const emit = defineEmits(['selectedCourse', 'toggleSidebar']);

// Track the selected course
const selectedCourse = ref(null);

// Emit the selected course when clicked
function selectCourse(course) {
  selectedCourse.value = course;  // Update selectedCourse
  emit('selectedCourse', course);  // Emit the selected course to the parent
}

// Emit toggleSidebar event when the menu button is clicked
function toggleSidebar(){
  emit('toggleSidebar');
}

const isMobile = ref(window.innerWidth < 768);

// Update isMobile on window resize
onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});
</script>

<style scoped>
/* Ensure slides only take up the necessary width */
.swiper-slide {
  width: auto !important;
}
</style>
