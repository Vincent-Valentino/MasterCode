<template>
  <div class="bg-gray-800 text-white mb-2 rounded-lg p-4">
    <pre><code :class="`language-${language}`">{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  name: "PreCode",
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "javascript", // Default language if none is provided
    },
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
