<template>

    <div v-if="!pending">
        <Team :team="team" :tournament="route.params.tournament"></Team>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: team, pending } = await useLazyFetch(
        API_BASE_URL + `/api/tournament/${route.params.tournament}/team/${route.params.team}`
    );

    </script>