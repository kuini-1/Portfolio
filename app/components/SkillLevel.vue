<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-row justify-center items-center text-center w-full h-[40px] rounded-lg overflow-hidden">
    <span class="bg-emerald-500 py-2 px-3 w-[250px] h-full flex items-center justify-center">{{ props.name }}</span>
    <div class="bg-stone-200/60 w-full h-full">
      <div class="bg-emerald-600 h-full" :class="`w-${props.level}/10`" />
    </div>
  </div>
</template>