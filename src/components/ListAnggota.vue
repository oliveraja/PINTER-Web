<template>
  <div class="listPINTER mt-16">
    <h1 class="font-bold text-xl">Hiii ini anggota PINTER</h1>
    <div class="seacrhFilter mt-5"> 
        <form class="max-w-lg mx-auto">
            <div class="flex">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200" type="button">Divisi 
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GenAI</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">RPA</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Arjuna</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRM</button>
                    </li>
                    </ul>
                </div>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 " placeholder="Search Name or Divison..." required />
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-100 rounded-e-lg border hover:bg-gray-200">
                        <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="table mt-5 px-40"> 
        <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-white">
                <thead class="text-sm text-white uppercase bg-red-800">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Division
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-200 border-b border-white text-black">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            Oliver Sebastian Marpaung
                        </th>
                        <td class="px-6 py-4">
                            Gen AI
                        </td>
                    </tr>
                    <tr class="bg-gray-200 border-b border-white text-black">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            Andi Mataraja
                        </th>
                        <td class="px-6 py-4">
                            Gen AI
                        </td>
                    </tr>
                    <tr class="bg-gray-200 border-b border-white text-black">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            Tommy
                        </th>
                        <td class="px-6 py-4">
                            Gen AI
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListAnggota',

}
</script>

<style>

</style>