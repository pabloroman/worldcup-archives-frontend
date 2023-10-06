<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
            <div class="max-w-screen-lg mx-auto py-10">
                <h2 class="text-4xl text-medium">{{ game.data.name }}</h2>
                <p>{{ game.data.stage_name }}</p>
                <p>{{ game.data.match_date }}</p> <p>{{ game.data.stadium.name }} &bull; {{ game.data.stadium.city }}, {{ game.data.stadium.country }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute();

    const props = defineProps({
        game: {
            type: String,
            required: true
        },
        tournament: {
            type: String,
            required: true
        }
    });
 
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: game, pending } = await useLazyFetch(
        API_BASE_URL + `/api/game/${props.game}`
    );
</script>