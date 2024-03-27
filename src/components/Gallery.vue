<template>
  <div class="gallery mt-10 text-center">
    <h1 class="font-bold">Gallery PINTER</h1>
    <img src="/images/pinter.png" alt="pinter" class="">

    <div class="info">
        <h3>
            Programnya namanya PINTER <br>
            Isinya PINTERRR <br>
            [gibah, ketawa, makan, badmin, pingpong]
        </h3>
        <p class="mt-5">click itu shift buat scroll</p>
    </div>

    <div class="carousel carousel-center mx-20 p-4 space-x-4 bg-white rounded-box">
        <div class="carousel-item">
            <img src="/images/gambar1.png" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="/images/gambar1.png" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box landscape-image w-80" />
        </div> 
        <div class="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box landscape-image" />
        </div> 
        <div class="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box landscape-image" />
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
    height: auto;
    max-width: 100%;
    max-height: 56.25vw; /* 16:9 aspect ratio (9 / 16 * 100) */
}
</style>