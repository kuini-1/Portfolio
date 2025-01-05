<script setup lang="ts">
import { ref } from "vue";
import Menu from 'primevue/menu';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const menu = ref();
const items = ref([
  {
        label: 'Options',
        items: [
            {
                label: 'Team',
                icon: 'pi pi-users'
            },
            
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                // route: '/theming/unstyled'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                  authStore.removeUser();
                  router.push('/login');
                }
            }
        ]
    }
]);

const userMenu = (event: any) => {
    menu.value.toggle(event);
};

function redirectToGithub() {
  window.open('https://github.com/sfxcode/nuxt3-primevue-starter', '_blank')
}
</script>

<template>
  <nav>
    <Toolbar>
      <template #start>
        <Button class="no-underline" icon="pi pi-table" as="router-link" label="Tables" to="/tables" />
      </template>

      <template  #end>
        <div class="flex space-x-3">
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
      </template>
    </Toolbar>
  </nav>
</template>