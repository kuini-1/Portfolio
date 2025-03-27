<script setup lang='js'>
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
      <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Matthew Creamer
        </h1>
        <p class="text-xl md:text-2xl text-zinc-300 mb-8">Full-Stack Web Developer</p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button @click="scrollToSection('about')" class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full" icon="pi pi-user" label="About Me" />
          <Button @click="scrollToSection('project')" class="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full" icon="pi pi-folder" label="My Projects" />
          <Button @click="scrollToSection('contact')" class="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full" icon="pi pi-envelope" label="Contact" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section ref="aboutSection" class="min-h-screen py-20 bg-zinc-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">About Me</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
            <img class="w-[300px] h-[300px] rounded-full mx-auto relative z-10 border-4 border-emerald-500" src="/profile.jpeg" alt="Matthew Creamer">
          </div>
          <div class="space-y-6">
            <p class="text-zinc-300 text-lg leading-relaxed">
              I'm a passionate full-stack web developer with expertise in modern web technologies. 
              I create responsive, user-friendly applications that solve real-world problems.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory
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
                title="Backend"
                icon="pi pi-server"
                :skills="[
                  'Next.js',
                  'Nuxt.js',
                  'Node.js',
                  'Python',
                  'C#',
                  'Express',
                  'FastAPI',
                  'REST APIs',
                  'GraphQL',
                  'MVC Architecture'
                ]"
              />
              <SkillCategory
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
                title="Tools"
                icon="pi pi-tools"
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

    <section ref="projectSection" class="min-h-screen py-20 bg-zinc-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project 
            name="Inventory Management"
            description="A comprehensive inventory management system with real-time tracking, user authentication, and advanced analytics."
            imagePath="inventory-management.png"
            githubUrl="https://github.com/kuini-1/inventory-management"
            demoUrl="https://inventory-management-alpha-six.vercel.app/login"
            :tags="['Next.js', 'Tailwind', 'Shadcn', 'PostgreSQL', 'Prisma']"
          />
        </div>
      </div>
    </section>

    <section ref="contactSection" class="min-h-screen py-20 bg-zinc-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">Get In Touch</h2>
        <div class="max-w-2xl mx-auto">
          <div class="bg-zinc-800 p-8 rounded-xl">
            <div class="flex flex-col items-center gap-6">
              <div class="flex gap-6">
                <a href="https://github.com/kuini-1" target="_blank" class="text-zinc-300 hover:text-emerald-500 transition-colors">
                  <i class="pi pi-github text-3xl"></i>
                </a>
                <a href="https://linkedin.com/in/matthewcreamer-dev" target="_blank" class="text-zinc-300 hover:text-emerald-500 transition-colors">
                  <i class="pi pi-linkedin text-3xl"></i>
                </a>
                <a href="mailto:matthew.a.creamer@outlook.com" class="text-zinc-300 hover:text-emerald-500 transition-colors">
                  <i class="pi pi-envelope text-3xl"></i>
                </a>
              </div>
              <p class="text-zinc-300 text-center">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

