<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <div class="min-h-screen bg-center bg-gray-100">
            <div class="max-w-screen-lg mx-auto py-10">
                <h2 class="text-4xl text-medium">{{ team.data.team.name }}</h2>
                <p>{{ team.data.performance }}</p>
                <h3 class="text-2xl">Squad</h3>
                <ul class="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                    <li class="group relative flex flex-col items-start" v-for="member in team.data.squad_members">
                        <div>{{ member.shirt_number }} {{ member.position_code }}</div> <span class="text-bold">{{ member.player.given_name }} {{ member.player.family_name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        team: {
            type: String,
            required: true
        },
        tournament: {
            type: String,
            required: true
        }
    });
 
    const { API_BASE_URL } = useRuntimeConfig().public;
    const { data: team, pending } = await useLazyFetch(
        API_BASE_URL + `/api/team/${props.team}/tournament/${props.tournament}`
    );
</script>