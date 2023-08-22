<template>

    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <div id="tournament-list" class="flex h-16 items-center overflow-x-scroll">
        <div v-for="tournament in tournaments.data">
            <NuxtLink :to="'/tournaments/'+tournament.id">
                <span class="whitespace-nowrap p-6">{{ tournament.host_country }} {{ tournament.year }}</span>
            </NuxtLink>
        </div>
    </div>
    </div>
</template>

<script setup>
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: tournaments, pending } = await useLazyFetch(
    API_BASE_URL + '/api/tournaments/male', {
        method: 'GET',
    });
</script>
<style scoped>
#tournament-list {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}

#tournament-list::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>