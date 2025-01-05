<script setup lang='js'>

const aboutSection = ref(null);
const projectSection = ref(null);

const scrollToSection = (section) => {
  if (section === 'about') {
    if (aboutSection.value) {
      aboutSection.value.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  }
  else {
    if (projectSection.value) {
      projectSection.value.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  }
};
</script>

<template>
  <div class="surface-0 text-center">
    <section class="w-full h-screen flex items-center justify-center flex-col">
      <span class="text-4xl">Hello, I'm <b class="text-emerald-500">Matthew Creamer</b>,</span>
      <span class="text-4xl">I'm a full-stack web developer.</span>
      <Button @click="scrollToSection('about')" class="no-underline mt-10" icon="pi pi-arrow-down" as="button" label="View my work" iconPos="right" />
    </section>
    <section ref="aboutSection" class="w-full h-auto flex items-center justify-center flex-col dark:bg-zinc-700 bg-zinc-300 rounded-lg gap-20 p-10">
      <h1 class="border-b-solid border-b-6 pb-3 text-4xl dark:text-slate-200">ABOUT</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div class="flex flex-col items-center gap-7">
          <i class="pi pi-th-large p-20 lg:p-10 bg-emerald-500 text-6xl lg:text-4xl rounded-xl"></i>
          <div class="flex flex-col items-center gap-1">
            <b class="text-2xl">Modular Components</b>
            <span class="text-lg">Reusable, flexible, and efficient building blocks designed to streamline development and maintain consistency across your project.</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-7">
          <i class="pi pi-lightbulb p-20 lg:p-10 bg-emerald-500 text-6xl lg:text-4xl rounded-xl"></i>
          <div class="flex flex-col items-center gap-1">
            <b class="text-2xl">Intuitive</b>
            <span class="text-lg">Crafted with a strong focus on user-friendly UX/UI, ensuring simplicity and ease of use.</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-7">
          <i class="pi pi-window-minimize p-20 lg:p-10 bg-emerald-500 text-6xl lg:text-4xl rounded-xl"></i>
          <div class="flex flex-col items-center gap-1">
            <b class="text-2xl">Responsive</b>
            <span class="text-lg">Designed to adapt seamlessly to any screen size, providing a smooth experience across devices.</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-7">
          <i class="pi pi-palette p-20 lg:p-10 bg-emerald-500 text-6xl lg:text-4xl rounded-xl"></i>
          <div class="flex flex-col items-center gap-1">
            <b class="text-2xl">Dynamic</b>
            <span class="text-lg">Websites should be engaging—bringing your ideas to life with interactive and lively designs.</span>
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img class="w-[300px] h-[300px] rounded-full mx-auto" src="/profile.jpeg" alt="">
        <div class="flex flex-col gap-5">
          <SkillLevel name="HTML" :level="10" />
          <SkillLevel name="CSS" :level="10" />
          <SkillLevel name="JavaScript" :level="8" />
          <SkillLevel name="RESTful API" :level="8" />
          <SkillLevel name="Tailwind" :level="8" />
          <SkillLevel name="Vue" :level="8" />
          <SkillLevel name="React" :level="7" />
          <SkillLevel name="PrimeVue" :level="7" />
          <SkillLevel name="TypeScript" :level="6" />
          <SkillLevel name="MySQL" :level="5" />
          <SkillLevel name="MSSQL" :level="5" />
          <SkillLevel name="Nuxt" :level="5" />
          <SkillLevel name="Next" :level="5" />
          <SkillLevel name="Python" :level="5" />
          <SkillLevel name="Node" :level="5" />
          <SkillLevel name="C#" :level="4" />
          <SkillLevel name="PHP" :level="4" />
        </div>
      </div>
      <Button @click="scrollToSection('project')" class="no-underline mt-10" icon="pi pi-arrow-down" as="button" label="View my projects" iconPos="right" />
    </section>
    <section ref="projectSection" class="w-full h-screen flex items-center justify-center flex-col gap-20">
      <h1 class="border-b-solid border-b-6 pb-3 text-4xl text-slate-200">PROJECTS</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-10">
        <Project 
          name="Inventory Management"
          description="A comprehensive inventory management system built with modern web technologies."
          imagePath="inventory-management.png"
          githubUrl="https://github.com/kuini-1/inventory-management"
          demoUrl="https://inventory-management-alpha-six.vercel.app/login"
          :tags="['Next.js', 'Tailwind', 'Shadcn', 'PostgreSQL', 'Prisma']"
        />
      </div>
    </section>
  </div>
</template>

