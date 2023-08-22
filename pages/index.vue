<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
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
  <div class="container mx-auto px-3 max-w-screen-xl sm:px-10 list-disc">
    <!--  header  -->
    <div class="flex flex-col items-center text-center">
      <h1
          class="
          font-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-black
          uppercase
        "
      >
        Hi, I'm Alexis
        welcome on my portfolio!
      </h1>
      <p
          class="
          font-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          leading-none
          text-gray-400
        "
      >
        I'm a FullStack developer with 4 years of experience in this field. Throughout the various projects I&nbsp;have worked on, I have learned how to work as part of a team, collaborate, and communicate
        effectively.
        I'm highly motivated to learn new things and share the skills I have acquired. I believe that I can be a
        valuable asset in pushing a team forward and, of course, delivering quality output within deadlines.
        I'm available right now and I'm extremely motivated. Feel free to reach me!
      </p>
      <div>
        <a
            href="/resume-alexis.pdf"
            download=""
            target="_blank"
            class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
            duration-500
          "
            aria-label="Download Resume"
        >
          <i
              data-feather="arrow-down-circle"
              class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
          >Download CV</span
          ></a
        >
      </div>
    </div>
    <ProjectsList></ProjectsList>
    <div class="text-center pt-20 pb-5">
      <h1 class="
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
        ">Conferences</h1>
      <p class="
          font-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          leading-none
          text-gray-400
        ">In april, I have presented my first 15 minutes talk about my vision of Tailwind CSS. The talk is in French.</p>

      <div class="flex justify-center py-5">
        <iframe id="player"
                class="w-full h-64 md:w-9/12 md:h-96"
                src="https://www.youtube.com/embed/a-s0CGFAKsU?enablejsapi=1&origin=http://example.com&cc_lang=en"
                frameborder="0"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
