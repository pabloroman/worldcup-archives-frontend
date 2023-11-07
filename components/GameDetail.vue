<template>
    <div class="min-h-screen bg-center bg-white p-6 lg:px-0 lg:py-12">
        <div class="max-w-screen-lg mx-auto space-y-8 divide-y divide-grey-300">

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 space-y-6 divide-y divide-grey-300 lg:divide-none">

                <section>
                    <NuxtLink :to="'/tournaments/'+tournament+'/teams/'+game.home_team.code">
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`">
                        <h2 class="text-lg lg:text-2xl font-bold uppercase">{{ game.home_team.name }}</h2>
                    </div>
                    </NuxtLink>
                    <div class="mt-1 lg:text-lg" v-for="manager in game.home_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-6" v-if="game.home_squad.length">
                        <div class="mt-1" v-for="squad_member in game.home_squad.filter(squad_member => squad_member.starter == 1)">
                            <GamePlayerAppearance :player="squad_member" :home_team="true" :bookings="game.bookings"></GamePlayerAppearance>
                        </div>
                        <template class="" v-if="game.home_squad.filter(squad_member => squad_member.starter == 0).length">
                        <div class="uppercase text-slate-400 text-sm mt-6">Subs</div>
                        <div class="mt-1" v-for="squad_member in game.home_squad.filter(squad_member => squad_member.starter == 0)">
                            <GamePlayerAppearance :player="squad_member" :home_team="true" :bookings="game.bookings"></GamePlayerAppearance>
                        </div>
                        </template>
                    </div>
                    <div v-else>
                        <p class="text-slate-400 text-lg mt-6">No lineup available</p>
                    </div>
                </section>

                <section class="pt-6 lg:pt-0">
                    <NuxtLink :to="'/tournaments/'+tournament+'/teams/'+game.away_team.code">
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        <h2 class="text-lg lg:text-2xl font-bold uppercase">{{ game.away_team.name }}</h2>
                    </div>
                    </NuxtLink>
                    <div class="mt-1 lg:text-lg" v-for="manager in game.away_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>

                    <div class="mt-6" v-if="game.away_squad.length">
                        <div class="mt-1" v-for="squad_member in game.away_squad.filter(squad_member => squad_member.starter == 1)">
                            <GamePlayerAppearance :player="squad_member" :home_team="false" :bookings="game.bookings"></GamePlayerAppearance>
                        </div>
                        <template class="" v-if="game.away_squad.filter(squad_member => squad_member.starter == 0).length">
                        <div class="uppercase text-slate-400 text-sm mt-6">Subs</div>
                        <div class="mt-1" v-for="squad_member in game.away_squad.filter(squad_member => squad_member.starter == 0)">
                            <GamePlayerAppearance :player="squad_member" :home_team="false" :bookings="game.bookings"></GamePlayerAppearance>
                        </div>
                        </template>
                    </div>
                    <div v-else>
                        <p class="text-slate-400 text-lg mt-6">No lineup available</p> 
                    </div>
                </section>

                <section class="pt-6 lg:pt-0">
                    
                    <div v-if="game.image && game.video" class="mb-6">
                        <a :href=game.video target="_blank" class="relative">
                            <div class="absolute inset-0 flex justify-center items-center bg-gray-500/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-white drop-shadow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            </div>
                            <img :src=game.image class="rounded">
                        </a>
                    </div>
                    <h5 class="text-sm lg:text-base uppercase text-slate-400">Date</h5>
                    <p class="lg:text-lg mb-6">{{ game.match_date }}, {{ game.match_time }}</p>

                    <h5 class="text-sm lg:text-base uppercase text-slate-400">Stadium</h5>
                    <p class="lg:text-lg mb-6">{{ game.stadium.name }} &bull; {{ game.stadium.city }}, {{ game.stadium.country }}</p>


                    <h5 class="text-sm lg:text-base uppercase text-slate-400">Referee</h5>
                    <p class="lg:text-lg mb-6">{{  game.referee.name }} ({{  game.referee.country }})</p>
                </section>
            </div>


            <template v-if="game.similar_games">
                <div class="lg:grid lg:grid-cols-3 py-6 lg:gap-x-8 lg:space-y-0 space-y-6 divide-y divide-grey-300 lg:divide-none">
                <section class="col-span-2">
                    <h5 class="text-sm lg:text-base uppercase text-slate-400">Other matches between {{ game.home_team.name }} and {{  game.away_team.name }}</h5>
                    <table class="min-w-full table-auto text-left divide-y divide-gray-300">
                        <template v-for="similar_game in game.similar_games">
                            <GamePreview :game="similar_game" :tournament="similar_game.tournament_id"></GamePreview>
                        </template>
                    </table>
                </section>
                </div>
            </template>

        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        game: {
            type: Object,
            required: true
        },
        tournament: {
            type: String,
            required: true
        }
    });
</script>