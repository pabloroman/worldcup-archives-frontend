<template>

    <div class="px-4 text-center sm:px-6 lg:px-8">
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Single tournamne</h1>
      </div>
      <Tournament :slug="route.params.tournament" />
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>