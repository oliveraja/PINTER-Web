<template>
  <NavbarSecond />
  <ListAnggota />
</template>

<script>
import NavbarSecond from '@/components/NavbarGallery.vue';
import ListAnggota from '../components/ListAnggota.vue'

export default {
    name: 'listUser',
    components:{
      NavbarSecond,
      ListAnggota
    }
}
</script>

<style>

</style>