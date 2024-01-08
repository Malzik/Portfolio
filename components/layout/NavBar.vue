<template>
  <nav class="sm:container sm:mx-auto max-w-screen-xl">
    <div class="block
        sm:flex sm:justify-between sm:items-center sm:mx-auto max-w-screen-xl
        py-6">
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/"
                    class="
          font-semibold
          text-2xl
          md:text-2xl
          xl:text-3xl
          text-black
        ">
            Alexis Heroin
          </NuxtLink>
        </div>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
              @click="isOpen = !isOpen"
              type="button"
              class="focus:outline-none"
              aria-label="Hamburger Menu"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="
                h-7
                w-7
                mt-1
                fill-current
                text-secondary-dark
              "
            >
              <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  clip-rule="evenodd"
              ></path>
              <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- App header navigation links -->
      <div
          :class="isOpen ? 'block' : 'hidden'"
          class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
      >
        <NuxtLink
            to="/#projects"
            class="
        block
        text-left text-lg text-primary-dark
        hover:text-secondary-dark
        sm:mx-4
        mb-2
        sm:py-2
      "
            aria-label="Projects"
        >Projects</NuxtLink
        >
        <NuxtLink
            to="/#contact"
            class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
            aria-label="Contact"
        >Contact</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },
}
</script>

<style scoped lang="postcss">

</style>
