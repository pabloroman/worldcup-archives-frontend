<template>

    <div class="">
      <Tournament :slug="route.params.tournament" />
    </div>
    
    </template>
    
    <script setup>
    definePageMeta({
      layout: 'app-layout',
    })

    const route = useRoute();

    </script>