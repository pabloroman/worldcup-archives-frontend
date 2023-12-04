<template>

<div class="px-4 text-center sm:px-6 lg:px-8">
  <div class="py-6 lg:py-12 px-8 text-left border-b-4 border-neutral-100 bg-cover bg-no-repeat bg-bottom" style="background-image: url('/hero.png');">
    <h1 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-90 text-white drop-shadow-md">The World Cup Archives</h1>
  </div>

  <div v-if="!pending" class="mt-4 mb-8">

    <div class="grid lg:grid-cols-2 gap-4">
      <div v-for="tournament in tournaments" class="transition hover:shadow-md hover:from-[#283B45] hover:to-[#0E1E2C] h-32 rounded-xl bg-gradient-to-br from-[#0E1E2C] from-20% via-[#000000] via-30% to-[#283B45]">
        <NuxtLink :to="'/tournaments/'+tournament.id" class="h-full flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-x-4">
          <div class="flex space-x-3"><HostFlag :tournament="tournament"></HostFlag></div>
          <h2 class="text-white font-bold text-2xl lg:text-4xl uppercase">{{ tournament.host_country }} {{ tournament.year }}</h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
  definePageMeta({
    layout: 'app-layout',
  })

  const { API_BASE_URL } = useRuntimeConfig().public;
  
  const { data: tournaments, pending } = await useLazyFetch(
    API_BASE_URL + '/api/tournaments/male', {
      method: 'GET',
  });
</script>
