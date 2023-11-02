<template>
    <template v-if="props.tournament.id == 'WC-2002'">
        <img class="h-8 rounded" src="/hosts/Korea.svg"><img class="h-8 rounded" src="/hosts/Japan.svg">
    </template>
    <template v-else>
        <img class="h-8 rounded" :src="`/hosts/${props.tournament.host_country}.svg`">
    </template>
</template>


<script setup>

    const props = defineProps({
        tournament: {
            type: Object,
            required: true
        }
    });
 
</script>