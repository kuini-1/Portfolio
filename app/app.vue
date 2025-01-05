<script setup>
// import { useAuthStore } from '@/stores/authStore';
// import { useRouter } from 'vue-router';

// const router = useRouter();
// const authStore = useAuthStore();

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
});

onMounted(() => {
  mode.value = 'dark';
  // authStore.fetchUser();
  // if (!authStore.user.username)
  //   router.push('/login');
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