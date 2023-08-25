<template>

    <div class="">
        <TournamentHeader :slug="route.params.tournament"></TournamentHeader>
        <Team :team="route.params.team" :tournament="route.params.tournament"></Team>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>