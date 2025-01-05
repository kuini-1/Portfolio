<script lang="ts" setup>

const props = defineProps({
  label: {
    type: String,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="col-span-2 space-y-3">
    <label v-if="label" class="block font-bold text-xl opacity-50">{{ label }}</label>
    <Divider />
  </div>
</template>