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
        <SwiperSlide v-for="course in courses" :key="course.name" class="!w-auto">
          <button @click="selectCourse(course.name)" 
                  class="text-white m-1 px-1 py-2 rounded-full text-sm md:text-lg md:px-3 md:mx-5  whitespace-nowrap flex flex-col justify-center items-center">
            <!-- Display SVG Icon -->
            <img :src="course.icon" :alt="course.name" class="size-12 md:size-16 mr-2"/>
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

// Courses object array with course name and SVG path
const courses = ref([
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'C++', icon: '/icons/cplusplus.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: 'Go', icon: '/icons/go.svg' },
  { name: 'Ruby', icon: '/icons/ruby.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'SQL', icon: '/icons/mysql.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'HTML', icon: '/icons/html5.svg' },
  { name: 'CSS', icon: '/icons/css3.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Vue', icon: '/icons/vuedotjs.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' }
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

img {
  display: inline-block;
  vertical-align: middle;
}
</style>
