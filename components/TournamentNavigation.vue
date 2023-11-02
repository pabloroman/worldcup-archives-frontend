<template>

    <div v-if="!pending">
        <div id="tournament-list" class="flex h-12 px-6 lg:px-8 items-center overflow-x-scroll space-x-6 sm:space-x-8">
            <NuxtLink to="/"><span class="whitespace-nowrap uppercase tracking-wide text-sm font-bold">The World Cup Archives</span></NuxtLink>
        <div v-for="tournament in tournaments">
            <NuxtLink :to="'/tournaments/'+tournament.id" class="text-slate-400 hover:text-slate-900">
                <span class="whitespace-nowrap uppercase tracking-wide text-sm">{{ tournament.host_country }} {{ tournament.year }}</span>
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