<template>
    <div>
        <header class="bg-gradient-to-br from-[#0E1E2C] from-20% via-[#000000] via-30% to-[#283B45]">
            <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">
                <div class="text-white opacity-75">{{ tournament.name }} &bull; {{ tournamentStartDate }} - {{ tournamentEndDate }}</div>
                <div class="flex items-center space-x-4 mt-2">
                <HostFlag :tournament="tournament"></HostFlag>
                <h1 class="text-4xl lg:text-5xl font-bold uppercase text-white shadow-md">{{ tournament.host_country }} {{ tournament.year }}</h1>
            </div>
            <template v-if="tournament.description">
                <p class="mt-6 text-white text-lg whitespace-pre-line text-slate-300">{{ tournament.description }}</p>
            </template>
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

    const tournamentStartDate = computed(() => {
        return new Date(props.tournament.start_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    });

    const tournamentEndDate = computed(() => {
        return new Date(props.tournament.end_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    });
</script>