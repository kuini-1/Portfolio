<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="group relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-300">
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <i :class="icon" class="text-2xl text-emerald-500"></i>
        <h3 class="text-xl font-semibold text-zinc-100">{{ title }}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="skill in skills" 
          :key="skill"
          class="px-3 py-1.5 text-sm font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-300"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template> 