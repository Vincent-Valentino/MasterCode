<template>
  <!-- Main Navbar and Menu Section -->
  <transition name="slide-down">
    <div v-if="IsMenuVisible" class="absolute bg-stone-800 min-h-screen md:min-h-1/3 text-white left-0 top-0 w-full z-50">
      <!-- Close Button -->
      <div class="p-4 flex justify-center">
        <button @click="toggleMenu" class="text-white border-2 border-white rounded-full p-2">
          <X class="md:size-6 size-4" />
        </button>
      </div>

      <!-- Menu Content -->
      <div class="p-4 flex flex-col space-y-6">
        <!-- Section 1: Main Links -->
        <div class="flex flex-row border-yellow-700 pb-3 border-b-2">
          <div class="w-1/2 md:w-full flex-col md:flex-row md:justify-start md:gap-10 md:px-10 md:py-2 md:font-bold md:text-yellow-300 flex gap-4 text-justify">
            <a href="#" @click="mainPage" class="menu-link ml-2">Home</a>
            <a href="/about" class="menu-link ml-2">About</a>
            <a href="#" class="menu-link ml-2">FAQ</a>
            <a href="#" class="menu-link hidden md:block">Account</a>
            <a href="#" class="menu-link hidden md:block">Achievements</a>
          </div>
          <div class="w-1/2 flex flex-col gap-4 text-justify md:hidden items-justify">
            <a href="#" class="menu-link ml-2">Account</a>
            <a href="#" class="menu-link ml-2">Achievements</a>
            <a href="#" class="menu-link special-link w-1/2 md:hidden">Login</a>
          </div>
        </div>

        <!-- Section 2: Code & Frameworks -->
        <div class="flex flex-col md:flex-row gap-3 md:justify-between md:mx-2 md:px-3 md:pb-5 md:gap-1">
          <!-- For screens smaller than md, use dropdowns -->
          <div class="flex flex-col space-y-4">
            <div v-if="IsThisMobile()" class="dropdown">
              <button @click="toggleDropdown('code')" class="menu-link flex justify-between items-center w-full">
                Code
                <span v-if="dropdown === 'code'">▲</span>
                <span v-else>▼</span>
              </button>
              <ul v-if="dropdown === 'code'" class="dropdown-list flex flex-col pl-4 mt-2 space-y-2">
                <a href="#" @click="NavLinks('Python')" class="dropdown-item">Python</a>
                <a href="#" @click="NavLinks('JavaScript')" class="dropdown-item">JavaScript</a>
                <a href="#" @click="NavLinks('TypeScript')" class="dropdown-item">TypeScript</a>
                <a href="#" @click="NavLinks('C++')" class="dropdown-item">C++</a>
                <a href="#" @click="NavLinks('Java')" class="dropdown-item">Java</a>
                <a href="#" @click="NavLinks('C#')" class="dropdown-item">C#</a>
                <a href="#" @click="NavLinks('Ruby')" class="dropdown-item">Ruby</a>
                <a href="#" @click="NavLinks('PHP')" class="dropdown-item">PHP</a>
                <a href="#" @click="NavLinks('HTML')" class="dropdown-item">HTML</a>
                <a href="#" @click="NavLinks('CSS')" class="dropdown-item">CSS</a>
              </ul>
            </div>

            <!-- For screens md and larger, render links directly -->
            <div v-else class="flex flex-col gap-3">
              <h1 class="font-bold text-yellow-100 text-lg border-l-8 border-yellow-600 pl-1 bg-stone-700 pr-2 mb-5">Language</h1>
              <a href="#" @click="NavLinks('Python')" class="menu-link ml-2">Python</a>
              <a href="#" @click="NavLinks('JavaScript')" class="menu-link ml-2">JavaScript</a>
              <a href="#" @click="NavLinks('TypeScript')" class="menu-link ml-2">TypeScript</a>
              <a href="#" @click="NavLinks('C++')" class="menu-link ml-2">C++</a>
              <a href="#" @click="NavLinks('Java')" class="menu-link ml-2">Java</a>
              <a href="#" @click="NavLinks('C#')" class="menu-link ml-2">C#</a>
              <a href="#" @click="NavLinks('Ruby')" class="menu-link ml-2">Ruby</a>
              <a href="#" @click="NavLinks('PHP')" class="menu-link ml-2">PHP</a>
              <a href="#" @click="NavLinks('HTML')" class="menu-link ml-2">HTML</a>
              <a href="#" @click="NavLinks('CSS')" class="menu-link ml-2">CSS</a>
            </div>
          </div>

          <!-- Frontend Frameworks -->
          <div class="flex flex-col space-y-4">
            <div v-if="IsThisMobile()" class="dropdown">
              <button @click="toggleDropdown('frontendFrameworks')" class="menu-link flex justify-between items-center w-full">
                Frontend
                <span v-if="dropdown === 'frontendFrameworks'">▲</span>
                <span v-else>▼</span>
              </button>
              <ul v-if="dropdown === 'frontendFrameworks'" class="dropdown-list flex flex-col pl-4 mt-2 space-y-2">
                <a href="#" @click="NavLinks('React')" class="dropdown-item">React</a>
                <a href="#" @click="NavLinks('Vue')" class="dropdown-item">Vue</a>
                <a href="#" @click="NavLinks('Angular')" class="dropdown-item">Angular</a>
                <a href="#" class="dropdown-item">Svelte</a>
                <a href="#" class="dropdown-item">Ember</a>
                <a href="#" class="dropdown-item">Backbone</a>
                <a href="#" class="dropdown-item">Preact</a>
                <a href="#" @click="NavLinks('NextJS')" class="dropdown-item">Next.js</a>
                <a href="#" class="dropdown-item">Nuxt.js</a>
                <a href="#" class="dropdown-item">Gatsby</a>
              </ul>
            </div>

            <div v-else class="flex flex-col gap-3">
              <h1 class="font-bold text-yellow-100 text-lg border-l-8 border-yellow-600 pl-1 bg-stone-700 pr-2 mb-5">Frontend</h1>
              <a href="#" @click="NavLinks('React')" class="menu-link ml-2">React</a>
              <a href="#" @click="NavLinks('Vue')" class="menu-link ml-2">Vue</a>
              <a href="#" @click="NavLinks('Angular')" class="menu-link ml-2">Angular</a>
              <a href="#" class="menu-link ml-2">Svelte</a>
              <a href="#" class="menu-link ml-2">Ember</a>
              <a href="#" class="menu-link ml-2">Backbone</a>
              <a href="#" class="menu-link ml-2">Preact</a>
              <a href="#" @click="NavLinks('NextJS')" class="menu-link ml-2">Next.js</a>
              <a href="#" class="menu-link ml-2">Nuxt.js</a>
              <a href="#" class="menu-link ml-2">Gatsby</a>
            </div>
          </div>

          <!-- Backend Frameworks -->
          <div class="flex flex-col space-y-4">
            <div v-if="IsThisMobile()" class="dropdown">
              <button @click="toggleDropdown('backendFrameworks')" class="menu-link flex justify-between items-center w-full">
                Backend
                <span v-if="dropdown === 'backendFrameworks'">▲</span>
                <span v-else>▼</span>
              </button>
              <ul v-if="dropdown === 'backendFrameworks'" class="dropdown-list flex flex-col pl-4 mt-2 space-y-2">
                <a href="#" class="dropdown-item">Django</a>
                <a href="#" class="dropdown-item">Flask</a>
                <a href="#" class="dropdown-item">Express</a>
                <a href="#" class="dropdown-item">Laravel</a>
                <a href="#" class="dropdown-item">Spring Boot</a>
                <a href="#" class="dropdown-item">Ruby on Rails</a>
                <a href="#" class="dropdown-item">ASP.NET</a>
                <a href="#" class="dropdown-item">FastAPI</a>
                <a href="#" class="dropdown-item">Gin</a>
              </ul>
            </div>

            <div v-else class="flex flex-col gap-3">
              <h1 class="font-bold text-yellow-100 text-lg border-l-8 border-yellow-600 pl-1 bg-stone-700 pr-2 mb-5">Backend</h1>
              <a href="#" class="menu-link ml-2">Django</a>
              <a href="#" class="menu-link ml-2">Flask</a>
              <a href="#" class="menu-link ml-2">Express</a>
              <a href="#" class="menu-link ml-2">Laravel</a>
              <a href="#" class="menu-link ml-2">Spring Boot</a>
              <a href="#" class="menu-link ml-2">Ruby on Rails</a>
              <a href="#" class="menu-link ml-2">ASP.NET</a>
              <a href="#" class="menu-link ml-2">FastAPI</a>
              <a href="#" class="menu-link ml-2">Gin</a>
            </div>
          </div>

          <!-- Tools -->
          <div class="flex flex-col space-y-4">
            <div v-if="IsThisMobile()" class="dropdown">
              <button @click="toggleDropdown('tools')" class="menu-link flex justify-between items-center w-full">
                Professional Tools
                <span v-if="dropdown === 'tools'">▲</span>
                <span v-else>▼</span>
              </button>
              <ul v-if="dropdown === 'tools'" class="dropdown-list flex flex-col pl-4 mt-2 space-y-2">
                <a href="#" class="dropdown-item">Postman</a>
                <a href="#" class="dropdown-item">PostgreSQL</a>
                <a href="#" class="dropdown-item">MySQL</a>
                <a href="#" class="dropdown-item">MongoDB</a>
              </ul>
            </div>

            <div v-else class="flex flex-col gap-3">
              <h1 class="font-bold text-yellow-100 text-lg  border-l-8 border-yellow-600 pl-1 bg-stone-700 pr-2 mb-5">Database</h1>
              <a href="#" class="menu-link ml-2">Postman</a>
              <a href="#" class="menu-link ml-2">PostgreSQL</a>
              <a href="#" class="menu-link ml-2">MySQL</a>
              <a href="#" class="menu-link ml-2">MongoDB</a>
            </div>
          </div>

          <!-- DevOps & Git Tools -->
          <div class="flex flex-col space-y-4">
            <div v-if="IsThisMobile()" class="dropdown">
              <button @click="toggleDropdown('devops')" class="menu-link flex justify-between items-center w-full">
                DevOps & Git Tools
                <span v-if="dropdown === 'devops'">▲</span>
                <span v-else>▼</span>
              </button>
              <ul v-if="dropdown === 'devops'" class="dropdown-list flex flex-col pl-4 mt-2 space-y-2">
                <a href="#" class="dropdown-item">Git</a>
                <a href="#" class="dropdown-item">GitHub</a>
                <a href="#" class="dropdown-item">GitLab</a>
                <a href="#" class="dropdown-item">Docker</a>
              </ul>
            </div>

            <div v-else class="flex flex-col gap-3">
              <h1 class="font-bold text-yellow-100 text-lg  border-l-8 border-yellow-600 pl-1 bg-stone-700 pr-2 mb-5">DevOps</h1>
              <a href="#" class="menu-link ml-2">Git</a>
              <a href="#" class="menu-link ml-2">GitHub</a>
              <a href="#" class="menu-link ml-2">GitLab</a>
              <a href="#" class="menu-link ml-2">Docker</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Top Navbar -->
  <nav class="bg-white shadow">
    <div class="w-full mx-auto px-4 py-1 md:py-2 sm:px-6 lg:px-8 bg-black">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <h2 class="font-black text-white text-xl md:text-3xl ml-4">MasterCode</h2>

        <!-- Menu and Login Buttons -->
        <div class="items-center flex">
          <a href="#" class="text-stone-50 hidden md:inline mx-10 self-center text-center">Log In</a>
          <button
            @click="toggleMenu"
            class="ml-auto p-1 bg-black text-white rounded-md focus:outline-none border-white border-2 mx-3 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="py-4 bg-100">
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
            <!-- Dynamic Image Icon with Hover Effect -->
            <img :src="course.isHovered ? course.iconColored : course.iconGray" 
                 :alt="course.name" 
                 @mouseover="hoverCourse(course, true)" 
                 @mouseleave="hoverCourse(course, false)" 
                 class="size-12 md:size-16 mr-2 transition-all duration-300 ease-in-out transform hover:scale-110"/>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  </nav>
