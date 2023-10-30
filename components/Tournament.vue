<template>

<div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0 space-y-16"> 

    <div class="grid lg:grid-cols-3 gap-6">
        <div class="space-y-3">
            <div class="font-bold uppercase text-sm">Winner</div>
            <div>
            <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[0].team_code">
            <div class="flex items-center space-x-2 lg:space-x-4">
                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.standings[0].team_code}.svg`">
                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.standings[0].team_name }}</h2>
            </div>
            </NuxtLink>
            </div>
        </div>
        <div class="space-y-3">
            <div class="font-bold uppercase text-sm">Runner-up</div>
            <div>
            <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[1].team_code">
            <div class="flex items-center space-x-2 lg:space-x-4">
                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.standings[1].team_code}.svg`">
                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.standings[1].team_name }}</h2>
            </div>
            </NuxtLink>
            </div>
        </div>
        <div class="space-y-3">
            <div class="font-bold uppercase text-sm">Third place</div>
            <div>
            <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.standings[2].team_code">
            <div class="flex items-center space-x-2 lg:space-x-4">
                <img class="h-6 lg:h-12 rounded" :src="`/countries/${tournament.standings[2].team_code}.svg`">
                <h2 class="text-xl lg:text-3xl font-bold">{{ tournament.standings[2].team_name }}</h2>
            </div>
            </NuxtLink>
            </div>
        </div>
    </div>          

    <div class="grid lg:grid-cols-3 gap-6">
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden ball')">
            <div class="font-bold uppercase text-sm">Golden Ball (best player)</div>
            <TournamentAward :awards="tournament.awards" name="golden ball"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'silver ball')">
            <div class="font-bold uppercase text-sm">Silver Ball</div>
            <TournamentAward :awards="tournament.awards" name="silver ball"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'bronze ball')">
            <div class="font-bold uppercase text-sm">Bronze Ball</div>
            <TournamentAward :awards="tournament.awards" name="bronze ball"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden boot')">
            <div class="font-bold uppercase text-sm">Golden Boot (top scorer)</div>
            <TournamentAward :awards="tournament.awards" name="golden boot"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'silver boot')">
            <div class="font-bold uppercase text-sm">Silver Boot</div>
            <TournamentAward :awards="tournament.awards" name="silver boot"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'golden glove')">
            <div class="font-bold uppercase text-sm">Golden Glove (best keeper)</div>
            <TournamentAward :awards="tournament.awards" name="golden glove"></TournamentAward>
        </div>
        <div class="space-y-1" v-if="tournament.awards.find(award => award.award_name.toLowerCase() == 'best young player')">
            <div class="font-bold uppercase text-sm">Best Young Player</div>
            <TournamentAward :awards="tournament.awards" name="best young player"></TournamentAward>
        </div>
    </div>
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