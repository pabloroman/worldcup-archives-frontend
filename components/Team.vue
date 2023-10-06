<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
            <div class="max-w-screen-lg mx-auto py-10">
                <div class="flex space-x-2">
                    <img class="h-8" :src="`/countries/${team.data.team.code}.svg`">
                    <h2 class="text-4xl text-medium">{{ team.data.team.name }}</h2>
                </div>
                <p>{{ team.data.performance }}</p>

                <div class="grid lg:grid-cols-3 gap-4">

                    <div class="col-span-2">
                        <h3 class="text-2xl">Games</h3>
                        <ul class="mt-8 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="game in team.data.games">
                                <NuxtLink :to="'/tournaments/'+route.params.tournament+'/games/'+game.id">
                                {{  game.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-2xl">Manager</h3>
                        <ul class="mt-8 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="manager in team.data.managers">
                                {{  manager.given_name }} {{  manager.family_name }}
                            </li>
                        </ul>

                        <h3 class="text-2xl">Squad</h3>
                        <ul class="mt-8 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="member in team.data.squad_members">
                                <span>{{ member.shirt_number }}</span>
                                <span>{{ member.player.given_name }} <span class="font-bold">{{ member.player.family_name }}</span></span>
                                <span>{{ member.position_code }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute();

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