<template>
    <header style="background-color: #260eae;" class="text-white">
        <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">

            <div>
                <div class="text-center">{{ game.stage_name }}</div>
            
                <div class="flex text-center items-center mt-6">
                    <section class="flex justify-end w-1/2">
                        <div class="flex items-center space-x-4">
                            <img class="h-12 rounded" :src="`/countries/${game.home_team.code}.svg`">
                            <h2 class="text-4xl text-medium font-bold">{{ game.home_team.name }}</h2>
                        </div>
                    </section>

                    <section class="text-center px-6 shrink-0">
                        <div class="text-4xl text-medium font-bold">{{ game.score }}</div>
                        <div v-if="game.penalty_shootout">
                            <span class="">{{ game.score_penalties }}</span>
                        </div>
                    </section>

                    <section class="flex justify-start w-1/2">
                        <div class="flex items-center space-x-4">
                            <h2 class="text-4xl text-medium font-bold">{{ game.away_team.name }}</h2>
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