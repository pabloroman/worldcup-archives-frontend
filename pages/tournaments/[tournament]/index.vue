<template>

    <div v-if="!pending">
      <TournamentHeader :slug="route.params.tournament" :tournament="tournament"></TournamentHeader>
      <Tournament :slug="route.params.tournament" :tournament="tournament" />
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: tournament, pending } = await useLazyFetch(
        API_BASE_URL + `/api/tournament/${route.params.tournament}`
    );

    </script>