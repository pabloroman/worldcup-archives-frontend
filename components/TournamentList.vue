<template>

    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <TournamentCard v-for="tournament in tournaments.data"
        :tournament="tournament"/>
    </div>
</template>

<script setup>
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: tournaments, pending } = await useLazyFetch(
    API_BASE_URL + '/api/tournaments/male', {
        method: 'GET',
    });
</script>