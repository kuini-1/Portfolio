<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  githubUrl: {
    type: String,
    default: ''
  },
  demoUrl: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] w-4/5">
    <img 
      class="h-[300px] w-full object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:brightness-[0.15]" 
      :src="imagePath" 
      :alt="name"
    >
    <div class="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 class="text-2xl font-bold text-white mb-3">{{ name }}</h3>
      <p class="text-gray-200 text-center mb-4">{{ description }}</p>
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="px-3 py-1.5 text-sm font-medium bg-zinc-800/80 text-gray-200 rounded-full shadow-md border border-zinc-700"
        >
          {{ tag }}
        </span>
      </div>
      <div class="flex gap-4">
        <a v-if="githubUrl" 
           :href="githubUrl" 
           target="_blank"
           class="px-4 py-2 bg-transparent border-2 border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer">
          <i class="pi pi-github"></i>Code
        </a>
        <a v-if="demoUrl" 
           :href="demoUrl" 
           target="_blank"
           class="px-4 py-2 bg-transparent border-2 border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer">
          <i class="pi pi-external-link"></i>Demo
        </a>
      </div>
    </div>
  </div>
</template> 