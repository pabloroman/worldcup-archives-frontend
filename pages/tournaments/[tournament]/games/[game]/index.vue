<template>

    <div>
        <TournamentHeader :slug="route.params.tournament"></TournamentHeader>
        <GameDetail :game="route.params.game" :tournament="route.params.tournament"></GameDetail>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>