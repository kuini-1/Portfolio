<script setup>

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
});

onMounted(() => {
  mode.value = 'dark';
});

useHead({
  title: 'Matthew Creamer Portfolio',
})
</script>

<template>
  <client-only>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </client-only>
</template>