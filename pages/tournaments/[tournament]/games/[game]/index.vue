<template>

    <div>
        <TournamentHeader :slug="route.params.tournament"></TournamentHeader>
        <Game :game="route.params.game" :tournament="route.params.tournament"></Game>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>