<template>
  <div class="bg-white">
    <Navbar />
    <LandingPage />
    <AboutUs />
    <Journey />
    <Gallery />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import LandingPage from '@/components/LandingPage.vue'
import AboutUs from '@/components/AboutUs.vue'
import Journey from '@/components/Journey.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    LandingPage,
    AboutUs,
    Journey,
    Gallery
  }
};
</script>

<style>

</style>
