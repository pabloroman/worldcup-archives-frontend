<template>
    <div class="flex space-x-2 items-baseline text-xl" v-for="(winner, index) in searchAwardsByName(props.awards, props.name)" :key="index">
        <img class="h-4 relative top-px rounded-[2px]" :src="`/countries/${winner.player_team_code}.svg`"><span>{{ winner.player }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        awards: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    });

    function searchAwardsByName(awards, name) {
        return awards.filter(award => award.award_name.toLowerCase().includes(name.toLowerCase()));
    }
</script>