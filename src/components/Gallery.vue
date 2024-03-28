<template>
  <div class="gallery mt-10 text-center" id="gallery">
    <h1 class="font-bold">Gallery PINTER</h1>
    <a href="/detailGallery">
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
        <div class="carousel-item">
            <img src="/images/pinter/briefing.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/kickoff.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/kickoffHR.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/CB.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/fotbar.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/grubsimul.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/pinter/grubsimul2.jpg" class="rounded-box landscape-image" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Gallery',
    props:{

    }
}
</script>

<style>
.landscape-image {
    width: 100%;
    height: 300px;
    max-width: 500px;
}
</style>