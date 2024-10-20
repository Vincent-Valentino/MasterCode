<template>
  <h2 class="text-xl text-black md:text-2xl font-semibold mb-4" v-html="parsedText"></h2>
</template>

<script setup>
import { marked } from 'marked'
import { defineProps, computed } from "vue"

const props = defineProps({
  text: String,
})

const parsedText = computed(() => {
  return marked(props.text)
});

</script>