<template>
  <div class="min-h-screen flex flex-col">
    <NavBar></NavBar>
    <slot />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {NavBar, Footer}
})

</script>