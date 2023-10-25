<template>
    <div v-if="!pendingGames && !pendingTeams">

        <div class="min-h-screen bg-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid lg:grid-cols-3 gap-8 pt-8">

                <div class="lg:col-span-2">
                    <GameList :games="games"></GameList>
                </div>

                <div class="lg:col-span-1">
                    <ul class="divide-y divide-gray-200">
                        <li class="group relative flex flex-col items-start bg-white" v-for="team in teams">
                            <NuxtLink class="w-full" :to="'/tournaments/'+route.params.tournament+'/teams/'+team.code">
                            <div class="w-full p-4 hover:bg-zinc-50 flex space-x-2">
                                <img class="h-6 rounded" :src="`/countries/${team.code}.svg`"><span>{{ team.name }}</span>
                            </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        slug: {
            type: String,
            required: true
        }
    });

    const route = useRoute();
 
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: teams, pending: pendingTeams } = await useLazyFetch(
        API_BASE_URL + `/api/tournament/${props.slug}/teams`
    );
    const { data: games, pending: pendingGames } = await useLazyFetch(
        API_BASE_URL + `/api/tournament/${props.slug}/games`
    );
</script>