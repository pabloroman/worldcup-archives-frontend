<template>
    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <header style="background-color: #ff9b54;">
            <div class="max-w-screen-lg mx-auto py-10">
            <div class="text-white opacity-75">{{ tournament.data.name }}</div>
            <h1 class="text-5xl font-bold tracking-tight text-white">{{ tournament.data.host_country }} {{ tournament.data.year }}</h1>
        </div>
        </header>

        <section>
            <div class="text-2xl font-medium text-center py-6">
            {{ tournament.data.games.final[0].home_team }} {{ tournament.data.games.final[0].home_team_score }} - {{ tournament.data.games.final[0].away_team_score }} {{ tournament.data.games.final[0].away_team }}
            </div>
        </section>

        <div class="min-h-screen bg-center bg-gray-100">
            <div class="max-w-screen-lg mx-auto py-10">
                <h3 class="text-2xl">Teams</h3>
                <ul class="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                    <li class="group relative flex flex-col items-start" v-for="team in tournament.data.teams">
                        <div class="bg-white p-4 w-full h-32 hover:bg-zinc-50 sm:rounded-2xl">
                            {{ team.name }}
                        </div>
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

    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: tournament, pending } = await useLazyFetch(
        API_BASE_URL + '/api/tournament/'+props.slug
    );
</script>