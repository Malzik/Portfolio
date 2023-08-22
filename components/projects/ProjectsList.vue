<script setup lang="ts">
import feather from "feather-icons";
import {onMounted, onUpdated} from "@vue/runtime-core";
const store = useMainStore();

onMounted(() => {
  feather.replace();
})

onUpdated(() => {
  feather.replace();
})
</script>

<template>
  <!--  projects  -->
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center" id="projects">
      <p
          class="
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
        "
      >
        Projects
      </p>
    </div>
    <!-- Projects grid -->
<!--    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-center">-->
    <div class="flex justify-around flex-wrap flex-1 mt-6 sm:gap-10">
      <div
          v-for="project in store.projects"
          :key="project.id"
          class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
          w-full sm:w-[20rem]
        "
          aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.id}`">
          <div class="rounded-t-xl">
            <img
                :src=project.img
                :alt="project.title"
                class=" border-none w-full h-[16rem] object-contain"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
                class="
                font-general-semibold
                text-xl text-ternary-dark
                dark:text-ternary-light
                font-semibold
                mb-2
              "
            >
              {{ project.title }}
            </p>
            <span
                class="
                font-general-medium
                text-lg text-ternary-dark
                dark:text-ternary-light
              "
            >{{ project.category }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>