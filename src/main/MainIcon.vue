<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-4 sm:grid-cols-8 gap-4">
      <div v-for="icon in icons" :key="icon.name" class="flex justify-center">
        <img :src="icon.src" :alt="icon.name" class="h-12 w-12">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageIcons',
  data() {
    return {
      icons: [
        { name: 'Python', src: '/icons/python.svg' },
        { name: 'HTML5', src: '/icons/html5.svg' },
        { name: 'CSS3', src: '/icons/css3.svg' },
        { name: 'JavaScript', src: '/icons/javascript.svg' },
        { name: 'C++', src: '/icons/cplusplus.svg' },
        { name: 'Go', src: '/icons/go.svg' },
        { name: 'Ruby', src: '/icons/ruby.svg' },
        { name: 'Vue', src: '/icons/vuedotjs.svg' },
      ]
    }
  }
}
</script>