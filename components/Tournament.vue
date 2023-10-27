<template>

<div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0"> 
            <table class="min-w-full table-auto text-left divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th class="px-3 py-4 table-cell">Winner</th>
                    <!-- <th class="px-3 py-4 table-cell">Runner-up</th>
                    <th class="px-3 py-4 table-cell">Third place</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="align-top px-3 py-4 table-cell">
                            <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.winner.code">
                            <div class="flex items-center space-x-2 lg:space-x-4">
                                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.winner.code}.svg`">
                                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.winner.name }}</h2>
                            </div>
                            </NuxtLink>
                        </td>
                        <!-- <td class="align-top px-3 py-4 table-cell">
                            <div class="flex items-center space-x-2 lg:space-x-4">
                                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.second.code}.svg`">
                                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.third.name }}</h2>
                            </div>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                            <div class="flex items-center space-x-2 lg:space-x-4">
                                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.third.code}.svg`">
                                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.third.name }}</h2>
                            </div>
                        </td> -->
                    </tr>
                </tbody>
            </table>               

        </div>
        <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">
            <table class="min-w-full table-auto text-left divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th class="px-3 py-4 table-cell">Golden Ball (best player)</th>
                    <th class="px-3 py-4 table-cell">Silver Ball</th>
                    <th class="px-3 py-4 table-cell">Bronze Ball</th>
                    <th class="px-3 py-4 table-cell">Golden Boot (top scorer)</th>
                    <th class="px-3 py-4 table-cell">Silver Boot</th>
                    <th class="px-3 py-4 table-cell">Golden Glove (best keeper)</th>
                    <th class="px-3 py-4 table-cell">Best Young Player</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="golden ball"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="silver ball"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="bronze ball"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="golden boot"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="silver boot"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="golden glove"></TournamentAward>
                        </td>
                        <td class="align-top px-3 py-4 table-cell">
                        <TournamentAward :awards="tournament.awards" name="best young player"></TournamentAward>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

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
        },
        tournament: {
            type: Object,
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