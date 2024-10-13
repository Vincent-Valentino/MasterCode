<template>
  <div class="flex justify-between mt-4">
    <!-- Previous Button -->
    <div v-if="!start">
      <button
        @click="navigateTo(previousPage)"
        class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
      >
        {{ previousLabel || 'Previous' }}
      </button>
    </div>
    
    <!-- Next Button -->
    <div v-if="!stop">
      <button
        @click="navigateTo(nextPage)"
        class="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
      >
        {{ nextLabel || 'Next' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Boolean,
      default: false,
    },
    stop: {
      type: Boolean,
      default: false,
    },
    nextLabel: {
      type: String,
      default: 'Next',
    },
    previousLabel: {
      type: String,
      default: 'Previous',
    },
    nextPage: {
      type: String,
      required: false,
    },
    previousPage: {
      type: String,
      required: false,
    },
  },
  methods: {
    navigateTo(page) {
      if (page) {
        this.$router.push({ name: page });
      }
    },
  },
};
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
</style>
