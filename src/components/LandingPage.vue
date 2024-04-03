<template>
  <div class="background">
      <img :src="currentImage" alt="test">
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
      return {
          images: [
              '/images/gambar1.png',
              '/images/gambar2.png',
              '/images/gambar3.png'
          ],
          currentIndex: 0
      };
  },
  computed: {
      currentImage() {
          return this.images[this.currentIndex];
      }
  },
  mounted() {
      setInterval(this.changeBackgroundImage, 5000);
  },
  methods: {
      changeBackgroundImage() {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
  }
}
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.background img {
  width: 100%;
  height: auto;
}
</style>
