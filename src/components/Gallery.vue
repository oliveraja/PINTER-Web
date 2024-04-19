<template>
    <div class="gallery mt-10 text-center scroll-mt-20 mb-20" id="gallery">
      <h1 class="font-bold text-xl">Gallery PINTER</h1>
      <a href="/GalleryPINTER" class="inline-block transition-transform transform-gpu hover:scale-105">
          <img src="/images/pinter.png" alt="pinter" class="">
      </a>
  
      <div class="info">
          <h3>
              Programnya namanya PINTER <br>
              Isinya PINTERRR <br>
              [gibah, ketawa, makan, badmin, pingpong]
          </h3>
      </div>
  
      <div class="carousel carousel-center mx-20 p-4 space-x-4 bg-white rounded-box">
          <div v-for="image in filteredImages" :key="image.id" class="carousel-item">
              <img :src="image.url" class="rounded-box landscape-image" />
          </div>
      </div>
  
      <div class="buttonAnggota mt-10">
          <button @click="scrollToTop" type="button" class="text-white bg-red-800 hover:bg-black hover:text-white font-medium rounded-lg text-sm px-4 py-2 text-center">Back to Top</button>
      </div>
    </div>
  </template>
  
  <script>
  import jsonData from '@/../db/data.json';
  
  export default {
      name: 'Gallery',
      methods: {
          scrollToTop() {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      },
      data() {
          return {
              images: [],
              filteredImages: []
          };
      },
      mounted() {
          this.images = jsonData.images;
  
          const desiredIds = [1, 2, 3, 4, 5, 8, 12];
          this.filteredImages = this.images.filter(image => desiredIds.includes(image.id));
      }
  }
  </script>
  
  <style>
  .landscape-image {
      width: 100%;
      height: 300px;
      max-width: 500px;
  }
  
  .carousel-item {
      transition: transform 0.3s ease-in-out;
  }
  
  .carousel-item:hover {
      transform: scale(1.05);
  }
  </style>
  