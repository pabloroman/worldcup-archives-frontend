<template>
    <header class="bg-gradient-to-br from-[#0E1E2C] from-20% via-[#000000] via-30% to-[#283B45] text-white">
        <div class="max-w-screen-lg mx-auto p-4 lg:px-0 lg:py-8">

            <div class="text-center text-[12px] lg:text-base text-slate-400 uppercase"><NuxtLink :to="'/tournaments/'+route.params.tournament">{{ game.tournament_name }} &bull; {{ game.stage_name }}</NuxtLink></div>

            <div class="divide-y divide-white/30">

                <div class="grid grid-cols-[1fr,auto,1fr] py-2 lg:py-6">
                    <div class="flex justify-self-start">
                        <div class="flex items-center space-x-2 lg:space-x-4 flex-col lg:flex-row">
                            <img class="h-6 lg:h-12 rounded lg:order-first" :src="`/countries/${game.home_team.code}.svg`">
                            <h2 class="text-lg lg:text-4xl uppercase font-bold lg:order-last text-center">{{ game.home_team.name }}</h2>
                        </div>
                    </div>

                    <div class="w-20 lg:w-32 text-center flex flex-col items-center justify-center">
                        <div class="text-3xl lg:text-6xl font-bold">{{ game.score }}</div>
                        <div v-if="game.penalty_shootout" class="lg:text-2xl">
                            ({{ game.score_penalties }})
                        </div>
                        <div v-if="game.extra_time && !game.penalty_shootout" class="lg:text-2xl" >(a.e.t)</div>
                    </div>

                    <div class="flex justify-self-end">
                        <div class="flex items-center space-x-2 lg:space-x-4 flex-col lg:flex-row lg:space-x-reverse">
                            <img class="h-6 lg:h-12 rounded lg:order-last" :src="`/countries/${game.away_team.code}.svg`">
                            <h2 class="text-lg lg:text-4xl uppercase font-bold lg:order-first text-center">{{ game.away_team.name }}</h2>
                        </div>

                    </div>
                </div>

                <div class="grid grid-cols-[1fr,auto,1fr] py-2">

                    <div class="flex flex-col justify-self-start">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.home_team">
                                <div class="text-[12px] lg:text-lg text-slate-400 text-left">{{  goal.name }} ({{ goal.minute }})
                                    <span v-if="goal.penalty"> (P)</span>
                                    <span v-if="goal.own_goal"> (OG)</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-10 text-center"></div>

                    <div class="flex flex-col justify-self-end">
                        <div v-for="goal in game.goals">
                            <div v-if="goal.away_team">
                                <div class="text-[12px] lg:text-lg text-slate-400 text-right">{{  goal.name }} ({{ goal.minute }})
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

    const route = useRoute();

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