<template>
  <div class="w-full min-h-screen py-6 px-1 md:p-6 relative">
    <!-- Default text when no course is selected -->
    <div
      v-if="selectedCourse === 'Home'"
      class="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-blue-50"
    >
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
        <h2 class="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 fade-in">
          Start Your Learning Journey
        </h2>
        <p class="text-md md:text-lg text-gray-600 mb-8 fade-in" style="animation-delay: 0.2s;">
          Discover a world of knowledge through our diverse course offerings.
        </p>
        <a 
          href="#navbar" 
          class="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out fade-in"
          style="animation-delay: 0.4s;"
        >
          Explore Courses
        </a>
      </div>

    <!-- Single Image -->
    <div class="md:w-1/2 fade-in" style="animation-delay: 0.6s;">
      <img 
        src="/media/hero4.jpg" 
        alt="Featured Course" 
        class="w-full h-auto rounded-full shadow-lg"
      >
    </div>
  </div>

    <!-- Dynamically load the selected course's subcourse -->
    <div v-else class="w-full">
      <component :is="currentSubcourseComponent" />

      <!-- Previous/Next buttons -->
      <div class="mt-6 flex justify-center gap-4">
        <button
          v-if="currentSubcourseIndex > 0"
          class="text-sm md:text-base px-3 py-2 rounded-2xl text-cyan-800 border-blue-400 border-2 flex items-center justify-center transition duration-200 ease-in-out hover:bg-blue-100 hover:border-blue-500 hover:text-blue-800"
          @click="previousSubcourse"
        >
          <i class="fas fa-chevron-left mr-2"></i>
          Previous
        </button>
        <button
          v-if="currentSubcourseIndex < subcourses.length - 1"
          class="text-sm md:text-base px-3 py-2 rounded-2xl text-emerald-800 border-green-400 border-2 flex items-center justify-center transition duration-200 ease-in-out hover:bg-green-100 hover:border-green-500 hover:text-green-800"
          @click="nextSubcourse"
        >
          Next
          <i class="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, defineAsyncComponent, ref } from 'vue';
import { courses } from '@/course/data.js'; // Import course data

// Props from the parent
const props = defineProps({
  selectedCourse: String,
  currentSubcourseIndex: Number  // The selected subcourse index from the parent
});

// Emit events to notify the parent about subcourse changes
const emit = defineEmits(['updateSubcourseIndex']);

// Get subcourses from the selected course
const subcourses = computed(() => (courses[props.selectedCourse]?.subcourses) || []);

// Dynamically load the component for the selected subcourse
const currentSubcourseComponent = computed(() => {
  const subcourse = subcourses.value[props.currentSubcourseIndex];
  return subcourse ? defineAsyncComponent(subcourse.component) : null;
});

// Navigate to the next subcourse
function nextSubcourse() {
  if (props.currentSubcourseIndex < subcourses.value.length - 1) {
    emit('updateSubcourseIndex', props.currentSubcourseIndex + 1);  // Emit event to the parent
  }
}

// Navigate to the previous subcourse
function previousSubcourse() {
  if (props.currentSubcourseIndex > 0) {
    emit('updateSubcourseIndex', props.currentSubcourseIndex - 1);  // Emit event to the parent
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
