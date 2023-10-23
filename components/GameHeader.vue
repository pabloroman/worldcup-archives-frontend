<template>
    <header style="background-color: #260eae;" class="text-white">
        <div class="max-w-screen-lg mx-auto p-4 lg:px-0">

            <div class="text-center text-[10px] uppercase">{{ tournament }} > {{ game.stage_name }}</div>

            <div class="lg:hidden divide-y divide-white/30">

                <div class="grid grid-cols-[1fr,auto,1fr] py-2">
                    <div class="flex justify-self-start">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`">
                            <h2 class="text-xl font-bold">{{ game.home_team.name }}</h2>
                        </div>
                    </div>

                    <div class="w-20 text-center">
                        
                        <div class="text-3xl font-bold">{{ game.score }}</div>
                        <div v-if="game.penalty_shootout">
                            <span class="">{{ game.score_penalties }}</span>
                        </div>
                    </div>

                    <div class="flex justify-self-end">
                        <div class="flex items-center space-x-2">
                            <h2 class="text-xl font-bold">{{ game.away_team.name }}</h2>
                            <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        </div>

                    </div>
                </div>

                <div class="grid grid-cols-[1fr,auto,1fr] py-2">

                    <div class="flex flex-col justify-self-start">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.home_team">
                                <div class="text-xs text-left">{{  goal.name }} ({{ goal.minute }})</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-10 text-center"></div>

                    <div class="flex flex-col justify-self-end">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.away_team">
                                <div class="text-xs text-right">{{  goal.name }} ({{ goal.minute }})<span v-if="goal.penalty"> (P)</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="hidden">
                <div class="text-center">{{ game.stage_name }}</div>
            
                <div class="flex text-center items-center mt-6">
                    <section class="flex justify-end flex-col w-1/2">
                        <div class="flex items-center space-x-4">
                            <img class="h-12 rounded" :src="`/countries/${game.home_team.code}.svg`">
                            <h2 class="text-4xl font-bold">{{ game.home_team.name }}</h2>
                        </div>
                        <div class="">
                            Goals
                        </div>
                    </section>

                    <section class="text-center px-6 shrink-0">
                        <div class="text-4xl font-bold">{{ game.score }}</div>
                        <div v-if="game.penalty_shootout">
                            <span class="">{{ game.score_penalties }}</span>
                        </div>
                    </section>

                    <section class="flex justify-start w-1/2">
                        <div class="flex items-center space-x-4">
                            <h2 class="text-4xl font-bold">{{ game.away_team.name }}</h2>
                            <img class="h-12 rounded" :src="`/countries/${game.away_team.code}.svg`">
                        </div>
                    </section>
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