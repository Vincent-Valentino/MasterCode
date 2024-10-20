<template>
  <div class="border-b border-gray-700 pb-4">
    <h2 class="text-lg md:text-xl font-semibold">{{ questionTxt }}</h2>
    <p class="mt-2 text-gray-400">{{ answerTxt }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  question: String,
  answer: String
});

const questionTxt = props.question;
const answerTxt = props.answer;

</script>