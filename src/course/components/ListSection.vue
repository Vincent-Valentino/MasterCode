<template>
  <ul class="list-disc list-inside text-base md:text-lg mb-6">
    <li v-for="(item, index) in items" :key="index">
      <template v-if="type === 's'">
        <span v-html="parseInline(item.description)"></span>
      </template>
      <template v-else>
        <span class="font-semibold" v-html="parseInline(item.title)"></span>:
        <span v-html="parseInline(item.description)"></span>
      </template>
    </li>
  </ul>
</template>

<script setup>
import { marked, parseInline} from 'marked';

defineProps({
  type: {
    type: String,
    default: null,
  },
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((item) => {
        const hasDescription = typeof item.description === 'string';
        const hasTitle =
          typeof item.title === 'string' || item.title === undefined;
        return hasDescription && hasTitle;
      });
    },
  },
});

</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
