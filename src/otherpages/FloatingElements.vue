<template>
  <div class="absolute inset-0 pointer-events-none z-10">
    <svg
      v-for="(element, index) in elements"
      :key="index"
      :class="['absolute', element.animationClass]"
      :style="element.style"
      :width="element.size"
      :height="element.size"
      viewBox="0 0 100 100"
    >
      <image
        :href="element.src"
        x="0"
        y="0"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid slice"
        opacity="1"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FloatingElements',
  data() {
    return {
      elements: [],
      languages: [
        'python',
        'java',
        'cpp',
        'csharp',
        'ruby',
        'go',
        'html',
        'css',
        'react',
        'vue',
        'php',
        'tailwindcss',
        'ts',
        'bootstrap'
      ],
    };
  },
  created() {
    this.createElements();
  },
  methods: {
    createElements() {
      // Generate multiple elements with random positions and animations
      for (let i = 0; i < 14; i++) {
        const size = this.getRandomInt(70, 150);
        const language = this.languages[i % this.languages.length];
        this.elements.push({
          size,
          src:`/${language}/logo.svg`,
          style: {
            top: `${this.getRandomInt(0, 100)}%`,
            left: `${this.getRandomInt(0, 100)}%`,
          },
          animationClass: `animate-float-${i % 3}`,
        });
      }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style>
@keyframes float1 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0.3;
  }
}

@keyframes float2 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.25;
  }
  100% {
    transform: translateY(100vh) rotate(-180deg);
    opacity: 0.25;
  }
}

@keyframes float3 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.15;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0.15;
  }
}

.animate-float-0 {
  animation: float1 60s linear infinite;
}

.animate-float-1 {
  animation: float2 65s linear infinite;
}

.animate-float-2 {
  animation: float3 60s linear infinite;
}
</style>
