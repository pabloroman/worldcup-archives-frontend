<template>

    <div>
        <TournamentHeader :slug="route.params.tournament"></TournamentHeader>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>