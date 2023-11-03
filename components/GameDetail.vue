<template>
    <div class="min-h-screen bg-center bg-white p-6 lg:px-0 lg:py-12">
        <div class="max-w-screen-lg mx-auto">

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 space-y-6 divide-y divide-grey-300 lg:divide-none">

                <section v-if="game.home_squad.length">
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`">
                        <h2 class="text-2xl font-bold uppercase">{{ game.home_team.name }}</h2>
                    </div>
                    <div class="mt-1 text-lg" v-for="manager in game.home_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-6">
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
                </section>

                <section v-if="game.away_squad.length" class="pt-6 lg:pt-0">
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        <h2 class="text-2xl font-bold uppercase">{{ game.away_team.name }}</h2>
                    </div>
                    <div class="mt-1 text-lg" v-for="manager in game.away_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>

                    <div class="mt-6" >
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

                </section>

                <section class="pt-6 lg:pt-0">
                    
                    
                    <h5 class="uppercase text-slate-400">Date</h5>
                    <p class="text-lg mb-6">{{ game.match_date }}, {{ game.match_time }}</p>

                    <h5 class="uppercase text-slate-400">Stadium</h5>
                    <p class="text-lg mb-6">{{ game.stadium.name }} &bull; {{ game.stadium.city }}, {{ game.stadium.country }}</p>


                    <h5 class="uppercase text-slate-400">Referee</h5>
                    <p class="text-lg mb-6">{{  game.referee.name }} ({{  game.referee.country }})</p>
                </section>
            </div>
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