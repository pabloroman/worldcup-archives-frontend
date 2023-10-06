<template>
    <tr>
        <td class="align-top whitespace-nowrap px-3 py-4">{{ game.stage_name }}</td>
        <td class="align-top whitespace-nowrap px-3 py-4"><div class="font-bold flex space-x-2"><img class="h-6" :src="`/countries/${game.home_team.code}.svg`"><span>{{ game.home_team.name }}</span></div></td>
        <td class="align-top whitespace-nowrap px-3 py-4">{{ game.home_team_score }} - {{ game.away_team_score }} </td>
        <td class="align-top whitespace-nowrap px-3 py-4"><div class="font-bold flex space-x-2"><img class="h-6" :src="`/countries/${game.away_team.code}.svg`"><span>{{ game.away_team.name }}</span></div></td>
        <td class="align-top whitespace-nowrap px-3 py-4"><NuxtLink :to="'/tournaments/'+route.params.tournament+'/games/'+game.id">Game details</NuxtLink></td>
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