<template>

    <div class="px-4 text-center sm:px-6 lg:px-8">
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Tournaments</h1>
      </div>
      <TournamentList/>
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })
    </script>