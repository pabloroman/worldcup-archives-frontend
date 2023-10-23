<template>
    <header style="background-color: #260eae;" class="text-white">
        <div class="max-w-screen-lg mx-auto p-4 lg:px-0 lg:py-8">

            <div class="text-center text-[10px] lg:text-sm uppercase">{{ game.tournament_name }} &bull; {{ game.stage_name }}</div>

            <div class="divide-y divide-white/30">

                <div class="grid grid-cols-[1fr,auto,1fr] py-2 lg:py-6">
                    <div class="flex justify-self-start">
                        <div class="flex items-center space-x-2 lg:space-x-4">
                            <img class="h-6 lg:h-12 rounded" :src="`/countries/${game.home_team.code}.svg`">
                            <h2 class="text-xl lg:text-3xl font-bold">{{ game.home_team.name }}</h2>
                        </div>
                    </div>

                    <div class="w-20 lg:w-32 text-center">
                        
                        <div class="text-3xl lg:text-6xl font-bold">{{ game.score }}</div>
                        <div v-if="game.penalty_shootout">
                            <span class="lg:text-xl">({{ game.score_penalties }})</span>
                        </div>
                    </div>

                    <div class="flex justify-self-end">
                        <div class="flex items-center space-x-2 lg:space-x-4">
                            <h2 class="text-xl lg:text-3xl font-bold">{{ game.away_team.name }}</h2>
                            <img class="h-6 lg:h-12 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        </div>

                    </div>
                </div>

                <div class="grid grid-cols-[1fr,auto,1fr] py-2">

                    <div class="flex flex-col justify-self-start">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.home_team">
                                <div class="text-xs lg:text-base text-left">{{  goal.name }} ({{ goal.minute }})
                                    <span v-if="goal.penalty"> (P)</span>
                                    <span v-if="goal.own_goal"> (OG)</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-10 text-center"></div>

                    <div class="flex flex-col justify-self-end">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.away_team">
                                <div class="text-xs lg:text-base text-right">{{  goal.name }} ({{ goal.minute }})
                                    <span v-if="goal.penalty"> (P)</span>
                                    <span v-if="goal.own_goal"> (OG)</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
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
        },
    });
</script>