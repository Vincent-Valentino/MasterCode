<template>
  <div class="min-h-screen bg-white text-gray-800">
    <MainNavbar @selectedCourse="selectCourse" @toggleSidebar="toggleSidebar" />
    <LanguageIcons />

    <!-- Flex container for content and sidebar -->
    <div class="flex flex-col md:flex-row md:space-x-4 bg-slate-50">
      <!-- Main content area -->
      <div :class="selectedCourse ? 'w-full md:w-3/4' : 'w-full'">
        <MainContent 
          :selectedCourse="selectedCourse" 
          :currentSubcourseIndex="currentSubcourseIndex" 
          @updateSubcourseIndex="handleSubcourseSelection"
        />
      </div>

      <!-- Sidebar / Drawer, hidden when no course is selected -->
      <div :class="selectedCourse ? 'w-full md:w-1/4 h-auto' : 'hidden md:block w-0'">
        <MainSidebar 
          v-if="selectedCourse" 
          :selectedCourse="selectedCourse" 
          :toggleSidebar="toggleSidebar" 
          :isDrawerVisible="isDrawerVisible" 
          @selectSubcourse="handleSubcourseSelection"
        />
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './MainNavbar.vue';
import LanguageIcons from './MainIcon.vue';
import MainContent from './MainContent.vue';
import MainFooter from './MainFooter.vue';
import MainSidebar from './MainSidebar.vue';

export default {
  name: 'App',
  components: {
    MainNavbar,
    LanguageIcons,
    MainContent,
    MainFooter,
    MainSidebar
  },
  data() {
    return {
      selectedCourse: null,
      isDrawerVisible: false,
      currentSubcourseIndex: 0  // Manage the subcourse index in the parent
    };
  },
  methods: {
    selectCourse(course) {
      this.selectedCourse = course;  // Update the selected course
      this.currentSubcourseIndex = 0;  // Reset subcourse index when a new course is selected
    },
    toggleSidebar() {
      this.isDrawerVisible = !this.isDrawerVisible;  // Toggle sidebar visibility
    },
    handleSubcourseSelection(index) {
      this.currentSubcourseIndex = index;  // Update subcourse index in the parent
    }
  }
}
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>
