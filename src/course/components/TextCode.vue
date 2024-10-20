<template>
  <p class="text-base md:text-lg mb-2" v-html="parsedText"></p>
</template>

<script setup>
import { defineProps, computed } from "vue"
import { marked } from 'marked'

const props = defineProps({
  text: String
})

const parsedText = computed(() => {
  return marked(props.text);
});
</script>