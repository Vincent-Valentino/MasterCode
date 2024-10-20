<template>
  <nav class="flex justify-between items-center mb-8">
    <a href="/learn">
      <button
        class="text-white hover:text-gray-300 transition-colors duration-300">
        &larr; Back
      </button>
    </a>
    <div class="space-x-4">
      <a
        :href="'/' + firstLink"
        class="text-white hover:text-gray-300 transition-colors duration-300"
      >
        {{ first }}
      </a>
      <a
        :href="'/' + secondLink"
        class="text-white hover:text-gray-300 transition-colors duration-300"
      >
        {{ second }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  first: String,
  second: String
});

const firstLink = props.first.toLowerCase();
const secondLink = props.second.toLowerCase();
</script>