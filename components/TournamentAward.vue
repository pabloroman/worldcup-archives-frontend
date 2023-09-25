<template>
    <div class="flex space-x-1 items-center" v-for="(winner, index) in searchAwardsByName(this.awards, this.name)" :key="index">
      <span>{{ winner.player.given_name }} {{ winner.player.family_name }}</span> <img class="h-3" :src="`countries/${winner.team.code}.svg`">
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