<script>
import feather from "feather-icons";
export default {
  data: () => {
    return {
      projectName: "Alexis's Portfolio",
      author: "Alexis Heroin",
      copyrightDate: 2023,
      socialProfiles: [
        {
          name: "GitHub",
          icon: "github",
          url: "https://github.com/Malzik",
        },
        {
          name: "Linkedin",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/alexis-heroin/",
        },
        {
          name: "Mail",
          icon: "mail",
          url: "mailto:alexis.heroin@outlook.com",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div
        class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-slate-100
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
            class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            text-primary-dark
            mb-5
          "
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
              v-for="social in socialProfiles"
              :key="social.id"
              :href="social.url"
              target="__blank"
              class="
              text-gray-400
              hover:text-indigo-500
              cursor-pointer
              rounded-lg
              bg-gray-50
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
          >
            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <div class="flex justify-center items-center text-center">
        <div
            class="
        font-general-regular
        text-lg text-ternary-dark
      "
        >
          &copy; {{ copyrightDate }}.
          <a
              href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
              target="__blank"
              class="
          font-general-medium
          hover:underline hover:text-indigo-600
          duration-500
        "
          >{{ projectName }}</a
          >
          . Developed by
          <a
              href="https://stoman.me"
              target="__blank"
              class="
          font-general-medium
          text-secondary-dark
          uppercase
          hover:underline hover:text-indigo-600
          duration-500
        "
          >{{ author }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>