</template>

<script setup>
import { X } from 'lucide-vue-next';
import { ref, defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const props = defineProps({
  IsMobile: Boolean
});

console.log(props.IsMobile);

function IsThisMobile(){
  return props.IsMobile;
}

const courses = ref([
  { name: 'Python', iconGray: '/icons/python.svg', iconColored: '/python/logo.svg', isHovered: false },
  { name: 'JavaScript', iconGray: '/icons/javascript.svg', iconColored: '/js/logo.png', isHovered: false },
  { name: 'TypeScript', iconGray: '/icons/typescript.svg', iconColored: '/ts/logo.svg', isHovered: false },
  { name: 'Java', iconGray: '/icons/java.svg', iconColored: '/java/logo.svg', isHovered: false },
  { name: 'C++', iconGray: '/icons/cplusplus.svg', iconColored: '/cpp/logo.svg', isHovered: false },
  { name: 'C#', iconGray: '/icons/csharp.svg', iconColored: '/csharp/logo.svg', isHovered: false },
  { name: 'Go', iconGray: '/icons/go.svg', iconColored: '/go/logo.svg', isHovered: false },
  { name: 'Ruby', iconGray: '/icons/ruby.svg', iconColored: '/ruby/logo.svg', isHovered: false },
  { name: 'PHP', iconGray: '/icons/php.svg', iconColored: '/php/logo.svg', isHovered: false },
  { name: 'SQL', iconGray: '/sql/sql-gray.svg', iconColored: '/sql/sql.svg', isHovered: false },
  { name: 'MongoDB', iconGray: '/icons/mongodb.svg', iconColored: '/mongodb/logo.svg', isHovered: false },
  { name: 'HTML', iconGray: '/icons/html5.svg', iconColored: '/html/logo.svg', isHovered: false },
  { name: 'CSS', iconGray: '/icons/css3.svg', iconColored: '/css/logo.svg', isHovered: false },
  { name: 'React', iconGray: '/icons/react.svg', iconColored: '/react/logo.svg', isHovered: false },
  { name: 'Vue', iconGray: '/icons/vuedotjs.svg', iconColored: '/vue/logo.svg', isHovered: false },
  { name: 'Angular', iconGray: '/icons/angular.svg', iconColored: '/angular/logo.svg', isHovered: false },
  { name: 'TailwindCSS', iconGray: '/icons/tailwind.svg', iconColored: '/tailwindcss/logo.svg', isHovered: false },
  { name: 'Bootstrap', iconGray: '/bootstrap/logo.svg', iconColored: '/icons/bootstrap.svg', isHovered: false }
]);

// Function to toggle hover state
const hoverCourse = (course, isHovered) => {
  course.isHovered = isHovered;
};

const emit = defineEmits(['selectedCourse', 'isMobile']);

// Track the selected course
const selectedCourse = ref("Home");
const IsMenuVisible = ref(null);
const dropdown = ref(null);

// Emit the selected course when clicked
function selectCourse(course) {
  selectedCourse.value = course;
  emit('selectedCourse', course);
}

function mainPage() {
  toggleMenu();
  selectedCourse.value = "Home";
  emit("selectedCourse", "Home");
}

function NavLinks(course) {
  toggleMenu();
  selectCourse(course);
}

function toggleMenu() {
  IsMenuVisible.value = !IsMenuVisible.value;
}

function toggleDropdown(menu) {
  dropdown.value = dropdown.value === menu ? null : menu;
}
</script>

<style scoped>
/* Slide-down transition */
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to, .slide-down-leave {
  transform: translateY(0);
  opacity: 1;
}

/* Custom styles for hover effect */
.menu-link:hover {
  color: #ffc107;
}

.dropdown-item:hover {
  color: #ffc107;
}

/* Special login button for mobile */
.special-link {
  background-color: #ffc107;
  color: #333;
  padding: 5px 4px;
  border-radius: 5px;
  text-align: center;
}

.swiper-slide {
  width: auto !important;
}

img {
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

img:hover {
  transform: scale(1.2);
  opacity: 0.9;
}
</style>
