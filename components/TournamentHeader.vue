<template>
    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <header style="background-color: #ff9b54;">
            <div class="max-w-screen-lg mx-auto py-10">
                <div class="text-white opacity-75">{{ tournament.data.name }}</div>
                <h1 class="text-5xl font-bold tracking-tight text-white">{{ tournament.data.host_country }} {{ tournament.data.year }}</h1>
            </div>
        </header>
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
        API_BASE_URL + `/api/tournament/${props.slug}`
    );
</script>