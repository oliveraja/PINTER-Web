<template>
  <div class="detailGallery mt-20 text-center">
    <!-- briefing -->
    <div class="briefing">
      <h1 class="font-bold">Briefing</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <!-- kickoff -->
    <div class="kickoff mt-10">
      <h1 class="font-bold">Kick Off</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <!-- training -->
    <div class="training mt-10">
      <h1 class="font-bold">In Class Training</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <!-- grubSimul -->
    <div class="grubSimul mt-10">
      <h1 class="font-bold">Grub Simulation</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <!-- ojt -->
    <div class="ojt mt-10">
      <h1 class="font-bold">On Job Training</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    
    <!-- randomPic -->
    <div class="randomPic mt-10 mb-10">
      <h1 class="font-bold">Random Pics</h1>
      <div id="default-carousel" class="relative w-1/2 mx-auto mt-5" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
          <!-- Carousel items -->
          <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'hidden': currentIndex !== index, 'duration-700 ease-in-out': currentIndex === index }" data-carousel-item>
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(item, index) in carouselItems" :key="index" :class="{ 'w-3 h-3 rounded-full': true, 'bg-gray-500': currentIndex !== index, 'bg-gray-900': currentIndex === index }" aria-current="true" :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)" data-carousel-slide-to="index"></button>
        </div>

        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-red-800">
            <svg class="w-4 h-4 text-black group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      carouselItems: [
        { src: "/images/pinter/briefing.jpg" },
        { src: "/images/pinter/kickoff.jpg" },
        { src: "/images/pinter/kickoffHR.jpg" },
        { src: "/images/pinter/CB.jpg" },
        { src: "/images/pinter/fotbar.jpg" }
      ]
    };
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    },
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.carouselItems.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex === this.carouselItems.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
