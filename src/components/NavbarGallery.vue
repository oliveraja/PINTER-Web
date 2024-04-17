<template>
    <nav :class="{ 'bg-white': isScrolled }" class="fixed w-full z-20 top-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <img src="/images/logo.png" class="h-8" alt="Logo">
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <router-link to="/" class="text-white bg-red-800 hover:bg-black hover:text-white font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Back to Home
                </router-link>
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
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">Briefing</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">Kick Off</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">In Class Training</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">Project Simulation</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">On Job Training</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-800 rounded md:bg-transparent md:p-0 hover:text-black" @click.prevent="scrollToSection('')">Random Pics</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarGallery',
    data() {
        return {
            isScrolled: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            this.isScrolled = window.scrollY > 0;
        },
        scrollToSection(sectionId) {
            var sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>

</style>