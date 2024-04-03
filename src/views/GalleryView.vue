<template>
    <NavbarGallery />
    <DetailGallery />
</template>

<script>
import NavbarGallery from '@/components/NavbarGallery.vue';
import DetailGallery from '@/components/DetailGallery.vue';

export default {
    name: 'GalleryView',
    components: {
        NavbarGallery,
        DetailGallery
    }
}
</script>

<style>

</style>