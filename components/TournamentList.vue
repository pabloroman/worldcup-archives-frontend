<template>

    <div v-if="!pending">
        <div id="tournament-list" class="flex h-16 px-6 items-center overflow-x-scroll space-x-6 sm:space-x-8">
        <div v-for="tournament in tournaments">
            <NuxtLink :to="'/tournaments/'+tournament.id">
                <span class="whitespace-nowrap">{{ tournament.host_country }} {{ tournament.year }}</span>
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