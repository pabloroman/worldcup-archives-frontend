<template>

    <div v-if="!pending">
        <GameHeader :game="game" :tournament="route.params.tournament"></GameHeader>
        <GameDetail :game="game" :tournament="route.params.tournament"></GameDetail>
    </div>
    
</template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();
  
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: game, pending } = await useLazyFetch(
        API_BASE_URL + `/api/game/${route.params.game}`
    );

    </script>