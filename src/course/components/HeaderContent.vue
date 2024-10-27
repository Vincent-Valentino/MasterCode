<template>
  <div :class="['w-full', 'flex', 'items-center', 'gap-5', 'rounded-t-xl', 'p-4', bgColor]">
    <img :src="`/${lang}/logo.svg`" :alt="`${lang} Logo`" class="w-12 h-12" />
    <h1 :class="['text-2xl', 'md:text-4xl', 'font-bold', textColor]">{{title}}</h1>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const colors = {
  python: {
    "text": "text-blue-900",
    "background": "bg-yellow-200"
  },

  javascript: {
    "text": "text-text-black",
    "background": "bg-yellow-500"
  },

  typesript: {
    "text": "text-blue-200",
    "background": "bg-blue-950"
  },

  java: {
    "text": "text-white",
    "background": "bg-orange-600"
  },

  php: {
    "text": "text-white",
    "background": "bg-purple-600"
  },

  "C#": {
    "text": "text-white",
    "background": "bg-purple-950"
  },

  ruby: {
    "text": "text-white",
    "background": "bg-red-600"
  },

  go: {
    "text": "text-white",
    "background": "bg-teal-500"
  },

  "C++":{
     "text": "text-white",
     "background": "bg-indigo-900"
   },
 }

const props = defineProps({
  title: String,
  value: String
});

const lang = props.value
const textColor = computed(() => colors[lang]?.text || 'text-black');
const bgColor = computed(() => colors[lang]?.background || 'bg-gray-200');

</script>