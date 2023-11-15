<template>
    <tr>
        <td class="align-middle whitespace-nowrap">
        <NuxtLink :to="'/tournaments/'+tournament+'/games/'+game.id" class="w-full block py-1 lg:py-3">
            <div class="flex space-x-3 items-center w-full justify-items-stretch">
                <div class="flex-grow flex space-x-3 items-center">
                    <div class="font-medium flex items-center space-x-2 text-base lg:text-lg">
                        <img class="h-4 lg:h-6 rounded" :src="`/countries/${game.home_team.code}.svg`"><span>{{ game.home_team.name }}</span>
                    </div>
                    <div class="text-lg lg:text-xl font-bold flex items-center space-x-1">
                        <span>{{ game.home_team_score }}</span>
                        <span v-if="game.penalty_shootout" class="text-sm lg:text-base font-normal">({{ game.home_team_score_penalties }})</span>
                            <span>-</span>
                        <span>{{ game.away_team_score }}</span>
                        <span v-if="game.penalty_shootout" class="text-sm lg:text-base font-normal">({{ game.away_team_score_penalties }})</span>
                        <span class="text-sm lg:text-base font-normal" v-if="game.extra_time && !game.penalty_shootout">(a.e.t)</span>
                    </div>
                    <div class="font-medium flex items-center space-x-2 text-base lg:text-lg">
                        <span>{{ game.away_team.name }}</span><img class="h-4 lg:h-6 rounded" :src="`/countries/${game.away_team.code}.svg`">
                    </div>
                </div>
                <div class="hidden lg:block text-slate-400 justify-self-end text-right">{{ game.match_date }}, {{ game.match_time }}</div>
            </div>
        </NuxtLink>
        </td>
    </tr>
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