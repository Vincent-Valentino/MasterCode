<template>
  <div class="py-12 bg-gray-50">
    <!-- Swiper container -->
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="getSlidesPerView()"
      :loop="true"
      :free-mode="true"
      :autoplay="{ delay: 1, disableOnInteraction: false }"
      :speed="4000"
      class="language-carousel my-3 mb-10"
    >
      <SwiperSlide v-for="(language, index) in languages" :key="index">
        <div class="flex justify-center items-center">
          <img :src="language.image" :alt="language.name" class="h-20 w-20 object-contain" />
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      :reverse="true"
      :modules="[Autoplay]"
      :slides-per-view="getSlidesPerView()"
      :loop="true"
      :free-mode="true"
      :autoplay="{ delay: 1, disableOnInteraction: false }"
      :speed="4000"
      class="language-carousel2 my-3 mt-10"
    >
      <SwiperSlide v-for="(language, index) in languages2" :key="index">
        <div class="flex justify-center items-center">
          <img :src="language.image" :alt="language.name" class="h-20 w-20 object-contain" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Languages data
const languages = [
  { name: 'Python', image: '/icons/python.svg' },
  { name: 'HTML', image: '/icons/html5.svg' },
  { name: 'CSS', image: '/icons/css3.svg' },
  { name: 'JavaScript', image: '/icons/javascript.svg' },
  { name: 'C++', image: '/icons/cplusplus.svg' },
  { name: 'Go', image: '/icons/go.svg' },
  { name: 'Ruby', image: '/icons/ruby.svg' },
  { name: 'C#', image: '/icons/csharp.svg' },
  { name: 'Java', image: '/icons/java.svg' },
  { name: 'TypeScript', image: '/icons/typescript.svg' },
];

const languages2 = [
  { name: 'Vue', image: '/icons/vuedotjs.svg' },
  { name: 'MongoDB', image: '/icons/mongodb.svg' },
  { name: 'React', image: '/icons/react.svg' },
  { name: 'MySQL', image: '/icons/mysql.svg' },
  { name: 'PostgreSQL', image: '/icons/postgresql.svg' },
  { name: 'Flutter', image: '/icons/flutter.svg' },
  { name: 'Postman', image: '/icons/postman.svg' },
  { name: 'PHP', image: '/icons/php.svg' },
  { name: 'Bootstrap', image: '/bootstrap/logo.svg' },
  { name: 'Angular', image: '/icons/angular.svg' },
];

const getSlidesPerView = () => {
  if (window.innerWidth < 640) {
    return 3;
  } else if (window.innerWidth < 1024) {
    return 5;
  } else {
    return 7;
  }
};
</script>

<style scoped>
.language-carousel {
  width: 100%;
}

.language-carousel2 {
  width: 100%;
  direction: rtl;
}
</style>
