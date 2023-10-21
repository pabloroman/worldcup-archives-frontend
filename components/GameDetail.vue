<template>
    <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
        <div class="max-w-screen-lg mx-auto py-10">

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-8">

                <section>
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`">
                        <h2 class="text-2xl text-medium font-bold">{{ game.home_team.name }}</h2>
                    </div>
                    <div class="mt-1" v-for="manager in game.home_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-4">
                    <div class="mt-1" v-for="squad_member in game.home_squad">
                        <div class="space-x-2"><span>{{  squad_member.number }}</span><span>{{ squad_member.first_name }} {{  squad_member.last_name }}</span><span>{{  squad_member.position }}</span></div>
                    </div>
                    </div>
                </section>

                <section>
                    <div class="flex items-center space-x-2">
                        <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        <h2 class="text-2xl text-medium font-bold">{{ game.away_team.name }}</h2>
                    </div>
                    <div class="mt-1" v-for="manager in game.away_managers">
                        {{ manager.name }} ({{ manager.country }})
                    </div>
                    <div class="mt-4">
                    <div class="mt-1" v-for="squad_member in game.away_squad">
                        <div class="space-x-2"><span>{{  squad_member.number }}</span><span>{{ squad_member.first_name }} {{  squad_member.last_name }}</span><span>{{  squad_member.position }}</span></div>
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