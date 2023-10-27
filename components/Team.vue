<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
            <div class="max-w-screen-lg mx-auto py-10">
                <div class="flex space-x-2">
                    <img class="h-8 rounded" :src="`/countries/${team.country.code}.svg`">
                    <h2 class="text-4xl text-medium">{{ team.country.name }}</h2>
                </div>
                <!-- <p>{{ team.performance }}</p> -->

                <div class="grid lg:grid-cols-3 gap-4">

                    <div class="col-span-2">
                        <h3 class="text-2xl">Games</h3>
                        <GameList :games="team.matches"></GameList>
                    </div>

                    <div>
                        <h3 class="text-2xl">Manager</h3>
                        <ul class="mt-8 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="manager in team.managers">
                                {{ manager.name }}
                            </li>
                        </ul>

                        <h3 class="text-2xl">Squad</h3>
                        <ul class="mt-8 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="member in team.players">
                                <span>{{ member.shirt_number }}</span>
                                <span>{{ member.player }}</span>
                                <span>{{ member.position }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        team: {
            type: Object,
            required: true
        },
        tournament: {
            type: String,
            required: true
        }
    });
 
</script>