<template>
    <div v-if="!pendingGames && !pendingTeams">

        <section>
            <div class="text-2xl font-medium text-center py-6">
                <NuxtLink :to="'/tournaments/'+route.params.tournament+'/games/'+games.data.final[0].id">
                <span class="whitespace-nowrap">{{ games.data.final[0].home_team }} {{ games.data.final[0].home_team_score }} - {{ games.data.final[0].away_team_score }} {{ games.data.final[0].away_team }}
</span>
                </NuxtLink>
            </div>
        </section>

        <div class="min-h-screen bg-center bg-gray-100">
            <div class="max-w-screen-lg mx-auto py-10 px-0 md:px-6 lg:px-0">
                <h3 class="text-2xl">Teams</h3>
                <ul class="mt-8 grid grid-cols-1 gap-x-12 md:gap-y-4 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <li class="group relative flex flex-col items-start" v-for="team in teams.data">
                        <NuxtLink class="w-full" :to="'/tournaments/'+route.params.tournament+'/teams/'+team.code">
                        <div class="bg-white p-4 w-full lg:h-32 hover:bg-zinc-50 sm:rounded-2xl">
                            {{ team.flag }} {{ team.name }}
                        </div>
                        </NuxtLink>
                    </li>
                </ul>
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