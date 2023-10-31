<template>
    <div class="min-h-screen bg-center bg-white p-6 lg:px-0 lg:py-12">
        <div class="max-w-screen-lg mx-auto">

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 space-y-4">

                <section>
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`">
                        <h2 class="text-2xl font-bold">{{ game.home_team.name }}</h2>
                    </div>
                    <div class="mt-1" v-for="manager in game.home_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-4">
                    <div class="mt-1" v-for="squad_member in game.home_squad.filter(squad_member => squad_member.starter == 1)">
                        <GamePlayerAppearance :player="squad_member" :home_team="true" :bookings="game.bookings"></GamePlayerAppearance>
                    </div>
                    <div class="font-bold mt-2">Subs</div>
                    <div class="mt-1" v-for="squad_member in game.home_squad.filter(squad_member => squad_member.starter == 0)">
                        <GamePlayerAppearance :player="squad_member" :home_team="true" :bookings="game.bookings"></GamePlayerAppearance>
                    </div>
                    </div>
                </section>

                <section>
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        <h2 class="text-2xl font-bold">{{ game.away_team.name }}</h2>
                    </div>
                    <div class="mt-1" v-for="manager in game.away_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-4">
                    <div class="mt-1" v-for="squad_member in game.away_squad.filter(squad_member => squad_member.starter == 1)">
                        <GamePlayerAppearance :player="squad_member" :home_team="false" :bookings="game.bookings"></GamePlayerAppearance>
                    </div>
                    <div class="font-bold mt-2">Subs</div>
                    <div class="mt-1" v-for="squad_member in game.away_squad.filter(squad_member => squad_member.starter == 0)">
                        <GamePlayerAppearance :player="squad_member" :home_team="false" :bookings="game.bookings"></GamePlayerAppearance>
                    </div>
                </div>
                </section>

                <section>
                    
                    <h5 class="font-bold">Date</h5>
                    <p>{{ game.match_date }}, {{ game.match_time }}</p>
                    
                    <h5 class="font-bold mt-2">Stadium</h5>
                    <p>{{ game.stadium.name }} &bull; {{ game.stadium.city }}, {{ game.stadium.country }}</p>
                    
                    <h5 class="font-bold mt-2">Referee</h5>
                    <p>{{  game.referee.name }} ({{  game.referee.country }})</p>
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