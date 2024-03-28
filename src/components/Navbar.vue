<template>
    <nav class="fixed w-full z-20 top-0 bg-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <img src="/images/logo.png" class="h-8" alt="Logo">
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button id="backToTopButton" type="button" class="text-white bg-red-800 hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Back to Top</button>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                    <li>
                        <a href="#aboutUs" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" aria-current="page">About Us</a>
                    </li>
                    <li>
                        <a href="#journey" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" aria-current="page">Journey</a>
                    </li>
                    <li>
                        <a href="#gallery" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" aria-current="page">Gallery</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  }
}

document.addEventListener('DOMContentLoaded', function() {
        // Dapatkan tombol "Back to Top"
        var backButton = document.getElementById('backToTopButton');

        // Ketika tombol "Back to Top" diklik
        backButton.addEventListener('click', function() {
            // Gulir ke paling atas halaman
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Animasi gulir halus
            });
        });
    });
</script>

<style>

</style>