<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
  <div class="group relative overflow-hidden rounded-2xl bg-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20">
    <div class="relative h-[300px] overflow-hidden">
      <img 
        class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110" 
        :src="imagePath" 
        :alt="name"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="p-6">
      <h3 class="text-2xl font-bold text-zinc-100 mb-3">{{ name }}</h3>
      <p class="text-zinc-400 mb-4">{{ description }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="px-3 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex gap-4">
        <a v-if="githubUrl" 
           :href="githubUrl" 
           target="_blank"
           class="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center gap-2 font-medium">
          <i class="pi pi-github"></i>{{ t('viewCode') }}
        </a>
        <a v-if="demoUrl" 
           :href="demoUrl" 
           target="_blank"
           class="flex-1 px-4 py-2 bg-zinc-700 text-zinc-100 rounded-lg hover:bg-zinc-600 transition-colors duration-300 flex items-center justify-center gap-2 font-medium">
          <i class="pi pi-external-link"></i>{{ t('liveDemo') }}
        </a>
      </div>
    </div>
  </div>
</template> 