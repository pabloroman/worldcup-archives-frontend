<template>

<table class="min-w-full table-auto text-left divide-y divide-gray-300">

    <template v-if="props.games.find(game => game.stage_name == 'final')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Final</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'final')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <template v-if="props.games.find(game => game.stage_name == 'final round')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Final round</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'final round')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <template v-if="props.games.find(game => game.stage_name == 'third-place match')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Third-place match</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'third-place match')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <template v-if="props.games.find(game => game.stage_name == 'semi-finals')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Semi-finals</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'semi-finals')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <template v-if="props.games.find(game => game.stage_name == 'quarter-finals')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Quarter-finals</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'quarter-finals')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <template v-if="props.games.find(game => game.stage_name == 'round of 16')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Round of 16</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'round of 16')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    
    <template v-if="props.games.find(game => game.stage_name == 'second group stage')">
    <tr><th class="px-3 pb-2 pt-10" colspan="3">Second group stage</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'second group stage')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
    </template>

    <tr><th class="px-3 pb-2 pt-10" colspan="3">Group stage</th></tr>
    <tbody v-for="game in props.games.filter(game => game.stage_name == 'group stage')">
        <GamePreview :game="game" :tournament="route.params.tournament"></GamePreview>
    </tbody>
</table>

</template>

<script setup>

    const route = useRoute();

    const props = defineProps({
        games: {
            type: Array,
            required: true
        }
    });
 
</script>