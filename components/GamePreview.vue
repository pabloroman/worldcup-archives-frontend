<template>
    <tr>
        <td class="align-middle whitespace-nowrap">
        <NuxtLink :to="'/tournaments/'+route.params.tournament+'/games/'+game.id" class="w-full block px-3 py-3">
            <div class="flex space-x-3 items-center w-full justify-items-stretch">
                <div class="flex-grow flex space-x-3 items-center">
                <div class="font-medium flex items-center space-x-2 text-lg">
                    <img class="h-6 rounded" :src="`/countries/${game.home_team.code}.svg`"><span>{{ game.home_team.name }}</span>
                </div>
                <div class="text-xl font-bold">{{ game.home_team_score }} - {{ game.away_team_score }} </div>
                <div class="font-medium flex items-center space-x-2 text-lg">
                    <img class="h-6 rounded" :src="`/countries/${game.away_team.code}.svg`"><span>{{ game.away_team.name }}</span>
                </div>
            </div>
                <div class="text-slate-400 justify-self-end text-right">{{ game.match_date }}, {{ game.match_time }}</div>
            </div>
        </NuxtLink>
        </td>
    </tr>
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
        }
    });
 
</script>