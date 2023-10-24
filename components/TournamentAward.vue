<template>
    <div class="flex space-x-1 items-center" v-for="(winner, index) in searchAwardsByName(props.awards, props.name)" :key="index">
      <span>{{ winner.player }}</span> <img class="h-3" :src="`/countries/${winner.team.code}.svg`">
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
        return awards.filter(award => award.name.toLowerCase().includes(name.toLowerCase()));
    }
</script>