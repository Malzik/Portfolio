<script setup lang="ts">
const store = useMainStore();
const route = useRoute()

const project = store.getProjectById(route.params.id);
</script>

<template>
  <div class="container mx-auto max-w-screen-xl px-3">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
            class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-14
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
                data-feather="clock"
                class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
                class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
            >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <i
                data-feather="tag"
                class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
                class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
            >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
            class="mb-10 sm:mb-0"
            v-for="projectImage in project.projectImages"
            :key="projectImage.title"
        >
          <img
              :src="'../../'+projectImage.img"
              :alt="projectImage.title"
              class="rounded-xl cursor-pointer shadow-lg sm:shadow-none max-h-72"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project objectives -->
          <div class="mb-7">
            <p
                class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.objectivesTitle }}
            </p>
            <p
                class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.objectivesDetails }}
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p
                class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.techTitle }}
            </p>
            <p
                class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.technologies.join(", ") }}
            </p>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
              class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            "
          >
            {{ project.detailsTitle }}
          </p>
          <p
              v-for="projectDetail in project.projectDetails"
              class="
              font-general-regular
              mb-5
              text-lg text-ternary-dark
              dark:text-ternary-light
            "
              v-html="projectDetail"
          >
          </p>
        </div>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>