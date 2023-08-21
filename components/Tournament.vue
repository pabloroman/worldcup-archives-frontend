<template>

    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <div>{{ tournament.data.name }}</div>
        <div>{{ tournament.data.start_date }}</div>
        <div>{{ tournament.data.end_date }}</div>
        <h3>Teams</h3>
        <div v-for="team in tournament.data.teams">
            {{  team.name }}
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        slug: {
            type: String,
            required: true
        }
    });

    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: tournament, pending } = await useLazyFetch(
        API_BASE_URL + '/api/tournament/'+props.slug
    );
</script>