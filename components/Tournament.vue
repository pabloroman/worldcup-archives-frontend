<template>

<div class="divide-y">

    <section>
        <div class="max-w-screen-lg mx-auto py-6 px-6 lg:px-0 space-y-6 lg:space-y-8 lg:py-8"> 
            <h3 class="text-xl uppercase text-slate-400">Winners and awards</h3>
            <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div class="lg:col-span-1 grid gap-6 lg:gap-8">
                    <div class="space-y-1">
                        <div class="uppercase text-sm text-slate-400">Winner</div>
                        <div>
                        <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[0].team_code">
                        <div class="flex items-center space-x-2 lg:space-x-4">
                            <img class="h-6 lg:h-12 rounded shadow" :src="`/countries/${tournament.standings[0].team_code}.svg`">
                            <h2 class="text-xl lg:text-3xl font-bold uppercase">{{ tournament.standings[0].team_name }}</h2>
                        </div>
                        </NuxtLink>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <div class="uppercase text-sm text-slate-400">Runner-up</div>
                        <div>
                        <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[1].team_code">
                        <div class="flex items-center space-x-2 lg:space-x-4">
                            <img class="h-6 lg:h-12 rounded shadow" :src="`/countries/${tournament.standings[1].team_code}.svg`">
                            <h2 class="text-xl lg:text-3xl font-bold uppercase">{{ tournament.standings[1].team_name }}</h2>
                        </div>
                        </NuxtLink>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <div class="uppercase text-sm text-slate-400">Third place</div>
                        <div>
                        <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[2].team_code">
                        <div class="flex items-center space-x-2 lg:space-x-4">
                            <img class="h-6 lg:h-12 rounded shadow" :src="`/countries/${tournament.standings[2].team_code}.svg`">
                            <h2 class="text-xl lg:text-3xl font-bold uppercase">{{ tournament.standings[2].team_name }}</h2>
                        </div>
                        </NuxtLink>
                        </div>
                    </div>
                </div>

                <hr class="lg:hidden">

                <div class="lg:col-span-2">
                    <div class="grid lg:grid-cols-3 gap-6">
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden ball')">
                            <div class="uppercase text-sm text-slate-400">Golden Ball (best player)</div>
                            <TournamentAward :awards="tournament.awards" name="golden ball"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'silver ball')">
                            <div class="uppercase text-sm text-slate-400">Silver Ball</div>
                            <TournamentAward :awards="tournament.awards" name="silver ball"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'bronze ball')">
                            <div class="uppercase text-sm text-slate-400">Bronze Ball</div>
                            <TournamentAward :awards="tournament.awards" name="bronze ball"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden boot')">
                            <div class="uppercase text-sm text-slate-400">Golden Boot (top scorer)</div>
                            <TournamentAward :awards="tournament.awards" name="golden boot"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'silver boot')">
                            <div class="uppercase text-sm text-slate-400">Silver Boot</div>
                            <TournamentAward :awards="tournament.awards" name="silver boot"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden glove')">
                            <div class="uppercase text-sm text-slate-400">Golden Glove (best keeper)</div>
                            <TournamentAward :awards="tournament.awards" name="golden glove"></TournamentAward>
                        </div>
                        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'best young player')">
                            <div class="uppercase text-sm text-slate-400">Best Young Player</div>
                            <TournamentAward :awards="tournament.awards" name="best young player"></TournamentAward>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>

    <section v-if="!pendingGames" class="px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto py-6 lg:py-10">
            <h3 class="text-xl uppercase text-slate-400">Knockout stage</h3>
            <div class="pt-0 pb-6">
                <GameList :games="games" :includeGroupStages="false"></GameList>
            </div>
        
            <template v-if="!pendingGroups" class="max-w-screen-lg mx-auto py-6 lg:py-10 space-y-8">

                <div v-for="stage in groups" class="py-4">
                    <h4 class="text-xl uppercase text-slate-400">{{ stage.name }}</h4>
                    <div class="grid lg:grid-cols-2 gap-x-16 gap-y-8 py-6">
                    <div v-for="group in stage.groups">
                        <table class="min-w-full table-fixed text-right divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th class="text-left uppercase text-slate-400 font-normal text-sm">{{ group.name }}</th>
                                    <th class="w-1/12">MP</th>
                                    <th class="w-1/12">W</th>
                                    <th class="w-1/12">D</th>
                                    <th class="w-1/12">L</th>
                                    <th class="w-1/12">GF</th>
                                    <th class="w-1/12">GA</th>
                                    <th class="w-1/12">Pts</th>
                                </tr>
                            </thead>
                            <tbody v-for="standing in group.groupStandings">
                                <tr>
                                    <td class="align-middle whitespace-nowrap py-1">
                                        <NuxtLink :to="`/tournaments/${tournament.id}/teams/${standing.team_code}`" class="flex space-x-3 items-center">
                                        <div class="text-slate-400 w-1 lg:w-4">{{ standing.position }}</div>
                                        <template v-if="standing.advanced">
                                            <img class="h-4 lg:h-5 rounded" :src="`/countries/${standing.team_code}.svg`"><span class="font-bold">{{ standing.team_name }}</span>
                                        </template>
                                        <template v-else>
                                            <img class="h-4 lg:h-5 rounded" :src="`/countries/${standing.team_code}.svg`"><span>{{ standing.team_name }}</span>
                                        </template>
                                        </NuxtLink>
                                    </td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.played }}</td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.wins }}</td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.draws }}</td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.losses }}</td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.goals_for }}</td>
                                    <td class="align-middle whitespace-nowrap">{{ standing.goals_against }}</td>
                                    <td class="align-middle whitespace-nowrap"><strong>{{ standing.points }}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>

    <section v-if="!pendingTeams" class="px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto py-6 lg:py-10">
            <h3 class="text-xl uppercase text-slate-400">Qualified teams</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div v-for="team in teams">
                    <NuxtLink class="w-full" :to="'/tournaments/'+route.params.tournament+'/teams/'+team.code">
                    <div class="w-full flex space-x-2 items-center">
                        <img class="h-5 lg:h-6 rounded" :src="`/countries/${team.code}.svg`"><span class="lg:text-lg">{{ team.name }}</span>
                    </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <section class="px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto py-6 lg:py-10">
            <h3 class="text-xl uppercase text-slate-400">Top scorers</h3>
            <div class="grid lg:grid-cols-4 gap-4 mt-4">
                <div v-for="player in tournament.top_scorers">
                    <div class="flex space-x-2 items-baseline text-lg">
                        <img class="h-4 relative top-px rounded-[2px]" :src="`/countries/${player.team_code}.svg`"><span>{{ player.player }} ({{ player.count }})</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto py-6 lg:py-10">
            <h3 class="text-xl uppercase text-slate-400">Stadiums</h3>
            <div class="grid lg:grid-cols-3 gap-4 mt-4">
                <div v-for="stadium in tournament.stadiums">
                    <div>
                        <div class="lg:text-lg">{{ stadium.name }}</div>
                        <div class="text-slate-400">{{ stadium.city }}, {{ stadium.country }} &bull; {{ stadium.capacity }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
    const { data: groups, pending: pendingGroups } = await useLazyFetch(
        API_BASE_URL + `/api/tournament/${props.slug}/groups`
    );
</script>