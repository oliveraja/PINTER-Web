<template>
    <NavbarSecond />
    <DetailGallery />
</template>

<script>
import NavbarSecond from '@/components/NavbarGallery.vue';
import DetailGallery from '@/components/DetailGallery.vue';

export default {
    name: 'GalleryView',
    components: {
        NavbarSecond,
        DetailGallery
    }
}
</script>

<style>

</style>