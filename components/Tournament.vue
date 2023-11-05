<template>

<div class="max-w-screen-lg mx-auto py-6 px-6 lg:px-0 space-y-6 lg:space-y-8 lg:py-8"> 

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

    <div v-if="!pendingGames && !pendingTeams">

        <div class="min-h-screen bg-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid lg:grid-cols-3 gap-8 py-8">

                <div class="lg:col-span-2">
                    <h3 class="text-xl uppercase text-slate-400">Games</h3>
                    <GameList :games="games"></GameList>
                </div>

                <div class="lg:col-span-1">
                    <h3 class="text-xl uppercase text-slate-400">Qualified teams</h3>
                    <ul class="divide-y divide-gray-200 mt-6">
                        <li class="group relative flex flex-col items-start bg-white" v-for="team in teams">
                            <NuxtLink class="w-full" :to="'/tournaments/'+route.params.tournament+'/teams/'+team.code">
                            <div class="w-full px-4 py-2 lg:p-4 hover:bg-zinc-50 flex space-x-2 items-center">
                                <img class="h-5 lg:h-6 rounded" :src="`/countries/${team.code}.svg`"><span class="lg:text-lg">{{ team.name }}</span>
                            </div>
                            </NuxtLink>
                        </li>
                    </ul>

                    <h3 class="text-xl uppercase text-slate-400 mt-6">Stadiums</h3>
                    <ul class="divide-y divide-gray-200 mt-8">
                        <li class="group relative flex flex-col items-start bg-white" v-for="stadium in tournament.stadiums">
                            <div class="w-full px-4 py-2">
                                <div class="lg:text-lg">{{ stadium.name }}</div>
                                <div class="text-slate-400">{{ stadium.city }}, {{ stadium.country }} &bull; {{ stadium.capacity }}</div>
                            </div>
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