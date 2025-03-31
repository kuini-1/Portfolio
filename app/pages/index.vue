<script setup lang='js'>
import { useI18n } from 'vue-i18n';

const { t, locale, setLocale } = useI18n();
const aboutSection = ref(null);
const projectSection = ref(null);
const contactSection = ref(null);

const scrollToSection = (section) => {
  const targetSection = {
    'about': aboutSection,
    'project': projectSection,
    'contact': contactSection
  }[section];

  if (targetSection.value) {
    targetSection.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>

<template>
  <div class="surface-0">
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div class="absolute top-4 right-4 z-20">
        <Dropdown
          v-model="locale"
          :options="[
            { label: 'English', value: 'en', icon: '🇺🇸' },
            { label: 'ไทย', value: 'th', icon: '🇹🇭' },
            { label: '日本語', value: 'jp', icon: '🇯🇵' }
          ]"
          optionLabel="label"
          class="w-[150px] bg-zinc-800 border border-zinc-700"
          :placeholder="locale === 'en' ? '🇺🇸 English' : locale === 'th' ? '🇹🇭 ไทย' : '🇯🇵 日本語'"
          @update:modelValue="(option) => setLocale(option.value)"
        >
          <template #option="{ option }">
            <span>{{ option.icon }} {{ option.label }}</span>
          </template>
        </Dropdown>
      </div>
      <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div class="relative z-10 text-center px-4">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500"
        >
          Matthew Creamer
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut', delay: 200 } }"
          class="text-xl md:text-2xl text-zinc-300 mb-8"
        >
          Full-Stack Web Developer
        </p>
        <div 
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut', delay: 400 } }"
          class="flex flex-wrap justify-center gap-4"
        >
          <Button @click="scrollToSection('about')" class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full" icon="pi pi-user" :label="t('aboutMe')" />
          <Button @click="scrollToSection('project')" class="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full" icon="pi pi-folder" :label="t('myProjects')" />
          <Button @click="scrollToSection('contact')" class="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full" icon="pi pi-envelope" :label="t('contactMe')" />
        </div>
      </div>
    </section>

    <section 
      ref="aboutSection" 
      class="min-h-screen py-20 bg-zinc-900"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <div class="container mx-auto px-4">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500"
        >
          {{ t('aboutMe') }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
            <div class="w-[300px] h-[300px] rounded-full relative z-10 border-4 border-emerald-500 bg-white overflow-hidden flex items-center justify-center">
              <img class="w-auto h-full object-cover" src="/profile.jpg" alt="Matthew Creamer">
            </div>
          </div>
          <div 
            class="space-y-6"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
          >
            <p class="text-zinc-300 text-lg leading-relaxed">
              {{ t('aboutMeDescription') }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 200 } }"
                title="Frontend"
                icon="pi pi-desktop"
                :skills="[
                  'Vue.js',
                  'React',
                  'Next.js',
                  'Nuxt.js',
                  'React Native',
                  'Tailwind CSS',
                  'PrimeVue',
                  'Shadcn',
                  'Redux',
                  'Pinia',
                  'TypeScript',
                  'HTML5',
                  'CSS3',
                  'JavaScript'
                ]"
              />
              <SkillCategory
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 400 } }"
                title="Backend"
                icon="pi pi-server"
                :skills="[
                  'Next.js',
                  'Nuxt.js',
                  'Node.js',
                  'Python',
                  'C#',
                  'REST APIs',
                ]"
              />
              <SkillCategory
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 600 } }"
                title="Database"
                icon="pi pi-database"
                :skills="[
                  'MySQL',
                  'MSSQL',
                  'PostgreSQL',
                  'Supabase',
                  'MongoDB',
                  'Redis',
                  'Prisma',
                  'TypeORM'
                ]"
              />
              <SkillCategory
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 800 } }"
                title="Tools"
                icon="pi pi-wrench"
                :skills="[
                  'Git',
                  'VS Code',
                  'Cursor',
                  'Figma',
                  'Adobe XD',
                  'Postman',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section 
      ref="projectSection" 
      class="min-h-screen py-20 bg-zinc-800"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <div class="container mx-auto px-4">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500"
        >
          {{ t('featuredProjects') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut', delay: 200 } }"
            :name="t('inventoryManagement')"
            :description="t('inventoryManagementDescription')"
            imagePath="inventory-management.png"
            githubUrl="https://github.com/kuini-1/inventory-management"
            demoUrl="https://inventory-management-alpha-six.vercel.app/login"
            :tags="['Next.js', 'Tailwind', 'Shadcn', 'PostgreSQL', 'Prisma']"
          />
          <Project 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut', delay: 400 } }"
            :name="t('tableEditor')"
            :description="t('tableEditorDescription')"
            imagePath="table-editor.png"
            githubUrl="https://github.com/kuini-1/table-editor-1.0"
            demoUrl="https://table-editor-1-0.vercel.app"
            :tags="['Next.js', 'Tailwind', 'Radix UI', 'Shadcn', 'Supabase', 'Stripe']"
          />
        </div>
      </div>
    </section>

    <section 
      ref="contactSection" 
      class="min-h-screen py-20 bg-zinc-900"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <div class="container mx-auto px-4">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500"
        >
          {{ t('getInTouch') }}
        </h2>
        <div class="max-w-2xl mx-auto">
          <div 
            class="bg-zinc-800 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 800, ease: 'easeOut' } }"
          >
            <div class="flex flex-col items-center gap-6">
              <div class="flex gap-6">
                <a 
                  href="https://github.com/kuini-1" 
                  target="_blank" 
                  class="text-zinc-300 hover:text-emerald-500 transition-colors"
                  v-motion
                  :initial="{ opacity: 0, y: 20 }"
                  :visible="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut', delay: 200 } }"
                >
                  <i class="pi pi-github text-3xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/matthewcreamer-dev" 
                  target="_blank" 
                  class="text-zinc-300 hover:text-emerald-500 transition-colors"
                  v-motion
                  :initial="{ opacity: 0, y: 20 }"
                  :visible="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut', delay: 400 } }"
                >
                  <i class="pi pi-linkedin text-3xl"></i>
                </a>
                <a 
                  href="mailto:matthew.a.creamer@outlook.com" 
                  class="text-zinc-300 hover:text-emerald-500 transition-colors"
                  v-motion
                  :initial="{ opacity: 0, y: 20 }"
                  :visible="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut', delay: 600 } }"
                >
                  <i class="pi pi-envelope text-3xl"></i>
                </a>
              </div>
              <p 
                class="text-zinc-300 text-center"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut', delay: 800 } }"
              >
                {{ t('contactDescription') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

