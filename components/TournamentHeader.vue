<template>
    <div>
        <header style="background-color: #ff9b54;">
            <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">
                <div class="text-white opacity-75">{{ tournament.name }}</div>
                <h1 class="text-5xl font-bold tracking-tight text-white">{{ tournament.host_country }} {{ tournament.year }}</h1>
            </div>
        </header>
    </div>
</template>

<script setup>
    const props = defineProps({
        tournament: {
            type: Object,
            required: true,
        }
    });
</script>