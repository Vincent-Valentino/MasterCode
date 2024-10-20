<template>
  <div class="min-h-screen bg-white text-gray-800">
    <MainNavbar @selectedCourse="selectCourse" :IsMobile="isMobile" />

    <!-- Flex container for content and sidebar -->
    <div class="flex flex-col md:flex-row md:space-x-4 bg-slate-50">
      <!-- Main content area -->
      <div :class="!isMobile.valueOf ? 'w-[70%]' : 'w-full'">
        <div v-if="selectedCourse !== 'Home' && isMobile.valueOf" class="right-0 z-30">
          <button 
            @click="toggleSidebar" 
            class="fixed py-[0.5rem] bg-white md:hidden right-[0.5rem] h-20 border-black border-[1px] top-[70%] z-30 text-black text-xs rounded-full">
            <ChevronsLeft class="w-3 h-3"/>
          </button>
        </div>

        <MainContent 
            :selectedCourse="selectedCourse" 
            :currentSubcourseIndex="currentSubcourseIndex" 
            @updateSubcourseIndex="handleSubcourseSelection"
          />
      </div>
      <!-- Sidebar / Drawer, hidden when no course is selected -->
      <div :class="selectedCourse && selectedCourse !== 'Home' ? 'w-full md:w-[30%] h-auto' : 'hidden md:block w-0'">
        <MainSidebar 
          v-if="selectedCourse" 
          :isMobile="isMobile.valueOf"
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
import { ref } from 'vue';
import MainNavbar from './MainNavbar.vue';
import MainContent from './MainContent.vue';
import MainFooter from './MainFooter.vue';
import MainSidebar from './MainSidebar.vue';
import { ChevronsLeft } from 'lucide-vue-next';

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainContent,
    MainFooter,
    MainSidebar,
    ChevronsLeft
  },
  data() {
    return {
      selectedCourse: "Home",
      isDrawerVisible: false,
      currentSubcourseIndex: 0,  // Manage the subcourse index in the parent
      isMobile: ref(window.innerWidth < 768),  // Initial value for mobile detection
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
    },
    updateMobileStatus() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    // Add resize listener to update the mobile status reactively
    window.addEventListener('resize', this.updateMobileStatus);
  },
  unmounted() {
    // Remove the event listener when component is destroyed
    window.removeEventListener('resize', this.updateMobileStatus);
  }
}
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>
